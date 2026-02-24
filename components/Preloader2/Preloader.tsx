'use client';

import React, { useRef } from 'react';
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Preloader.module.css';

interface PreloaderProps {
    onComplete?: () => void;
    onEnrollClick?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({
    onEnrollClick
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        
        // Refined entrance animation
        tl.fromTo(".hero-bg-img", 
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
        )
        .fromTo(".hero-title .line-inner",
            { y: "100%", rotateX: 10, opacity: 0 },
            { y: "0%", rotateX: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" },
            "-=1.5"
        )
        .fromTo(".hero-desc",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.8"
        )
        .fromTo(".hero-cta", 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.8"
        );

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-screen bg-[#020E3A]">
            {/* Background Layer */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="hero-bg-img absolute inset-0 w-full h-full">
                     <Image 
                        src="/images/studio/hero.jpeg" 
                        alt="Hero Background" 
                        fill 
                        className="object-cover opacity-50"
                        priority
                    />
                </div>
                {/* <div className="absolute inset-0 bg-gradient-to-b from-[#011C77]/80 via-[#020E3A]/70 to-[#020E3A] z-10" /> */}
            </div>

            {/* Ambient glow accents */}
            <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#01C5C1]/8 rounded-full blur-[150px] pointer-events-none z-[5]" />
            <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-[#0069F9]/6 rounded-full blur-[120px] pointer-events-none z-[5]" />

            {/* Content Layer */}
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
                <div className="max-w-[90rem] mx-auto flex flex-col items-center">
                    
                    {/* Main Title */}
                    <h1 className="hero-title flex flex-col items-center justify-center font-bold text-white tracking-tighter leading-[0.95] md:leading-[1] mb-8 md:mb-12 w-full text-center">
                        <div className="line overflow-hidden">
                            <span className="line-inner block text-[13vw] md:text-[8vw] lg:text-[7vw] font-[family-name:var(--font-inter)] tracking-tight">
                                India&apos;s Top
                            </span>
                        </div>
                        <div className="line overflow-hidden">
                            <span className="line-inner block text-[13vw] md:text-[8vw] lg:text-[7vw] font-[family-name:var(--font-inter)] text-white/90 tracking-tight">
                                Career-Focused
                            </span>
                        </div>
                        <div className="line">
                            <span className="line-inner block text-[13vw] md:text-[8vw] lg:text-[7vw] font-[family-name:var(--font-inter)] text-transparent bg-clip-text bg-gradient-to-r from-[#01C5C1] via-[#6BE9E6] to-[#4D99FB] tracking-tight">
                                Learning Platform.
                            </span>
                        </div>
                    </h1>

                    {/* Supporting Text */}
                    <div className="hero-desc flex flex-col items-center justify-center gap-4 mb-10 md:mb-12 max-w-2xl mx-auto">
                         <p className="text-base md:text-xl text-[#CDDBE8]/90 font-[family-name:var(--font-manrope)] leading-relaxed font-light tracking-wide">
                            Think Bigger. Move Smarter. Become a Magnate.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="hero-cta">
                        <button
                            onClick={onEnrollClick}
                            className="group relative inline-flex items-center justify-center px-8 py-4 md:px-6 md:py-3 overflow-hidden font-medium transition-all duration-300 bg-gradient-to-r from-[#01C5C1] to-[#0095D7] text-white rounded-full hover:from-[#03C5BD] hover:to-[#0069F9] hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(1,197,193,0.5)]"
                        >
                            <span className="relative z-10 montserrat-magnate tracking-widest uppercase text-sm md:text-base">
                                Enroll to become a magnate
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Preloader;
