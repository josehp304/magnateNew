'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title: string;
    description: string;
    faqs: FAQItem[];
}

const FAQSection = ({ title, description, faqs }: FAQSectionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 md:py-32 bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-sm font-medium mb-6">
                        GOT QUESTIONS?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-neutral-400 font-light">
                        {description}
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`rounded-xl border transition-all duration-300 ${isOpen
                                    ? 'bg-[#111] border-purple-500/20 shadow-lg shadow-purple-900/10'
                                    : 'bg-[#0a0a0a] border-white/5 hover:border-white/10 hover:bg-[#111]/50'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="group flex items-center justify-between w-full p-6 text-left"
                                >
                                    <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-white' : 'text-neutral-300'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <span className={`ml-4 p-2 rounded-full transition-all duration-300 shrink-0 ${isOpen
                                        ? 'bg-purple-500/20 text-purple-300 rotate-180'
                                        : 'bg-white/5 text-neutral-500 rotate-0 group-hover:bg-white/10'
                                        }`}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-neutral-400 leading-relaxed font-light border-t border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
