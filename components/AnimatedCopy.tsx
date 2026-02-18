"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function AnimatedCopy({
    children,
    colorInitial = "#dddddd",
    colorAccent = "#abff02",
    colorFinal = "#000000",
}: {
    children: React.ReactNode;
    colorInitial?: string;
    colorAccent?: string;
    colorFinal?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const splitRefs = useRef<{ wordSplit: SplitText; charSplit: SplitText }[]>([]);
    const lastScrollProgress = useRef(0);
    const colorTransitionTimers = useRef(new Map<number, NodeJS.Timeout>());
    const completedChars = useRef(new Set<number>());

    useGSAP(
        () => {
            if (!containerRef.current) return;

            // Clean up previous splits if they exist (though useGSAP typically handles cleanup on unmount)
            // But explicitly reverting is safer for DOM structure consistency
            if (splitRefs.current.length > 0) {
                 splitRefs.current.forEach(({ wordSplit, charSplit }) => {
                    charSplit.revert();
                    wordSplit.revert();
                 });
                 splitRefs.current = [];
            }

            lastScrollProgress.current = 0;
            colorTransitionTimers.current.clear();
            completedChars.current.clear();

            // Handle single vs multiple children
            let elements: Element[] = [];
            if (containerRef.current.hasAttribute("data-copy-wrapper")) {
                const childElements = Array.from(containerRef.current.children);
                if (childElements.length > 0) {
                    elements = childElements;
                } else {
                    // If no children elements (e.g. just text node), use wrapper
                    elements = [containerRef.current];
                }
            } else {
                elements = [containerRef.current];
            }

            // Initialize SplitText
            elements.forEach((element) => {
                // Ensure element has text content before splitting
                if (element.textContent?.trim()) {
                    const wordSplit = new SplitText(element, {
                        type: "words",
                        wordsClass: "word",
                    });
                    const charSplit = new SplitText(wordSplit.words, {
                        type: "chars",
                        charsClass: "char",
                    });
                    splitRefs.current.push({ wordSplit, charSplit });
                }
            });

            const allChars = splitRefs.current.flatMap(({ charSplit }) => charSplit.chars);
            gsap.set(allChars, { color: colorInitial });

            // Helper for delayed transition
            const scheduleFinalTransition = (char: Element, index: number) => {
                if (colorTransitionTimers.current.has(index)) {
                    clearTimeout(colorTransitionTimers.current.get(index));
                }

                const timer = setTimeout(() => {
                    if (!completedChars.current.has(index)) {
                        gsap.to(char, {
                            duration: 0.1,
                            ease: "none",
                            color: colorFinal,
                            onComplete: () => {
                                completedChars.current.add(index);
                            }
                        });
                    }
                    colorTransitionTimers.current.delete(index);
                }, 100);

                colorTransitionTimers.current.set(index, timer);
            };

            const trigger = ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 90%",
                end: "top 20%",
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const totalChars = allChars.length;
                    const isScrollingDown = progress >= lastScrollProgress.current;
                    const currentCharIndex = Math.floor(progress * totalChars);

                    allChars.forEach((char, index) => {
                        if (isScrollingDown) {
                            if (index === currentCharIndex) {
                                if (colorTransitionTimers.current.has(index)) {
                                    clearTimeout(colorTransitionTimers.current.get(index)!);
                                    colorTransitionTimers.current.delete(index);
                                }
                                gsap.set(char, { color: colorAccent });
                            } else if (index < currentCharIndex) {
                                if (!completedChars.current.has(index) && !colorTransitionTimers.current.has(index)) {
                                    scheduleFinalTransition(char, index);
                                } else if (completedChars.current.has(index)) {
                                    gsap.set(char, { color: colorFinal });
                                }
                            } else {
                                gsap.set(char, { color: colorInitial });
                            }
                        } else {
                            if (index >= currentCharIndex) {
                                if (colorTransitionTimers.current.has(index)) {
                                    clearTimeout(colorTransitionTimers.current.get(index)!);
                                    colorTransitionTimers.current.delete(index);
                                }
                                completedChars.current.delete(index);
                                gsap.set(char, { color: colorInitial });
                            } else {
                                if (completedChars.current.has(index)) {
                                    gsap.set(char, { color: colorFinal });
                                }
                            }
                        }
                    });

                    lastScrollProgress.current = progress;
                }
            });

            // Cleanup function for this effect
            return () => {
                trigger.kill();
                colorTransitionTimers.current.forEach(timer => clearTimeout(timer));
                // Crucial: Revert SplitText changes to restore original DOM structure
                // This prevents React from getting confused when removing/updating nodes
                if (splitRefs.current.length > 0) {
                     splitRefs.current.forEach(({ wordSplit, charSplit }) => {
                        charSplit.revert();
                        wordSplit.revert();
                     });
                     splitRefs.current = [];
                }
            };
        },
        { scope: containerRef, dependencies: [colorInitial, colorAccent, colorFinal, children] } // Added children as dependency to re-run if text changes
    );

    // Instead of cloning elements (which is risky if children changes),
    // always wrap in a div that we control. This isolates SplitText manipulation from React's parent reconciliation.
    return (
        <div ref={containerRef} data-copy-wrapper="true">
            {children}
        </div>
    );
}
