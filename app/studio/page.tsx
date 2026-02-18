"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "900"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

const projects = [
    {
        id: 1,
        title: "Portraiture",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200",
        size: "large"
    },
    {
        id: 2,
        title: "Urban Spaces",
        category: "Architecture",
        image: "https://images.unsplash.com/photo-1517732306149-e8f129dc6d40?auto=format&fit=crop&q=80&w=800",
        size: "small"
    },
    {
        id: 3,
        title: "Modern Life",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
        size: "small"
    },
    {
        id: 4,
        title: "Product Design",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200",
        size: "wide"
    },
    {
        id: 5,
        title: "Fine Art",
        category: "Experimental",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
        size: "medium"
    },
    {
        id: 6,
        title: "Fashion",
        category: "Editorial",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
        size: "medium"
    }
];

export default function Studio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect for images
            const images = document.querySelectorAll(".project-image");
            images.forEach((img) => {
                gsap.to(img, {
                    yPercent: -20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });

            // Title Reveal
            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.2
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-[#0c0026] text-white overflow-hidden">
            
            {/* Hero Section */}
            <section className="relative h-[80vh] flex flex-col justify-end pb-24 px-6 md:px-20">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-purple-900/40 rounded-full blur-[120px]" />
                </div>
                
                <h1 ref={titleRef} className={`${playfair.className} text-[15vw] leading-[0.85] font-black tracking-tighter mix-blend-difference z-10`}>
                    STUDIO
                </h1>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 z-10 border-t border-white/20 pt-8">
                    <p className={`${inter.className} text-xl md:text-2xl font-light text-white/80 max-w-xl`}>
                        A creative laboratory where we experiment with light, form, and narrative to craft compelling visual stories.
                    </p>
                    <div className="mt-8 md:mt-0 flex gap-4">
                        <span className="text-sm font-mono uppercase tracking-widest text-white/50">Est. 2024</span>
                        <span className="text-sm font-mono uppercase tracking-widest text-white/50">New York, NY</span>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="px-6 md:px-20 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                    {/* Masonry-style Layout */}
                    
                    {projects.map((project, index) => {
                        // Layout Logic
                        let colSpan = "lg:col-span-6";
                        let aspectRatio = "aspect-[4/3]";
                        
                        if (project.size === "large") {
                            colSpan = "lg:col-span-8";
                            aspectRatio = "aspect-[16/9]";
                        } else if (project.size === "small") {
                            colSpan = "lg:col-span-4";
                            aspectRatio = "aspect-[3/4]";
                        } else if (project.size === "wide") {
                            colSpan = "lg:col-span-12";
                            aspectRatio = "aspect-[21/9]";
                        }

                        return (
                            <motion.div
                                key={project.id}
                                className={`${colSpan} group relative`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl bg-white/5`}>
                                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="project-image object-cover scale-110 transition-transform duration-700 group-hover:scale-100"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    
                                    {/* Overlay Content */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <h3 className={`${playfair.className} text-3xl font-bold`}>{project.title}</h3>
                                        <p className="text-white/70 font-mono text-sm uppercase tracking-wider mt-2">{project.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Footer / Contact Cue */}
            <section className="py-32 flex flex-col items-center justify-center text-center bg-[#08001a]">
                <p className="text-white/50 mb-6 uppercase tracking-widest text-sm">Have a vision?</p>
                <h2 className={`${playfair.className} text-5xl md:text-8xl font-black mb-12 hover:text-purple-400 transition-colors duration-300 cursor-pointer`}>
                    Let's Create.
                </h2>
                <div className="w-full h-[1px] bg-white/10 max-w-4xl mx-auto" />
            </section>

        </main>
    );
}
