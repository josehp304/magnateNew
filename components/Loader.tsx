"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useLenis } from "lenis/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(true);
  
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) lenis.stop();
    
    // Disable native scroll as backup
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsMounted(false);
          if (lenis) lenis.start();
          document.body.style.overflow = "";
          onComplete();
        },
      });

      // Initial state setup
      gsap.set(containerRef.current, { opacity: 1 });
      gsap.set(contentRef.current, { opacity: 0, y: 30, scale: 0.95 });
      gsap.set(glowRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(textRef.current, { opacity: 0, y: 10, letterSpacing: "0.1em" });

      // Main Animation Sequence
      tl
        // 1. Enter Content
        .to(contentRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        })
        .to(glowRef.current, {
          opacity: 0.6,
          scale: 1.2,
          duration: 2,
          ease: "power2.inOut",
        }, "-=1.0")
        .to(textRef.current, {
          opacity: 0.9,
          y: 0,
          letterSpacing: "0.25em",
          duration: 1.5,
          ease: "power2.out",
        }, "-=1.2")
        
        // 2. Pause for impact
        .to({}, { duration: 0.5 }) 

        // 3. Exit Animation
        .to([contentRef.current, textRef.current], {
            opacity: 0,
            y: -20,
            duration: 0.8,
            ease: "power2.in",
        })
        .to(glowRef.current, {
            opacity: 0,
            scale: 0.5,
            duration: 0.8,
            ease: "power2.in",
        }, "<")
        .to(containerRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
        }, "-=0.2");

    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
      if (lenis) lenis.start();
    };
  }, [onComplete, lenis]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020E3A] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] animate-grain bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
          
          {/* Soft Radial Gradient Glow */}
          <div 
            ref={glowRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(1,197,193,0.12)_0%,rgba(2,14,58,0)_70%)] blur-3xl rounded-full"
          />
      </div>

      <div ref={contentRef} className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Logo */}
        <div className="relative w-28 md:w-36 aspect-square drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
          <Image
            src="/logo.svg"
            alt="Magnate Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Brand Name */}
        <h1 
            ref={textRef}
            className="text-white text-sm md:text-base font-medium font-[family-name:var(--font-manrope)] uppercase tracking-[0.25em] text-center opacity-0"
        >
            Magnate Academy
        </h1>
      </div>
    </div>
  );
}
