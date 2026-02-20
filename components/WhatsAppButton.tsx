"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";


const WhatsAppButton = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const glow = glowRef.current;
    
    // Safety check with timeout to ensure DOM is ready and refs are populated
    // Sometimes Next.js or React concurrent mode might cause early ref nulls
    if (!button || !glow) return;

    // Remove conflicting transition classes that fight GSAP
    button.classList.remove('transition-all', 'duration-300');

    // Initial State - Ensure Y is 0
    gsap.set(button, { y: 0, scale: 1 });

    // Floating Animation (Vertical Bobbing)
    // Moves up and down smoothly to attract attention
    const floatAnim = gsap.to(button, {
      y: -6,
      duration: 2,
      ease: "power1.inOut", // Smoother sine-like wave
      yoyo: true,
      repeat: -1,
    });

    const onEnter = () => {
        floatAnim.pause();
        // Scale up on hover - Immediate and snappy
        gsap.to(button, { 
            scale: 1.1, 
            y: -3, // Hold it slightly up
            duration: 0.3, 
            ease: "back.out(1.7)" 
        });
        // Show glow
        gsap.to(glow, { opacity: 0.6, scale: 1.5, duration: 0.3 });
    };

    const onLeave = () => {
        // Return to scale 1
        gsap.to(button, { 
            scale: 1, 
            y: -6, // Animate back to where the float loop expects to be (roughly)
            duration: 0.3, 
            ease: "power2.out", 
            onComplete: () => {
                 floatAnim.resume();
            }
        });
        gsap.to(glow, { opacity: 0, scale: 1, duration: 0.3 });
    };

    button.addEventListener("mouseenter", onEnter);
    button.addEventListener("mouseleave", onLeave);

    return () => {
      button.removeEventListener("mouseenter", onEnter);
      button.removeEventListener("mouseleave", onLeave);
      floatAnim.kill();
      gsap.killTweensOf(button);
      gsap.killTweensOf(glow);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-8 right-8 z-[9999] flex items-center justify-center pointer-events-none">
       {/* Glow Effect Layer */}
       <div 
        ref={glowRef}
        className="absolute w-12 h-12 rounded-full bg-black opacity-0 blur-xl pointer-events-none"
      />

      <Link
        ref={buttonRef}
        href="https://wa.me/919207995577"
        target="_blank"
        rel="noopener noreferrer"
        className="relative pointer-events-auto flex items-center justify-center w-14 h-14 bg-black rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)] group border border-white/10"
        aria-label="Chat on WhatsApp"
        // Ensure no transform styles are applied via Tailwind that conflict
        style={{ transformOrigin: "center center" }} 
      >
        <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white fill-current"
        >
            <path d="M17.472 14.382C17.175 14.233 15.714 13.515 15.442 13.415C15.169 13.316 14.971 13.267 14.772 13.565C14.575 13.862 14.005 14.531 13.832 14.729C13.659 14.928 13.485 14.952 13.188 14.804C12.891 14.654 11.933 14.341 10.798 13.329C9.915 12.541 9.318 11.568 9.145 11.27C8.972 10.973 9.127 10.812 9.275 10.664C9.409 10.531 9.573 10.317 9.721 10.144C9.87 9.97 9.919 9.846 10.019 9.648C10.118 9.499 10.068 9.326 9.993 9.177C9.918 9.028 9.324 7.565 9.077 6.97C8.835 6.391 8.59 6.47 8.408 6.46C8.235 6.452 8.037 6.45 7.838 6.45C7.64 6.45 7.318 6.524 7.046 6.822C6.774 7.119 6.006 7.838 6.006 9.301C6.006 10.763 7.071 12.176 7.219 12.375C7.368 12.573 9.315 15.575 12.296 16.862C13.005 17.168 13.558 17.351 13.99 17.487C14.702 17.714 15.35 17.682 15.861 17.605C16.431 17.52 17.618 16.886 17.866 16.192C18.114 15.498 18.114 14.903 18.039 14.779C17.965 14.655 17.767 14.581 17.469 14.432H17.472Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.05 0C5.495 0 0.16 5.335 0.157 11.892C0.157 13.988 0.704 16.034 1.745 17.837L0.057 24L6.362 22.346C8.08056 23.2818 10.0357 23.7743 12.054 23.779H12.059C18.613 23.779 23.949 18.444 23.952 11.887C23.952 5.337 18.611 0 12.05 0ZM12.059 21.776H12.055C10.264 21.771 8.528 21.291 7.025 20.398L6.669 20.186L2.928 21.168L3.926 17.52L3.691 17.146C2.686 15.546 2.157 13.731 2.157 11.89C2.157 6.44 6.592 2.005 12.044 2.005C17.495 2.005 21.93 6.447 21.933 11.897C21.933 17.352 17.498 21.776 12.059 21.776Z" fill="white"/>
        </svg>
      </Link>
    </div>
  );
};

export default WhatsAppButton;

