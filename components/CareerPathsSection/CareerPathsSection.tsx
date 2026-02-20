'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp } from 'lucide-react';

export interface Company {
    name: string;
    logo: string;
}

export interface Career {
    title: string;
    salary: number;
    growth: number;
    demand: 'critical' | 'high' | 'moderate';
    skills: string[];
    companies: Company[];
    color: string;
    featured?: boolean;
}

interface CareerStats {
    placementRate: string;
    avgSalary: string;
}

interface CareerPathsSectionProps {
    title: string;
    subtitle: string;
    description: string;
    careers: Career[];
    stats: CareerStats;
}

const CareerPathsSection = ({ title, subtitle, description, careers, stats }: CareerPathsSectionProps) => {
    return (
        <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
             {/* Background Gradients */}
             <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-12">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm font-medium mb-6">
                            {subtitle.toUpperCase()}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-neutral-400 leading-relaxed font-light">
                            {description}
                        </p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="flex flex-wrap gap-6 shrink-0 w-full md:w-auto">
                        <div className="flex-1 md:flex-none p-6 rounded-2xl bg-[#111] border border-white/5 text-center min-w-[140px]">
                            <div className="text-3xl font-bold text-emerald-400 mb-1">{stats.placementRate}</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Placement Rate</div>
                        </div>
                        <div className="flex-1 md:flex-none p-6 rounded-2xl bg-[#111] border border-white/5 text-center min-w-[140px]">
                            <div className="text-3xl font-bold text-emerald-400 mb-1">{stats.avgSalary}</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Avg Salary</div>
                        </div>
                    </div>
                </div>

                {/* Career Grid - Bento Style */}
                <div className="grid md:grid-cols-3 gap-6">
                    {careers.map((career, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${career.featured ? 'md:col-span-2' : ''} group relative overflow-hidden rounded-3xl bg-[#111] border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10 p-8`}
                        >
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-100 transition-colors">
                                            {career.title}
                                        </h3>
                                        {/* Icon or Badge */}
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                            <Briefcase className="w-5 h-5" />
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div>
                                            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Avg. Salary</p>
                                            <p className="text-white font-mono font-medium">₹{(career.salary/100000).toFixed(1)} LPA</p>
                                        </div>
                                        <div>
                                            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Growth</p>
                                            <p className="text-emerald-400 font-bold flex items-center gap-1">
                                                <TrendingUp className="w-3 h-3" /> 
                                                +{career.growth}%
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {career.skills.slice(0, 3).map((skill, idx) => (
                                            <span key={idx} className="px-3 py-1 rounded bg-white/5 text-neutral-400 text-xs group-hover:bg-white/10 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                        {career.skills.length > 3 && (
                                            <span className="px-3 py-1 rounded bg-white/5 text-neutral-500 text-xs">
                                                +{career.skills.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Companies */}
                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-xs text-neutral-500">Hiring Partners</span>
                                        <div className="flex -space-x-2">
                                            {career.companies.slice(0, 4).map((company, idx) => (
                                                <div key={idx} className="w-8 h-8 rounded-full bg-white/10 border-2 border-[#111] flex items-center justify-center text-[10px] font-bold text-white" title={company.name}>
                                                    {company.name[0]}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerPathsSection;
