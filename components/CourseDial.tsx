'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { useTransitionRouter } from 'next-view-transitions';

export interface CourseItem {
    title: string;
    tags: string;
    src: string;
    link?: string;
}

interface CourseDialProps {
    items: CourseItem[];
}

export default function CourseDial({ items }: CourseDialProps) {
    const [index, setIndex] = useState(0);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const scrollTracker = useRef({ current: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!triggerRef.current) return;

        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        const totalScrollDistance = items.length * 500; // Adjust for scroll length sensitivity

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: `+=${totalScrollDistance}`,
                pin: true,
                scrub: 1,
                // optimized for next.js navigation
                pinType: "transform", 
                onUpdate: (self) => {
                    // Update the active index state based on progress
                    const progress = self.progress;
                    const newIndex = Math.round(progress * (items.length - 1));
                    setIndex(newIndex);
                }
            }
        });

        tl.to(scrollTracker.current, {
            current: items.length - 1,
            ease: "none",
        });

        // Visual update loop
        const updateLoop = () => {
            itemsRef.current.forEach((el, i) => {
                if (!el) return;

                const offset = i - scrollTracker.current.current;
                const y = offset * 240;
                const x = -Math.pow(Math.abs(offset), 2) * 25;
                const scale = 1 - Math.abs(offset) * 0.15;
                const opacity = 1 - Math.abs(offset) * 0.4;

                gsap.set(el, {
                    y,
                    x,
                    scale: Math.max(0, scale),
                    opacity: Math.max(0, opacity),
                    zIndex: Math.round(100 - Math.abs(offset)),
                    transformOrigin: "left center"
                });
            });
        };

        gsap.ticker.add(updateLoop);
        
        return () => {
            gsap.ticker.remove(updateLoop);
            // Explicitly kill ScrollTrigger instances to prevent ghost elements
            ScrollTrigger.getAll().forEach(t => t.kill());
            tl.kill();
        };
    }, { scope: wrapperRef, dependencies: [items] });

    const navigate = (nextIndex: number) => {
        // Since we are driven by scroll, this is tricky. 
        // We probably just want to scroll the window to the correct position.
        // But for now, let's keep it simple and just rely on the click handling 
        // which now redirects or scrolls.

        // If we want to "scroll to" a specific item, we need to calculate the scroll position.
        // This is complex with dynamic viewport sizing. 
        // For this specific iteration, we'll assume clicks mainly navigate to links.
    };

    const router = useTransitionRouter();

    const handleClick = (i: number) => {
        if (i === index) {
            if (items[i].link) {
                router.push(items[i].link!);
            }
        }
    };

    return (
        <div ref={wrapperRef} className="course-dial-wrapper">
            <div ref={triggerRef}>
                <main
                    ref={containerRef}
                    className="relative w-full h-screen overflow-hidden bg-[#050505] text-white selection:bg-cyan-500/30"
                >
                    {/* Background Images */}
                {items.map((course, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 transition-all duration-1000 ease-out ${i === index ? "opacity-40 scale-105" : "opacity-0 scale-100"
                            }`}
                    >
                        <Image src={course.src} alt="" fill className="object-cover" priority={i === 0} />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
                    </div>
                ))}

                {/* Main Dial Logic */}
                <div className="absolute top-1/2 left-10 md:left-32 -translate-y-1/2 w-full max-w-3xl flex items-center">

                    {/* Arc Visual */}
                    <div className="absolute -left-20 h-[600px] w-48 pointer-events-none opacity-10">
                        <svg viewBox="0 0 100 600" className="h-full w-full">
                            <path d="M 0,0 Q 150,300 0,600" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                    </div>

                    <div className="relative w-full">
                        {items.map((course, i) => (
                            <div
                                key={i}
                                ref={(el) => { itemsRef.current[i] = el; }}
                                onClick={() => handleClick(i)}
                                className="absolute left-0 -translate-y-1/2 cursor-pointer group py-4"
                            >
                                <span className={`block text-[10px] uppercase tracking-[0.5em] mb-3 transition-all duration-700 ${i === index ? "text-cyan-400 opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                                    }`}>
                                    {i === index ? "Exploring Course" : ""}
                                </span>

                                <h2 className={`text-5xl md:text-8xl font-black tracking-tighter transition-all duration-500 ${i === index ? "text-white" : "text-white/10 group-hover:text-white/30"
                                    }`}>
                                    {course.title}
                                </h2>

                                <p className={`text-sm font-medium tracking-[0.2em] text-gray-400 mt-3 transition-all duration-700 delay-100 ${i === index ? "opacity-80 translate-y-0" : "opacity-0 translate-y-4"
                                    }`}>
                                    {course.tags}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fixed Bottom Right Info */}
                <div className="absolute right-12 bottom-12 text-right hidden md:block">
                    <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2">Current Focus</div>

                    {/* Sliding Text Title */}
                    <div className="h-10 overflow-hidden relative">
                        <div
                            className="flex flex-col transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                            style={{ transform: `translateY(-${index * 40}px)` }}
                        >
                            {items.map((c) => (
                                <div key={c.title} className="h-10 flex items-center justify-end">
                                    <span className="text-2xl font-bold tracking-tighter whitespace-nowrap uppercase">
                                        {c.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-9xl font-black opacity-5 tabular-nums leading-[0.8]">
                        0{index + 1}
                    </div>
                </div>

                {/* Interaction Hint */}
                <div className="absolute bottom-10 left-10 flex items-center gap-4 opacity-30">
                    <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-lr]">Scroll</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
                </div>
            </main>
            </div>
        </div>
    );
}
