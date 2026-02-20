'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface Tool {
    name: string;
    icon: string;
    darkModeInvert?: boolean;
}

interface ToolsSectionProps {
    title: string;
    description: string;
    tools: Tool[];
}

const ToolsSection = ({ title, description, tools }: ToolsSectionProps) => {
    return (
        <section className="py-24 md:py-32 bg-[#0d0d0d] border-b border-white/5 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#0d0d0d] to-[#0d0d0d] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className="group flex flex-col items-center justify-center p-6 md:p-8 bg-[#151515] border border-white/5 rounded-2xl hover:border-indigo-500/30 hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
                        >
                            <div className={`relative w-12 h-12 md:w-16 md:h-16 mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300 ${tool.darkModeInvert ? 'dark:invert brightness-0 invert group-hover:invert-0' : ''}`}>
                                <Image
                                    src={tool.icon}
                                    alt={`${tool.name} logo`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-sm font-medium text-neutral-500 group-hover:text-white transition-colors">
                                {tool.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
