'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const CoreValuesSection = () => {
    const t = useTranslations('CoreValuesSection');

    const features = [
        {
            title: t('features.0.title'),
            image: "/images/toubkal_treks/cermanni-pianchette-top-7989881_1920.jpg",
            description: t('features.0.description')
        },
        {
            title: t('features.1.title'),
            image: "/images/food tour/annie-spratt-_V4v7BbG338-unsplash.jpg",
            description: t('features.1.description')
        },
        {
            title: t('features.2.title'),
            image: "/images/desert_tours/merzouga5.jpg",
            description: t('features.2.description')
        },
        {
            title: t('features.3.title'),
            image: "/images/toubkal_treks/youssef-gahouchi-Lznyc4uR1hs-unsplash.jpg",
            description: t('features.3.description')
        }
    ];

    return (
        <section className="py-24 bg-neutral-50 grain overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block font-inter">
                        {t('tag')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-medium font-playfair text-neutral-dark leading-tight">
                        {t('titlePart1')} <br />
                        <span className="italic text-primary">{t('titlePart2')}</span>
                    </h2>
                </div>

                {/* Alternating Feature Layout */}
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="relative aspect-[4/3] overflow-hidden shadow-2xl bg-white p-2 border border-neutral-100/50">
                                    <div className="relative w-full h-full overflow-hidden">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </div>
                                {/* Decorative Offset Box */}
                                <div className={`absolute -bottom-6 -z-10 w-full h-full border border-primary/20 ${index % 2 === 0 ? '-right-6' : '-left-6'} hidden md:block transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <div className={`max-w-md ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                                    <h3 className="text-3xl font-playfair font-medium text-neutral-dark mb-6 relative inline-block">
                                        {feature.title}
                                        <span className="absolute -bottom-2 left-0 w-1/3 h-[2px] bg-primary/40"></span>
                                    </h3>
                                    <p className="text-neutral-medium text-lg font-light leading-relaxed font-inter">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
