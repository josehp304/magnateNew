'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    quote: string;
}

interface TestimonialsSectionProps {
    title?: string;
    subtitle?: string;
    testimonials: Testimonial[];
}

const TestimonialsSection = ({
    title = "Success Stories",
    subtitle = "Hear from our alumni who have transformed their careers.",
    testimonials
}: TestimonialsSectionProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
             {/* Background Decoration */}
             <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
             <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-sm font-medium mb-6">
                            WALL OF LOVE
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                            {title}
                        </h2>
                        <p className="text-lg text-neutral-400 font-light leading-relaxed">
                            {subtitle}
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button 
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out" 
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                     <div className="bg-[#111] border border-white/5 p-8 md:p-12 rounded-3xl relative">
                                        <Quote className="absolute top-8 left-8 w-12 h-12 text-indigo-500/20 fill-current" />
                                        
                                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                                            <div className="shrink-0">
                                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 relative">
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-center md:justify-start gap-1 mb-4 text-yellow-500">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 fill-current" />
                                                    ))}
                                                </div>
                                                <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                                                    "{testimonial.quote}"
                                                </blockquote>
                                                <div>
                                                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                                                    <p className="text-neutral-500">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
