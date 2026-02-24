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
        gradient: "linear-gradient(135deg, #20ecff, #fb01ff)"
    },
    {
        id: 2,
        name: "David Ross",
        role: "Director, FinCorp",
        quote: "We've tried multiple platforms, but none offered the depth of industry expertise that Magnate does. It's built for serious professionals.",
        gradient: "linear-gradient(135deg, #5e0c5e, #fb01ff)"
    },
    {
        id: 3,
        name: "Emily Chen",
        role: "Head of Product",
        quote: "The career outcomes speak for themselves. Our team's efficiency and strategic thinking improved within weeks of enrollment.",
        gradient: "linear-gradient(135deg, #20ecff, #5e0c5e)"
    },
    {
        id: 4,
        name: "Michael Scott",
        role: "Regional Manager",
        quote: "Exceptional quality. The 'Build Authority' track helped me pivot my career into a senior executive role seamlessly.",
        gradient: "linear-gradient(135deg, #fb01ff, #20ecff)"
    },
    {
        id: 5,
        name: "Jessica Pearson",
        role: "Managing Partner",
        quote: "A masterclass in modern corporate education. No fluff, just hard skills and high-level strategy.",
        gradient: "linear-gradient(135deg, #100624, #5e0c5e)"
    },
    {
        id: 6,
        name: "James Wilson",
        role: "CTO, TechWave",
        quote: "The technical depth and strategic oversight provided by Magnate are unmatched. It accelerated our digital transformation.",
        gradient: "linear-gradient(135deg, #20ecff, #100624)"
    },
    {
        id: 7,
        name: "Anna Sergey",
        role: "Lead Designer",
        quote: "I found my creative voice through the specialized tracks. The community feedback loop is invaluable for rapid growth.",
        gradient: "linear-gradient(135deg, #5e0c5e, #20ecff)"
    },
    {
        id: 8,
        name: "Robert Fox",
        role: "Investment Analyst",
        quote: "The financial modeling modules are world-class. Better than what I learned during my MBA.",
        gradient: "linear-gradient(135deg, #fb01ff, #5e0c5e)"
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
            className="relative w-screen h-screen overflow-hidden"
            style={{
                background: `
                    radial-gradient(ellipse 80% 50% at 15% 40%, rgba(3, 14, 59, 0.9) 0%, transparent 60%),
                    radial-gradient(ellipse 60% 60% at 80% 70%, rgba(94, 12, 94, 0.55) 0%, transparent 55%),
                    radial-gradient(ellipse 50% 40% at 50% 100%, rgba(251, 1, 255, 0.12) 0%, transparent 60%),
                    linear-gradient(170deg, #030E3B 0%, #07093a 18%, #0d0630 38%, #100624 58%, #16052e 75%, #1e0538 90%, #250640 100%)
                `
            }}
        >
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            
            <div ref={containerRef} className="relative h-full w-full">

                {/* Dot grid pattern */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    aria-hidden
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(32, 236, 255, 0.18) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                        maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 30%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 30%, transparent 100%)',
                    }}
                />

                {/* Celestial nebula glow layers */}
                <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
                    {/* Top-left blue nebula */}
                    <div style={{
                        position: 'absolute', top: '-10%', left: '-5%',
                        width: '55%', height: '70%',
                        background: 'radial-gradient(ellipse, rgba(32, 100, 255, 0.18) 0%, rgba(3, 14, 59, 0.08) 50%, transparent 75%)',
                        filter: 'blur(40px)',
                    }} />
                    {/* Bottom-right purple nebula */}
                    <div style={{
                        position: 'absolute', bottom: '-5%', right: '5%',
                        width: '60%', height: '65%',
                        background: 'radial-gradient(ellipse, rgba(47, 16, 47, 0.08) 0%, rgba(251, 1, 255, 0.04) 40%, transparent 70%)',
                        filter: 'blur(1500px)',
                    }} />
                    {/* Centre soft transition band */}
                    <div style={{
                        position: 'absolute', top: '30%', left: '20%',
                        width: '60%', height: '50%',
                        background: 'radial-gradient(ellipse, rgba(32, 236, 255, 0.04) 0%, rgba(94, 12, 94, 0.06) 50%, transparent 80%)',
                        filter: 'blur(60px)',
                    }} />
                </div>

                {/* Background Word Layer */}
                <div 
                    ref={wordRef}
                    className={`${playfair.className} absolute top-1/2 left-0 -translate-y-1/2 text-[45vh] md:text-[60vh] leading-none font-black text-white/5 whitespace-nowrap z-0 pointer-events-none select-none will-change-transform`}
                     style={{
                         color: 'rgba(32, 236, 255, 0.06)',
                         textShadow: '0 0 60px rgba(251, 1, 255, 0.03)'
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
                                bg-[#5e0c5e]/20 backdrop-blur-md border border-[#20ecff]/10
                                shadow-[0_25px_80px_rgba(0,0,0,0.5)] 
                                flex flex-col justify-between
                                relative group hover:bg-[#fb01ff]/10 hover:border-[#20ecff]/20 transition-colors duration-500
                                ${index % 2 === 0 ? '-translate-y-16' : 'translate-y-16'}
                            `}
                        >
                            <div className="relative z-10">
                                <p className="text-white/90 text-sm font-light leading-relaxed line-clamp-4">
                                    "{card.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-3 mt-4 border-t border-[#20ecff]/15 pt-4">
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