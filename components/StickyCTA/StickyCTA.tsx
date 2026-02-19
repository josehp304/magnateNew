'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
    title: string;
    enquiryHref: string;
    price?: number | null;
    ratingCount?: number;
};

export default function StickyCTA({ title, enquiryHref, price, ratingCount }: Props) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (~600px)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/10 py-4 px-6 md:px-12 hidden md:block shadow-2xl"
                >
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex flex-col">
                            <h3 className="text-white font-semibold text-lg truncate max-w-md">
                                {title}
                            </h3>
                            {ratingCount && (
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <span className="text-yellow-400">★</span>
                                    <span>{ratingCount} Trusted Learners</span>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-6">
                            {price && (
                                <div className="text-right">
                                    <span className="block text-xs text-gray-400 uppercase tracking-wider">Course Fee</span>
                                    <span className="text-xl font-bold text-white">${price}</span>
                                </div>
                            )}
                            <Link
                                href={enquiryHref || "/enroll"}
                                className="bg-[#ffc22a] text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300 transform hover:scale-105"
                            >
                                Enquire Now
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
