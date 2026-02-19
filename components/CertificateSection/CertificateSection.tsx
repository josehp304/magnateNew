'use client';

import React from 'react';
import { Award, CheckCircle2, Zap } from 'lucide-react';
import Image from 'next/image';




export interface CertificateFeature {
    icon?: React.ReactNode; // Or text/component
    title: string;
    description: string;
}

interface CertificateSectionProps {
    title: string;
    description: string;
    features: CertificateFeature[];
    roleName: string;
    backgroundColor?: string;
    recipientName?: string;
    date?: string;
}

const CertificateSection = ({
    title,
    description,
    features,
    roleName,
    backgroundColor = '#0a0a0a',
    recipientName = 'John Doe',
    date = 'Feb 14, 2026'
}: CertificateSectionProps) => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-[#0a0a0a]">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Column: Content */}
                <div>
                     <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-sm font-medium mb-6">
                        CERTIFICATION
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed font-light">
                        {description}
                    </p>

                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-4 items-start group">
                                <div className="mt-1 w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-purple-400 group-hover:border-purple-500/30 group-hover:bg-purple-900/10 transition-all">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">{feature.title}</h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <button className="mt-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
                        Get Certified
                        <Award className="w-4 h-4 ml-1" />
                    </button>
                </div>

                {/* Right Column: Premium Certificate Mockup */}
                <div className="relative perspective-1000">
                     {/* Decorative Elements behind Certificate */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-xl blur-xl opacity-50" />
                    
                    <div className="relative bg-[#111] border border-white/10 rounded-xl p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        {/* Certificate Border Container */}
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-lg p-8 md:p-10 relative overflow-hidden aspect-[1.4/1] flex flex-col justify-between">
                            
                            {/* Watermark */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                                <Award className="w-64 h-64 text-white" />
                            </div>

                            {/* Header */}
                            <div className="flex justify-between items-start border-b border-white/5 pb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                        M
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-purple-400 tracking-[0.2em] uppercase">Magnate Academy</div>
                                        <div className="text-[10px] text-neutral-500">Excellence in Education</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Certificate ID</div>
                                    <div className="text-xs font-mono text-white">MAG-2024-8569</div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="text-center py-8">
                                <p className="text-sm text-neutral-400 mb-2 font-light">This is to certify that</p>
                                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-wide">{recipientName}</h3>
                                <p className="text-sm text-neutral-400 mb-6 font-light">has successfully completed the professional course in</p>
                                <h4 className="text-xl md:text-2xl font-bold text-purple-400 mb-2">{roleName}</h4>
                                <p className="text-xs text-neutral-500 max-w-md mx-auto">
                                    Testing proficiency in advanced concepts, practical implementation, and industry-standard practices.
                                </p>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-end pt-6 border-t border-white/5">
                                <div>
                                    <div className="h-px w-32 bg-white/20 mb-2"></div>
                                    <p className="text-xs text-white font-medium">Head of Education</p>
                                </div>
                                <div className="flex items-center gap-4">
                                     <div className="text-right">
                                        <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Date of Issue</p>
                                        <p className="text-xs text-white font-medium">{date}</p>
                                    </div>
                                    {/* Gold/Premium Seal Mockup */}
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 shadow-lg flex items-center justify-center relative">
                                        <div className="absolute inset-1 border border-yellow-400/30 rounded-full" />
                                        <Award className="w-6 h-6 text-yellow-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default CertificateSection;
