"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const statementRef = useRef<HTMLParagraphElement>(null);

    // Framer Motion for background parallax
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    
    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    useGSAP(
        () => {
            if (!containerRef.current || !leftColRef.current || !rightColRef.current) return;

            // 1. Pinning the left column (Desktop only) and Fade out (Mobile)
            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: leftColRef.current,
                    pinSpacing: false,
                    scrub: true,
                    anticipatePin: 1,
                });
            });

            mm.add("(max-width: 767px)", () => {
                gsap.to(leftColRef.current, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: leftColRef.current,
                        start: "top 30%",
                        end: "bottom top",
                        scrub: true,
                    }
                });
            });
            // 2. Heading Reveal - Staggered lines
            const headingWords = headingRef.current?.querySelectorAll(".word");
            if (headingWords) {
                gsap.fromTo(
                    headingWords,
                    { y: 100, opacity: 0, rotate: 5 },
                    {
                        y: 0,
                        opacity: 1,
                        rotate: 0,
                        duration: 1.2,
                        stagger: 0.05,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: headingRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // 3. Statement Reveal
            if (statementRef.current) {
                gsap.fromTo(
                    statementRef.current,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: statementRef.current,
                            start: "top 75%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // 4. Divider Line Animation
            const divider = rightColRef.current.querySelector(".divider");
            if (divider) {
                gsap.fromTo(
                    divider,
                    { scaleX: 0, transformOrigin: "left" },
                    {
                        scaleX: 1,
                        duration: 1.5,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: rightColRef.current,
                            start: "top 70%",
                        },
                    }
                );
            }
        },
        { scope: containerRef }
    );

    const headingText = "Bridging the gap between knowledge and execution.";
    
    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[140vh] bg-[#011C77] text-white px-6 md:px-20 py-32 overflow-hidden flex items-start"
            id="about"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#01C5C1]/8 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-[#0069F9]/8 rounded-full blur-[120px] pointer-events-none" />

            {/* Background Typography */}
            <motion.div 
                style={{ y: yBackground }}
                className="absolute top-20 right-0 opacity-[0.07] text-[20vw] font-bold leading-none pointer-events-none select-none font-[family-name:var(--font-inter)] tracking-tighter"
            >
                MAGNATE
            </motion.div>

            <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 relative z-10">
                {/* Left Column - Sticky Label */}
                <div 
                    ref={leftColRef} 
                    className="md:col-span-3 h-fit md:h-screen md:sticky md:top-32 flex flex-col justify-start pt-4"
                >
                    <div className="flex items-center gap-4 ">
                        <span className="w-12 h-[1px] bg-[#01C5C1]/30 hidden md:block"></span>
                        <p className="text-2xl md:text-[28px] font-medium tracking-[0.2em] uppercase text-[#01C5C1]/60 font-[family-name:var(--font-manrope)] whitespace-nowrap">
                            Who We Are
                        </p>
                    </div>
                </div>

                {/* Right Column - Scrollable Content */}
                <div ref={rightColRef} className="md:col-span-9 flex flex-col gap-16 md:gap-24 pb-32">
                    
                    {/* Main Heading */}
                    {/* <h2 
                        ref={headingRef}
                        className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight font-[family-name:var(--font-inter)] text-white"
                    >
                        {headingText.split(" ").map((word, i) => (
                            <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
                                <span className="word inline-block origin-top-left">
                                    {word}
                                </span>
                            </span>
                        ))}
                    </h2> */}

                    {/* Divider */}
                    <div className="divider w-full h-[1px] bg-[#01C5C1]/15" />

                    {/* Editorial Statement */}
                    <div className="relative">
                        <p 
                            ref={statementRef}
                            className="text-2xl md:text-3xl lg:text-4xl text-white/90 leading-[1.4] font-light font-[family-name:var(--font-manrope)] max-w-4xl"
                        >
                            {/* <span className="block mb-8 text-[#01C5C1]/70 text-lg font-[family-name:var(--font-inter)] tracking-wide uppercase">The Problem</span> */}
                            Most people don't struggle because they lack education. <span className="text-[#6BE9E6] ">They struggle because what they
learn doesn’t translate into real work.</span> <br/><br/>
                            We exist to change that. Our programs are built around
practical skills, industry expectations, and hands-on execution. Learners don’t simply
complete a course; they move forward with clarity, confidence, and the ability to step into
meaningful professional roles.
                        </p>
                        
                        <div className="mt-16 flex items-center gap-6 group cursor-pointer w-fit opacity-70 hover:opacity-100 transition-opacity duration-300">
                             <div className="w-12 h-12 rounded-full border border-[#01C5C1]/30 flex items-center justify-center group-hover:scale-110 group-hover:border-[#01C5C1]/60 transition-all duration-300">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
                                    <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                             </div>
                             <span className="text-sm uppercase tracking-widest font-medium">Read Our Philosophy</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;