"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Placeholder data since we're refactoring from a purely visual component
const teamMembers = [
    { src: "/images/who-we-are/team-1.jpg", alt: "Team Collaboration", className: "md:col-span-2 aspect-[16/9]" },
    { src: "/images/who-we-are/team-2.jpg", alt: "Creative Session", className: "md:col-span-1 aspect-[3/4]" },
    { src: "/images/who-we-are/team-3.jpg", alt: "Strategic Planning", className: "md:col-span-1 aspect-[3/4]" },
    { src: "/images/who-we-are/team-4.jpg", alt: "Design Review", className: "md:col-span-2 aspect-[16/9]" },
    { src: "/images/who-we-are/team-5.jpg", alt: "Office Culture", className: "md:col-span-1 aspect-square" },
];

const WhoWeAre = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative py-32 bg-[#0a0a0a] overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Sticky Content Side */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-sm font-medium mb-8 tracking-wide">
                                WHO WE ARE
                            </span>
                            
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                                Crafting the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                                    Future of Learning
                                </span>
                            </h2>

                            <div className="space-y-6 text-lg text-neutral-400 font-light leading-relaxed mb-10">
                                <p>
                                    At Magnate, we bridge the gap between academic theory and industry reality. We are a collective of educators, industry veterans, and technologists dedicated to transforming how the world learns.
                                </p>
                                <p>
                                    Our methodology is simple yet profound: aggressive practical application backed by robust theoretical frameworks. We don't just teach; we immerse you in real-world scenarios.
                                </p>
                            </div>

                            <button className="group flex items-center gap-3 text-white border border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                                <span className="font-medium">Meet the Team</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Scrolling Image Grid Side */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {teamMembers.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`relative rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/20 transition-colors group ${member.className}`}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-10" />
                                    <Image
                                        src={member.src}
                                        alt={member.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Optional Caption Overlay */}
                                    <div className="absolute bottom-4 left-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <p className="text-white text-sm font-medium tracking-wide">{member.alt}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
