'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "Is Mount Toubkal suitable for beginners?",
        answer: "Yes! While it's the highest peak in North Africa, the standard route is non-technical during summer. However, it requires a good level of physical fitness. Our expert guides pace the trek perfectly to help everyone reach the summit safely."
    },
    {
        question: "What equipment do I need for a High Atlas trek?",
        answer: "For summer treks, you'll need sturdy hiking boots, layers of comfortable clothing, a sun hat, and a good sleeping bag. During winter, crampons and ice axes are required (which we can provide). We'll send you a detailed packing list upon booking."
    },
    {
        question: "How do we handle food and water during the tours?",
        answer: "Our team includes professional cook who prepares fresh, healthy Berber meals (tagines, couscous, fresh salads). We provide safe water during the trek, either purified or bottled, to ensure your health throughout the journey."
    },
    {
        question: "Can I customize a desert or mountain tour?",
        answer: "Absolutely! We specialize in tailor-made experiences. Whether you want to extend your stay in a desert camp or add specialized trekking routes in the Atlas, we'll design an itinerary that matches your desires perfectly."
    },
    {
        question: "How does the WhatsApp booking work?",
        answer: "It's simple and direct. Once you find a tour you like, click the 'Book via WhatsApp' button. This connects you directly with our lead guide. You can ask questions, confirm dates, and finalize your booking without any complex forms."
    }
];

export const FAQAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-12 bg-white grain overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header - Editorial Split */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8 lg:gap-12 transition-all text-center lg:text-left">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block transition-all">INFORMATION DEPOT</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-playfair tracking-tight leading-none transition-all">
                            Common <br />
                            <span className="italic text-primary">Queries.</span>
                        </h2>
                    </div>
                    <p className="text-neutral-medium text-xl font-light max-w-sm lg:border-l border-neutral-light lg:pl-8 mb-2 transition-all">
                        Technical details for the discerning traveler. Providing clarity before the first step.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-px bg-neutral-light border border-neutral-light shadow-2xl overflow-hidden transition-all">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="bg-white group transition-all duration-700">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left transition-colors duration-700 hover:bg-neutral-dark group"
                                >
                                    <span className={`text-xl md:text-2xl font-medium font-playfair transition-colors duration-700 ${openIndex === index ? 'text-primary' : 'text-neutral-dark group-hover:text-white'}`}>
                                        {item.question}
                                    </span>
                                    <div className="flex-shrink-0 ml-4 transition-all duration-700">
                                        {openIndex === index ? (
                                            <Minus className="w-6 h-6 text-primary" />
                                        ) : (
                                            <Plus className="w-6 h-6 text-neutral-200 group-hover:text-white/20" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-12 pb-6 pt-0">
                                                <div className="h-px bg-neutral-light mb-8" />
                                                <p className="text-neutral-medium text-md font-light leading-relaxed max-w-3xl">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
