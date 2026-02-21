"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b",
                scrolled
                    ? "bg-[#020E3A]/80 backdrop-blur-md border-[#01C5C1]/10 shadow-[0_4px_30px_rgba(1,28,119,0.3)] py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-[#01C5C1]/15 text-[#01C5C1] p-2 rounded-lg group-hover:scale-105 transition-transform">
                        <GraduationCap size={24} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        MAGNATE
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {["Services", "Destinations", "Universities", "Testimonials"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <Button variant="premium" size="sm">
                        Book Consultation
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[#020E3A] border-b border-[#01C5C1]/10 p-4 md:hidden shadow-xl"
                    >
                        <div className="flex flex-col gap-4">
                            {["Services", "Destinations", "Universities", "Testimonials"].map(
                                (item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-base font-medium text-white/80 hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                )
                            )}
                            <Button variant="premium" className="w-full">
                                Book Consultation
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
