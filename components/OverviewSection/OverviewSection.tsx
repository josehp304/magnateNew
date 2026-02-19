'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Register standard plugins (client-side only check)
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export interface OverviewFeature {
    icon: React.ReactNode; 
    text: string;
}

interface OverviewSectionProps {
    title: string;
    description: string;
    features: OverviewFeature[];
    ctaText?: string;
    ctaAction?: () => void;
}

const OverviewSection = ({
    title,
    description,
    features,
    ctaText = "Get Hired",
    ctaAction
}: OverviewSectionProps) => {

    // --- Animation Refs ---
    const sectionRef = useRef<HTMLDivElement>(null);
    const title1Ref = useRef<HTMLHeadingElement>(null);
    const desc1Ref = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // --- Parallax Setup ---
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    
    // A subtle parallax effect
    const yOverview = useTransform(scrollYProgress, [0, 1], [0, 60]);

    // --- GSAP Animation Setup ---
    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // TITLE & DESC Animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: title1Ref.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.from(title1Ref.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
            .from(desc1Ref.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6")
            .from(".feature-badge", {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.4")
            .from(ctaRef.current, {
                 y: 30, 
                 opacity: 0, 
                 duration: 0.8, 
                 ease: "power3.out" 
            }, "-=0.2");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className="bg-[#0a0a0a] text-white overflow-hidden relative"
        >
            {/* === ZONE 1: OVERVIEW === */}
            <motion.div 
                style={{ y: yOverview }}
                className="relative py-24 md:py-32"
            >
                {/* Ambient Background - Subtle radial gradient */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10 opacity-60 mix-blend-screen" />

                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 
                            ref={title1Ref}
                            className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                        >
                            {title}
                        </h2>
                        <p 
                            ref={desc1Ref}
                            className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto font-light"
                        >
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-badge group relative flex items-center gap-4 px-6 py-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm cursor-default"
                            >
                                <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors scale-110">
                                    {typeof feature.icon === 'string' ? (
                                         <span className="text-xl">{feature.icon}</span> 
                                    ) : (
                                         <span className="text-xl">{feature.icon}</span>
                                    )} 
                                </div>
                                <span className="text-base font-medium text-neutral-300 group-hover:text-white transition-colors">
                                    {feature.text}
                                </span>
                                
                                {/* Inner Glow Gradient */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        ))}
                    </div>

                    {/* CTA Zone */}
                    {ctaText && (
                        <div 
                            ref={ctaRef}
                            className="text-center"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={ctaAction}
                                className="relative group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-indigo-600 rounded-full overflow-hidden shadow-2xl hover:shadow-indigo-500/30 transition-shadow"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 transition-opacity group-hover:opacity-90" />
                                <span className="relative z-10 flex items-center gap-2">
                                    {ctaText}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default OverviewSection;

