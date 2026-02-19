'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Mentor {
    name: string;
    role: string;
    photo: string;
    companyLogo?: string;
    companyName?: string;
    bio: string;
    linkedin?: string;
    twitter?: string;
}

interface MentorsSectionProps {
    title: string;
    description: string;
    mentors: Mentor[];
}

const MentorsSection = ({ title, description, mentors }: MentorsSectionProps) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl font-light leading-relaxed">
                        {description}
                    </p>
                </div>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 pb-12 md:pb-0 scrollbar-none -mx-6 px-6 md:mx-0 md:px-0"
                >
                    {mentors.map((mentor, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            key={index}
                            className="group relative shrink-0 w-[90vw] md:w-auto snap-center flex flex-col"
                        >
                            <div className="relative h-full bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10">
                                
                                {/* Header: Photo + Info */}
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-indigo-500/50 transition-colors">
                                        <Image
                                            src={mentor.photo}
                                            alt={mentor.name}
                                            fill
                                            className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                                            {mentor.name}
                                        </h3>
                                        <p className="text-indigo-400 text-sm font-medium mb-1">
                                            {mentor.role}
                                        </p>
                                        <p className="text-neutral-500 text-xs uppercase tracking-wider font-semibold">
                                            {mentor.companyName || "Tech Leader"}
                                        </p>
                                    </div>
                                </div>

                                {/* Bio */}
                                <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
                                    {mentor.bio}
                                </p>

                                {/* Footer: Socials + Company Logo */}
                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                    <div className="flex gap-4">
                                        {/* Placeholders for social icons if data isn't strict */}
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-indigo-500 hover:text-white transition-all cursor-pointer">
                                            <Linkedin className="w-4 h-4" />
                                        </div>
                                    </div>
                                    
                                     {mentor.companyLogo && (
                                        <div className="relative h-6 w-24 opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                                            <Image
                                                src={mentor.companyLogo}
                                                alt="Company"
                                                fill
                                                className="object-contain object-right"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MentorsSection;
