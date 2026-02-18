"use client";
import { useState, useEffect } from "react";
import Menu from "./Menu/Menu";
import WhatsAppButton from "./WhatsAppButton";
import { ReactLenis } from "lenis/react";
import Loader from "@/components/Loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Prevent scrolling while loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = "";
        }
    }, [isLoading]);

    const scrollSettings = isMobile
        ? {
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical" as const,
            gestureDirection: "vertical" as const,
            smooth: true,
            smoothTouch: true,
            touchMultiplier: 0.8,
            infinite: false,
            lerp: 0.05,
            wheelMultiplier: 1,
            orientation: "vertical" as const,
            smoothWheel: true,
            syncTouch: true,
        }
        : {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical" as const,
            gestureDirection: "vertical" as const,
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 1.2,
            infinite: false,
            lerp: 0.1,
            wheelMultiplier: 1,
            orientation: "vertical" as const,
            smoothWheel: true,
            syncTouch: true,
        };

    return (
        <ReactLenis root options={scrollSettings}>
             {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
             <div className={isLoading ? "opacity-0 h-screen overflow-hidden" : ""}>
                <Menu />
                {children}
                <WhatsAppButton />
             </div>
        </ReactLenis>
    );    
}
