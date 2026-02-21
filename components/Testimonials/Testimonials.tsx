"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["900"] });

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "VP of Operations",
        quote: "Magnate's corporate training structure completely overhauled our leadership pipeline. The mentorship is real, practical, and immediately applicable.",
        gradient: "linear-gradient(135deg, #01C5C1, #0095D7)"
    },
    {
        id: 2,
        name: "David Ross",
        role: "Director, FinCorp",
        quote: "We've tried multiple platforms, but none offered the depth of industry expertise that Magnate does. It's built for serious professionals.",
        gradient: "linear-gradient(135deg, #5449CC, #8B81FB)"
    },
    {
        id: 3,
        name: "Emily Chen",
        role: "Head of Product",
        quote: "The career outcomes speak for themselves. Our team's efficiency and strategic thinking improved within weeks of enrollment.",
        gradient: "linear-gradient(135deg, #0069F9, #4D99FB)"
    },
    {
        id: 4,
        name: "Michael Scott",
        role: "Regional Manager",
        quote: "Exceptional quality. The 'Build Authority' track helped me pivot my career into a senior executive role seamlessly.",
        gradient: "linear-gradient(135deg, #16A5A3, #A1E2B8)"
    },
    {
        id: 5,
        name: "Jessica Pearson",
        role: "Managing Partner",
        quote: "A masterclass in modern corporate education. No fluff, just hard skills and high-level strategy.",
        gradient: "linear-gradient(135deg, #3429A3, #0069F9)"
    },
    {
        id: 6,
        name: "James Wilson",
        role: "CTO, TechWave",
        quote: "The technical depth and strategic oversight provided by Magnate are unmatched. It accelerated our digital transformation.",
        gradient: "linear-gradient(135deg, #03C5BD, #6BE9E6)"
    },
    {
        id: 7,
        name: "Anna Sergey",
        role: "Lead Designer",
        quote: "I found my creative voice through the specialized tracks. The community feedback loop is invaluable for rapid growth.",
        gradient: "linear-gradient(135deg, #0028A1, #5449CC)"
    },
    {
        id: 8,
        name: "Robert Fox",
        role: "Investment Analyst",
        quote: "The financial modeling modules are world-class. Better than what I learned during my MBA.",
        gradient: "linear-gradient(135deg, #011C77, #0095D7)"
    }
];

const Testimonials = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const wordRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const [gap, setGap] = useState(120);

    // Calculate Gap Logic
    useEffect(() => {
        const updateGap = () => {
            const calculatedGap = Math.max(120, window.innerWidth / (testimonials.length + 1));
            setGap(calculatedGap);
        };
        updateGap();
        window.addEventListener("resize", updateGap);
        return () => window.removeEventListener("resize", updateGap);
    }, []);


    useEffect(() => {
        // GSAP Setup
        const ctx = gsap.context(() => {
            const word = wordRef.current;
            const cards = cardsRef.current;
            const section = sectionRef.current;

            if (word && cards && section) {
                // Determine widths
                const wordWidth = word.scrollWidth;
                const cardsWidth = cards.scrollWidth;
                const viewportWidth = window.innerWidth;

                // 2) Stop Condition (IMPORTANT)
                // The animation must stop when the last letter of “TESTIMONIALS”
                // aligns exactly with the right edge of the screen.
                // Formula: Total Width of Word - Viewport Width
                // If wordWidth < viewportWidth, result is negative, meaning no scroll needed.
                const wordScrollDistance = Math.max(0, wordWidth - viewportWidth);

                // Calculate horizontal scroll distance for cards
                // We want to scroll enough so the last card is fully visible
                // Adding some padding (e.g., 100px) ensures the last card isn't stuck at the exact edge
                const cardsScrollDistance = Math.max(0, cardsWidth - viewportWidth + 100);

                // Use the larger distance to determine the total scroll height of the section
                const maxScroll = Math.max(wordScrollDistance, cardsScrollDistance);

                // 4) Edge Cases: Only animate if there is distance to scroll
                if (maxScroll > 0) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: () => `+=${maxScroll}`, 
                            scrub: 1, 
                            pin: true,
                            invalidateOnRefresh: true,
                            anticipatePin: 1,
                        }
                    });

                    // Animate Word
                    // Force the duration to be proportional to distance so it feels consistent
                    // But effectively we want the animation to complete exactly when we scroll 'maxScroll' amount.
                    // Since both are inserted at 0, they both span whatever explicit duration we give.
                    // If we want them to finish at exactly the same time (end of scroll), we just let them both run for duration: 1.
                    
                    if (wordScrollDistance > 0) {
                        tl.to(word, {
                            x: -wordScrollDistance, 
                            ease: "none",
                            duration: 1
                        }, 0);
                    }

                    // Animate Cards
                    if (cardsScrollDistance > 0) {
                        tl.to(cards, {
                            x: -cardsScrollDistance, 
                            ease: "none",
                            duration: 1
                        }, 0);
                    }
                }
            }
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []); // Removed [gap] dependency to avoid re-running mid-scroll unnecessarily, or rely on resize listener inside.

    // Handle Resize separately to refresh ST
    useEffect(() => {
        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className="relative w-screen h-screen overflow-hidden bg-[#020E3A]"
        >
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            
            <div ref={containerRef} className="relative h-full w-full">
                

                {/* Background Word Layer */}
                <div 
                    ref={wordRef}
                    className={`${playfair.className} absolute top-1/2 left-0 -translate-y-1/2 text-[45vh] md:text-[60vh] leading-none font-black text-white/5 whitespace-nowrap z-0 pointer-events-none select-none will-change-transform`}
                     style={{
                         color: 'rgba(1, 197, 193, 0.06)',
                         textShadow: '0 0 60px rgba(1, 197, 193, 0.03)'
                    }}
                >
                    TESTIMONIALS
                </div>

                {/* Cards Layer */}
                <div 
                    ref={cardsRef}
                    className="absolute top-0 left-0 h-full flex items-center z-10 pl-[15vw] pr-[10vw] will-change-transform"
                    style={{ gap: `${gap}px` }}
                >
                    {testimonials.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                            className={`
                                flex-shrink-0 w-[340px] h-[240px] 
                                rounded-3xl p-8
                                bg-[#011C77]/30 backdrop-blur-md border border-[#01C5C1]/10
                                shadow-[0_25px_80px_rgba(0,0,0,0.5)] 
                                flex flex-col justify-between
                                relative group hover:bg-[#01C5C1]/10 hover:border-[#01C5C1]/20 transition-colors duration-500
                                ${index % 2 === 0 ? '-translate-y-16' : 'translate-y-16'}
                            `}
                        >
                            <div className="relative z-10">
                                <p className="text-white/90 text-sm font-light leading-relaxed line-clamp-4">
                                    "{card.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-3 mt-4 border-t border-[#01C5C1]/15 pt-4">
                                <div 
                                    className="w-10 h-10 rounded-full shadow-lg flex-shrink-0"
                                    style={{ background: card.gradient }}
                                />
                                <div>
                                    <h4 className="text-white font-bold text-sm">{card.name}</h4>
                                    <p className="text-white/40 text-[11px] font-medium tracking-wide uppercase">{card.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;