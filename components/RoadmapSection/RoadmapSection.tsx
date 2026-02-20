'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { CheckCircle, Circle, ArrowDown } from 'lucide-react';

export interface RoadmapItem {
    type: 'node' | 'checkpoint';
    label: string;
    status?: 'core' | 'tool' | 'db' | 'nav';
}

export interface RoadmapPhase {
    phase: string;
    description: string;
    color: string;
    icon: React.ReactNode;
    items: RoadmapItem[];
}

interface RoadmapSectionProps {
    title: string;
    description: string;
    roadmapData: RoadmapPhase[];
}

const RoadmapSection = ({ title, description, roadmapData }: RoadmapSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    // Parallax or scroll progress for the connecting line
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-16 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
             {/* Ambient Background */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        {title}
                    </h2>
                    <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="relative">
                    {/* Central Line Background (Dim) */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:transform md:-translate-x-1/2" />
                    
                    {/* Active Line (Progress) */}
                    <motion.div 
                        style={{ height: lineHeight }}
                        className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-indigo-500/50 md:transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.5)] origin-top"
                    />

                    <div className="space-y-12 md:space-y-24">
                        {roadmapData.map((phase, index) => (
                            <div 
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Mobile: Use a flex row layout to ensure alignment */}
                                <div className="flex w-full md:contents">
                                    {/* Timeline Node / Dot Wrapper for Mobile */}
                                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex-shrink-0 w-12 flex justify-center pt-2 md:pt-6 relative z-10">
                                        <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="flex-1 min-w-0 md:w-1/2 md:px-12"
                                    >
                                        <div className={`
                                            group relative p-5 md:p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10
                                            text-left w-full
                                        `}>
                                            {/* Card Hover Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                                            <div className="relative z-10">
                                                <div className="flex items-center gap-4 mb-4 md:mb-6">
                                                    <div className="p-3 rounded-xl bg-white/5 text-indigo-400 group-hover:text-indigo-300 transition-colors shrink-0">
                                                        {phase.icon}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-100 transition-colors truncate">
                                                            {phase.phase}
                                                        </h3>
                                                        <p className="text-xs md:text-sm font-light text-neutral-500 line-clamp-2">
                                                            {phase.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {phase.items.map((item, idx) => (
                                                        <span
                                                            key={idx}
                                                            className={`
                                                                px-2.5 py-1.5 rounded-md text-[11px] md:text-xs font-medium border transition-colors max-w-full
                                                                ${item.type === 'checkpoint'
                                                                    ? 'w-full mt-2 border-dashed border-indigo-500/30 bg-indigo-500/5 text-indigo-300 flex items-center justify-center gap-2'
                                                                    : 'bg-white/[0.03] border-white/5 text-neutral-300 hover:bg-white/[0.08] hover:border-white/10 truncate'
                                                                }
                                                            `}
                                                        >
                                                            {item.type === 'checkpoint' && <CheckCircle className="w-3 h-3 flex-shrink-0" />}
                                                            <span className="truncate">{item.label}</span>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>


                                    {/* Empty space balancing */}
                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default RoadmapSection;
