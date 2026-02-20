'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { siteData, siteDataFr } from '@/data/siteData';

import { getSiteData } from '@/data/getSiteData';

import { useTranslations } from 'next-intl';

export const TourCategories = ({ locale }: { locale: string }) => {
    const t = useTranslations('HomePage.PopularDestinations');
    const data = getSiteData(locale);

    const categories = [
        {
            id: 'toubkal-treks',
            name: t('categories.toubkal-treks.name'),
            label: t('categories.toubkal-treks.label'),
            description: t('categories.toubkal-treks.description'),
            tours: data.toubkalTreks,
            image: data.toubkalTreks[0]?.image || '/images/toubkal_treks/placeholder.png',
        },
        {
            id: 'desert-tours',
            name: t('categories.desert-tours.name'),
            label: t('categories.desert-tours.label'),
            description: t('categories.desert-tours.description'),
            tours: data.desertTours,
            image: data.desertTours[0]?.image || '/images/desert_tours/placeholder.png',
        },
        {
            id: 'imperial-cities',
            name: t('categories.imperial-cities.name'),
            label: t('categories.imperial-cities.label'),
            description: t('categories.imperial-cities.description'),
            tours: data.imperialCities,
            image: data.imperialCities[0]?.image || '/images/imperial_cities/placeholder.png',
        },
        {
            id: 'excursions',
            name: t('categories.excursions.name'),
            label: t('categories.excursions.label'),
            description: t('categories.excursions.description'),
            tours: data.excursions,
            image: data.excursions[0]?.image || '/images/excursions/placeholder.png',
        }
    ];

    return (
        <section className="py-16 bg-white grain overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header - Editorial Style */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">
                            {t('tag')}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-playfair leading-tight tracking-tighter">
                            {t('titlePart1')} <span className="italic">{t('titlePart2')}</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-medium text-xl font-light max-w-sm border-l border-neutral-light pl-8"
                    >
                        {t('description')}
                    </motion.p>
                </div>

                {/* Categories - Editorial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-light border border-neutral-light overflow-hidden shadow-2xl">
                    {categories.map((category, index) => {
                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white overflow-hidden text-left"
                            >
                                <Link href={`/${locale}/tours?category=${category.id}`} className="block">
                                    <div className="relative aspect-[4/3] md:aspect-square overflow-hidden">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                                        {/* Corner Label */}
                                        <div className="absolute top-8 left-8">
                                            <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em] bg-black/10 backdrop-blur-md px-4 py-2 border border-white/20">
                                                {category.label}
                                            </span>
                                        </div>

                                        {/* Center Content Reveal */}
                                        <div className="absolute inset-x-8 bottom-12">
                                            <div className="overflow-hidden mb-4">
                                                <h3 className="text-white text-5xl md:text-7xl font-medium font-playfair tracking-tighter leading-none translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                                                    {category.name}
                                                </h3>
                                            </div>
                                            <p className="text-white/80 text-lg font-light max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                                {category.description}
                                            </p>
                                        </div>

                                        {/* Always Visible Hover Hint */}
                                        <div className="absolute bottom-12 right-12 text-white/40 group-hover:text-primary transition-colors">
                                            <ArrowRight className="w-12 h-12" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* High-End Featured Row */}
                <div className="mt-16 pt-16 border-t border-neutral-light text-left">
                    <div className="flex items-center justify-between mb-16">
                        <h3 className="text-4xl font-medium font-playfair tracking-tight">{t('featured')} <span className="italic">{t('experiences')}</span></h3>
                        <Link href={`/${locale}/tours`} className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-dark hover:text-primary transition-colors border-b-2 border-primary/20 pb-1">
                            {t('viewCollection')}
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            ...data.toubkalTreks.slice(0, 1),
                            ...data.desertTours.slice(0, 1),
                            ...data.imperialCities.slice(0, 1)
                        ].map((tour: any, i: number) => (
                            <motion.div
                                key={tour.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link href={`/${locale}/tours/${tour.id}`} className="block group">
                                    <div className="relative aspect-[3/4] mb-8 overflow-hidden grayscale-[50%] group-hover:grayscale-0 transition-all duration-700">
                                        <Image
                                            src={tour.image}
                                            alt={tour.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="bg-white px-4 py-2 text-neutral-dark text-[10px] font-bold tracking-widest uppercase">
                                                {t('explore')}
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-medium font-playfair mb-2 group-hover:text-primary transition-colors leading-tight">
                                        {tour.name}
                                    </h4>
                                    <div className="flex items-center gap-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                                        <span>{tour.duration.replace('_', ' ')}</span>
                                        <span className="w-1 h-1 bg-primary rounded-full" />
                                        <span className="text-neutral-dark">€{tour.pricing?.[0]?.totalPrice || tour.pricing?.[0]?.pricePerPerson || '---'}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
