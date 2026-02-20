'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mountain, Shield, Heart } from 'lucide-react';

import { useTranslations } from 'next-intl';

export const WhyTravelWithUs = () => {
    const t = useTranslations('HomePage.WhyTravel');
    const reasons = [
        {
            id: '01',
            icon: Mountain,
            title: t('reasons.01.title'),
            desc: t('reasons.01.desc')
        },
        {
            id: '02',
            icon: Shield,
            title: t('reasons.02.title'),
            desc: t('reasons.02.desc')
        },
        {
            id: '03',
            icon: Heart,
            title: t('reasons.03.title'),
            desc: t('reasons.03.desc')
        },
        {
            id: '04',
            icon: Sparkles,
            title: t('reasons.04.title'),
            desc: t('reasons.04.desc')
        }
    ];

    return (
        <section className="py-20 bg-white grain overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header - Editorial Split */}
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-12 mb-16 transition-all text-center lg:text-left">
                    <div className="max-w-2xl text-left">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block transition-all">{t('tag')}</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-playfair tracking-tight leading-none transition-all">
                            {t('titlePart1')} <br />
                            <span className="italic text-primary">{t('titlePart2')}</span>
                        </h2>
                    </div>
                    <p className="text-neutral-medium text-xl font-light max-w-sm lg:border-l border-neutral-light lg:pl-8 mb-2 transition-all text-left">
                        {t('description')}
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
                            className="bg-white p-12 group hover:bg-neutral-dark transition-colors duration-700 text-left"
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
