'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mountain, Shield, Heart } from 'lucide-react';

export const WhyTravelWithUs = ({ dict }: { dict: any }) => {
    const reasons = [
        {
            id: '01',
            icon: Mountain,
            title: dict.authenticity || "Ancestral Guides",
            desc: dict.authenticityDesc || "Born and raised in the High Atlas peaks, our guides offer deep ancestral insights that no script can replicate."
        },
        {
            id: '02',
            icon: Shield,
            title: dict.expertKnowledge || "Elite Safety",
            desc: dict.expertKnowledgeDesc || "Our mountain professionals are UIAA certified, specializing in technical safety and high-altitude logistics."
        },
        {
            id: '03',
            icon: Heart,
            title: dict.personalized || "Bespoke Pace",
            desc: dict.personalizedDesc || "We calibrate every expedition to your unique threshold, curiosity, and physical vision."
        },
        {
            id: '04',
            icon: Sparkles,
            title: dict.sustainable || "Boutique Quality",
            desc: dict.sustainableDesc || "Defining luxury as authenticity. From remote mountain gites to starlit desert encampments."
        }
    ];

    return (
        <section className="py-20 bg-white grain overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header - Editorial Split */}
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-16 transition-all">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block transition-all">THE MOROCCO ADVANTAGE</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-playfair tracking-tight leading-none transition-all">
                            Why Trust the <br />
                            <span className="italic text-primary">Ancestral Guide.</span>
                        </h2>
                    </div>
                    <p className="text-neutral-medium text-xl font-light max-w-sm border-l border-neutral-light pl-8 mb-2 transition-all">
                        In an age of generic travel, we return to the roots of authentic expedition and Berber hospitality.
                    </p>
                </div>

                {/* Reasons Grid - High-End Catalog Columnar */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-light border border-neutral-light overflow-hidden shadow-2xl transition-all">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={reason.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="bg-white p-12 group hover:bg-neutral-dark transition-colors duration-700"
                        >

                            <h3 className="text-3xl font-medium text-neutral-dark mb-6 font-playfair group-hover:text-white transition-colors duration-700 leading-tight">
                                {reason.title}
                            </h3>
                            <p className="text-neutral-medium/80 font-light text-base leading-relaxed group-hover:text-white/60 transition-colors duration-700">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
