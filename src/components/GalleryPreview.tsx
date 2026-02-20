'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface GalleryMoment {
    id: string;
    image: string;
    name: string;
    quote: string;
    rotation: number;
}

// Fixed tape rotations to avoid hydration mismatch
const tapeRotations = [-1, 2, -2, 1, 0, -1, 2];

interface GalleryPreviewProps {
    locale: string;
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ locale }) => {
    const t = useTranslations('GalleryPreview');

    const galleryMoments: GalleryMoment[] = [
        {
            id: '1',
            image: '/images/imperial_cities/hamza-nouasria-7zVLZu5twJs-unsplash.jpg',
            name: 'Maria Carolina',
            quote: t('moments.1'),
            rotation: -4
        },
        {
            id: '2',
            image: '/images/desert_tours/merzouga6.jpg',
            name: 'Alessia Marika',
            quote: t('moments.2'),
            rotation: 3
        },
        {
            id: '3',
            image: '/images/excursions/pete-bread-4eZeMUKdV-8-unsplash.jpg',
            name: 'Aisha Davina',
            quote: t('moments.3'),
            rotation: -2
        },
        {
            id: '4',
            image: '/images/imperial_cities/marrakech8.jpg',
            name: 'Dino Kenji',
            quote: t('moments.4'),
            rotation: 4
        },
        {
            id: '5',
            image: '/images/toubkal_treks/mads-schmidt-rasmussen-ZN5eC6__AiU-unsplash.jpg',
            name: 'Ben Philips',
            quote: t('moments.5'),
            rotation: -3
        },
        {
            id: '6',
            image: '/images/excursions/rigel-ibisQEDxODo-unsplash.jpg',
            name: 'Sophie Laurent',
            quote: t('moments.6'),
            rotation: 2
        },
        {
            id: '7',
            image: '/images/imperial_cities/mehdi-lamaaffar-PqX7EELWjh0-unsplash.jpg',
            name: 'James Wilson',
            quote: t('moments.7'),
            rotation: -5
        }
    ];

    return (
        <section className="py-20 bg-neutral-100/50 grain overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block font-inter">
                        {t('tag')}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-neutral-dark font-playfair leading-tight">
                        {t('titlePart1')}<br />
                        <span className="italic text-primary">{t('titlePart2')}</span>
                    </h2>
                </motion.div>

                {/* Polaroid Gallery - Single row, overlapping vintage style */}
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0 pb-12 pt-8">
                    {galleryMoments.map((moment, index) => (
                        <motion.div
                            key={moment.id}
                            initial={{ opacity: 0, scale: 0.8, rotate: moment.rotation }}
                            whileInView={{ opacity: 1, scale: 1, rotate: moment.rotation }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                            whileHover={{
                                scale: 1.15,
                                rotate: 0,
                                zIndex: 50,
                                transition: { duration: 0.3 }
                            }}
                            className="relative -mx-2 md:-mx-4 cursor-pointer z-0 hover:z-50"
                        >
                            {/* Polaroid Card - Old Camera Style */}
                            <div className="bg-[#f8f6f1] p-3 pb-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[160px] md:w-[200px]"
                                style={{
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05)',
                                }}
                            >
                                {/* Tape effect */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-red-100/40 opacity-80 backdrop-blur-[1px] shadow-sm transform rotate-[-2deg] z-10 border border-white/20"
                                    style={{
                                        transform: `translateX(-50%) rotate(${tapeRotations[index]}deg)`,
                                    }}
                                />

                                {/* Image with vintage filter */}
                                <div className="relative aspect-[4/5] overflow-hidden mb-3 bg-neutral-200">
                                    <Image
                                        src={moment.image}
                                        alt={moment.name}
                                        fill
                                        className="object-cover"
                                        style={{
                                            filter: 'sepia(15%) contrast(1.1) saturate(0.9)',
                                        }}
                                    />
                                    {/* Vintage overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/5 via-transparent to-black/20 pointer-events-none" />
                                    {/* Light leak effect */}
                                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent opacity-30 pointer-events-none" />
                                </div>

                                {/* Handwritten-style text */}
                                <div className="text-center px-1">
                                    <p className="text-neutral-dark/70 text-[10px] md:text-xs font-bold uppercase tracking-widest font-inter opacity-70">
                                        {moment.name}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <Link
                        href={`/${locale}/gallery`}
                        className="inline-flex items-center gap-3 bg-neutral-dark text-white px-8 py-3 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-primary transition-colors shadow-xl"
                    >
                        {t('cta')}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
