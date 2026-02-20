'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export interface GuideStep {
    number: number;
    title: string;
    description: string;
}

interface GuideSectionProps {
    title: string;
    steps: GuideStep[];
    ctaTitle: string;
    ctaButtonText: string;
    ctaHref?: string;
}

const GuideSection = ({
    title,
    steps,
    ctaTitle,
    ctaButtonText,
    ctaHref = "/enroll"
}: GuideSectionProps) => {
    return (
        <section className="bg-[#0a0a0a] py-16 md:py-32 relative overflow-hidden">
             {/* Background Gradients */}
             <div className="absolute left-0 bottom-0 w-[800px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs md:text-sm font-medium tracking-wide mb-4 md:mb-6">
                        HOW IT WORKS
                    </span>
                    <h2 className="text-2xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto px-2">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-24">
                    {steps.map((step, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            key={step.number}
                            className="relative group p-5 md:p-8 rounded-2xl md:rounded-3xl bg-[#111] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden"
                        >
                            {/* Step Number Background - Responsive Size */}
                            <div className="absolute -top-2 -right-2 md:top-6 md:right-8 text-6xl md:text-8xl font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors pointer-events-none select-none">
                                {step.number}
                            </div>

                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 font-bold text-xl md:text-2xl mb-6 md:mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.1)] group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] relative z-10">
                                {step.number}
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white group-hover:text-indigo-100 transition-colors relative z-10">
                                {step.title}
                            </h3>
                            <p className="text-sm md:text-base text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors relative z-10">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Banner */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-white/10 p-6 md:p-16 text-center"
                >
                    <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
                    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                        <h2 className="text-xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-snug">
                            {ctaTitle}
                        </h2>
                        <Link
                            href={ctaHref}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-10 md:py-5 bg-white text-black font-bold text-sm md:text-lg rounded-full hover:bg-neutral-200 transition-colors hover:scale-105 transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto"
                        >
                            {ctaButtonText}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GuideSection;
