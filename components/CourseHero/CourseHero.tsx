'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register ScrollTrigger safely
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface BreadcrumbItem {
    label: string;
    href?: string;
    isActive?: boolean;
}

interface CourseHeroProps {
    title: string;
    description: string;
    bannerText: string;
    breadcrumbs: BreadcrumbItem[];
    ratingCount: number;
    learnerCount: string;
    courseType: string;
    duration: string;
    imageSrc: string;
    enquiryHref?: string;
    syllabusHref?: string;
}

const CourseHero = ({
    title,
    description,
    breadcrumbs,
    ratingCount,
    learnerCount,
    courseType,
    duration,
    imageSrc,
    enquiryHref,
    syllabusHref
}: CourseHeroProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const breadcrumbRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial Timeline
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // 1. Breadcrumbs Fade In
            tl.from(breadcrumbRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.2
            });

            // 2. Title Line Reveal
            tl.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                rotateX: 10,
                transformOrigin: "left top",
                stagger: 0.1
            }, "-=0.6");

            // 3. Stats & Meta Stagger
            const statItems = (statsRef.current as HTMLDivElement)?.children;
            if (statItems) {
                tl.from(statItems, {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1
                }, "-=0.6");
            }

            // 4. Description Fade
            tl.from(".hero-description", {
                y: 20,
                opacity: 0,
                duration: 0.8
            }, "-=0.4");

            // 5. Buttons Scale In
            tl.from(".hero-btn", {
                scale: 0.9,
                opacity: 0,
                y: 10,
                duration: 0.6,
                stagger: 0.1
            }, "-=0.6");

            // 6. Image Reveal (Scale + Fade)
            tl.from(imageRef.current, {
                scale: 1.15,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            }, "-=1.0");

            // Parallax Scroll Effect
            gsap.to(imageRef.current, {
                y: 100, // Move image down smoothly
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Text Parallax (slower)
            gsap.to(contentRef.current, {
                y: 40,
                opacity: 0.8,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#0a0a0a]"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ffc22a]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
                    
                    {/* LEFT CONTENT */}
                    <div ref={contentRef} className="space-y-10">
                        
                        {/* Breadcrumbs */}
                        <div ref={breadcrumbRef} className="flex items-center gap-2 text-sm text-gray-500 font-medium tracking-wide">
                            {breadcrumbs.map((item, idx) => (
                                <React.Fragment key={idx}>
                                    {idx > 0 && <span className="opacity-30">/</span>}
                                    <Link href={item.href || '#'} className={item.isActive ? "text-[#ffc22a] pointer-events-none" : "hover:text-white transition-colors cursor-pointer"}>
                                        {item.label}
                                    </Link>
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 
                            ref={titleRef}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                        >
                            {title.split(" ").map((word, i) => (
                                <span key={i} className="inline-block mr-3">
                                    {word}
                                </span>
                            ))}
                        </h1>

                        {/* Badges / Stats Grid */}
                        <div ref={statsRef} className="flex flex-wrap gap-6 md:gap-12 py-2 border-y border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gray-800 overflow-hidden relative">
                                            <Image 
                                                src={`https://randomuser.me/api/portraits/men/${i * 10}.jpg`} 
                                                alt="User" 
                                                fill 
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-[#ffc22a] flex items-center justify-center text-[10px] text-black font-bold">
                                        {learnerCount}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex text-[#ffc22a] text-sm">★★★★★</div>
                                    <span className="text-xs text-gray-400 font-medium">{ratingCount} Ratings</span>
                                </div>
                            </div>
                            
                            <div className="w-px h-10 bg-white/10 hidden md:block" />
                            
                            <div className="flex flex-col justify-center">
                                <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">Duration</span>
                                <span className="text-white font-medium">{duration}</span>
                            </div>

                            <div className="w-px h-10 bg-white/10 hidden md:block" />

                             <div className="flex flex-col justify-center">
                                <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">Format</span>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-white font-medium">{courseType}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="hero-description text-xl text-gray-400 leading-relaxed max-w-2xl font-light">
                            {description}
                        </p>

                        {/* CTA Actions */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hero-btn">
                                <Link
                                    href={enquiryHref || "/enroll"}
                                    className="group relative px-8 py-4 bg-[#ffc22a] text-black rounded-full font-bold text-lg overflow-hidden flex items-center gap-2"
                                >
                                    <span className="relative z-10">Start Learning Now</span>
                                    <motion.span 
                                        initial={{ x: 0 }} 
                                        whileHover={{ x: 5 }}
                                        className="relative z-10"
                                    >
                                        →
                                    </motion.span>
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hero-btn">
                                <Link
                                    href={syllabusHref || "#modules"}
                                    className="group px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-all text-lg flex items-center gap-2"
                                >
                                    <span>Download Syllabus</span>
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative h-[500px] md:h-[600px] w-full hidden lg:block perspective-1000">
                        <div 
                            ref={imageRef}
                            className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 transform-gpu"
                        >
                             <Image
                                src={imageSrc}
                                alt={title}
                                fill
                                className="object-cover scale-105"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            
                            {/* Glass Overlay Card */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center justify-between"
                            >
                                <div>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Provided By</p>
                                    <p className="text-white font-semibold text-lg flex items-center gap-2">
                                        Magnate Academy
                                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </p>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Gradient Overlay for Text Readability if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Decorative background element behind image */}
                        <div className="absolute -top-10 -right-10 w-full h-full border border-white/5 rounded-[2.5rem] -z-10 bg-white/[0.02]" />
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500/50"
            >
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default CourseHero;
