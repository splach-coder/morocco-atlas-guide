'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Shield, Star, Heart, ChevronDown, ArrowRight, Mountain, Users, Map, Compass, Globe, Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AnimatedCounter = ({ value, suffix = '', decimals = 0 }: { value: number, suffix?: string, decimals?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

    useEffect(() => {
        if (isInView) {
            animate(count, value, { duration: 2, ease: "easeOut" });
        }
    }, [isInView, value, count]);

    return (
        <span ref={ref} className="text-5xl md:text-7xl font-medium font-playfair text-neutral-dark inline-block tracking-tighter">
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
};

export const AboutPageContent = () => {
    const locale = useLocale();
    const t = useTranslations('AboutPage');

    return (
        <div className="min-h-screen bg-white grain overflow-hidden">
            {/* Editorial Banner */}
            <section className="relative h-[50vh] md:h-[60vh] w-full flex overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/gallery/gallery_image_19.jpeg"
                        alt="High Atlas Mountains"
                        fill
                        className="object-cover scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 w-full h-full flex flex-col justify-end pb-6 px-6 md:pb-12 md:px-12">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.5em] text-[9px] md:text-[10px] mb-4 md:mb-6 block font-inter">
                                {t('banner.tag')}
                            </span>
                            <h1 className="text-4xl md:text-7xl font-medium text-white font-playfair mb-4 leading-none tracking-tighter">
                                {t('banner.titlePart1')} <br />
                                <span className="italic text-primary">{t('banner.titlePart2')}</span>
                            </h1>
                            <p className="text-white/60 md:text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest font-inter max-w-sm">
                                {t('banner.description')}
                            </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-12 right-12 hidden md:block"
                >
                    <ChevronDown className="w-6 h-6 text-white/20" />
                </motion.div>
            </section>

            {/* Heritage Section - Lahoucine's Legacy */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-6"
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block font-inter">
                                {t('heritage.tag')}
                            </span>
                            <h2 className="text-4xl md:text-6xl font-medium text-neutral-dark font-playfair mb-8 leading-[1] tracking-tighter">
                                {t('heritage.titlePart1')} <br />
                                <span className="italic">{t('heritage.titlePart2')}</span>
                            </h2>
                            <div className="space-y-6 text-neutral-medium text-lg font-light leading-relaxed max-w-xl font-inter text-justify">
                                <p>
                                    {t('heritage.description')}
                                </p>
                            </div>

                            <div className="mt-12 pt-12 border-t border-neutral-light">
                                <blockquote className="relative">
                                    <span className="absolute -top-10 -left-6 text-primary/10 text-8xl font-serif">"</span>
                                    <h3 className="text-xl font-medium text-neutral-dark font-playfair mb-4 flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-primary" />
                                        {t('heritage.quote.title')}
                                    </h3>
                                    <p className="text-neutral-medium italic text-lg leading-relaxed font-inter">
                                        {t('heritage.quote.text')}
                                    </p>
                                </blockquote>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-6 relative pt-12 lg:pt-0"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden transition-all duration-1000 shadow-2xl">
                                <Image
                                    src="/images/atlas-legacy.jpg"
                                    alt="Lahoucine - Expert Guide"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Why Us - Alternating Structure */}
            <section className="py-24 bg-neutral-light/10 grain">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
                        <div className="order-2 md:order-1">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block font-inter">{t('mission.tag')}</span>
                            <h2 className="text-4xl md:text-6xl font-medium text-neutral-dark font-playfair tracking-tight mb-8">
                                {t('mission.titlePart1')} <span className="italic">{t('mission.titlePart2')}</span>
                            </h2>
                            <div className="space-y-6 text-neutral-medium text-lg font-light leading-relaxed font-inter">
                                <p>{t('mission.text1')}</p>
                                <p>{t('mission.text2')}</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 relative aspect-square shadow-sharp overflow-hidden">
                            <Image
                                src="/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg"
                                alt="Our Mission"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <div className="relative aspect-square shadow-sharp overflow-hidden">
                            <Image
                                src="/images/desert_tours/merzouga2.jpg"
                                alt="Trekking Adventures"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        <div>
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block font-inter">{t('whyUs.tag')}</span>
                            <h2 className="text-4xl md:text-6xl font-medium text-neutral-dark font-playfair tracking-tight mb-8">
                                {t('whyUs.titlePart1')} <span className="italic">{t('whyUs.titlePart2')}</span>
                            </h2>
                            <div className="text-neutral-medium text-lg font-light leading-relaxed font-inter">
                                <p>{t('whyUs.text')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Leaders Section */}
            <section className="py-24 bg-neutral-dark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block font-inter">{t('leaders.tag')}</span>
                        <h2 className="text-4xl md:text-7xl font-medium font-playfair mb-10 leading-none">
                            {t('leaders.titlePart1')} <span className="italic">{t('leaders.titlePart2')}</span>
                        </h2>
                        <p className="text-white/70 text-xl font-light leading-relaxed font-inter">
                            {t('leaders.text1')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 relative aspect-[1/1] md:aspect-[4/5] shadow-2xl overflow-hidden rounded-sm">
                            <Image
                                src="/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg"
                                alt="Local Leader"
                                fill
                                className="object-cover opacity-90"
                            />
                        </div>
                        <div className="lg:col-span-7 space-y-8">
                            <h3 className="text-3xl font-playfair italic text-white/90 leading-snug">
                                {t('leaders.text2')}
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cultural Insights & Travel Tips */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Cultural Diversity */}
                        <div className="p-10 border border-neutral-light hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
                            <Globe className="w-10 h-10 text-primary mb-8" />
                            <span className="text-primary font-bold uppercase tracking-[0.2em] text-[9px] mb-4 block font-inter">{t('culture.tag')}</span>
                            <h3 className="text-3xl font-medium text-neutral-dark font-playfair mb-6 leading-tight">{t('culture.titlePart1')} <br />{t('culture.titlePart2')}</h3>
                            <div className="space-y-4 text-neutral-medium text-sm font-light font-inter leading-relaxed">
                                <p>{t('culture.text1')}</p>
                                <p>{t('culture.text2')}</p>
                                <p>{t('culture.text3')}</p>
                            </div>
                        </div>

                        {/* Dress Code */}
                        <div className="p-10 border border-neutral-light hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
                            <Users className="w-10 h-10 text-primary mb-8" />
                            <span className="text-primary font-bold uppercase tracking-[0.2em] text-[9px] mb-4 block font-inter">{t('dressCode.tag')}</span>
                            <h3 className="text-3xl font-medium text-neutral-dark font-playfair mb-6 leading-tight">{t('dressCode.titlePart1')} <br />{t('dressCode.titlePart2')}</h3>
                            <div className="space-y-4 text-neutral-medium text-sm font-light font-inter leading-relaxed">
                                <p>{t('dressCode.text1')}</p>
                                <p>{t('dressCode.text2')}</p>
                            </div>
                        </div>

                        {/* Things to Know */}
                        <div className="p-10 bg-neutral-light/10 border border-neutral-light hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
                            <Info className="w-10 h-10 text-primary mb-8" />
                            <span className="text-primary font-bold uppercase tracking-[0.2em] text-[9px] mb-4 block font-inter">{t('thingsToKnow.tag')}</span>
                            <h3 className="text-3xl font-medium text-neutral-dark font-playfair mb-6 leading-tight">{t('thingsToKnow.titlePart1')} <br />{t('thingsToKnow.titlePart2')}</h3>
                            <div className="space-y-6 text-neutral-medium text-sm font-light font-inter leading-relaxed">
                                <p className="italic border-l-2 border-primary/30 pl-4">{t('thingsToKnow.intro')}</p>
                                <p>{t('thingsToKnow.intro2')}</p>
                                <p className="font-medium text-neutral-dark">{t('thingsToKnow.outro')}</p>
                                <ul className="space-y-4 pt-4 border-t border-neutral-light">
                                    {t.raw('thingsToKnow.items').map((item: string, idx: number) => (
                                        <li key={idx} className="flex gap-4 items-start">
                                            <span className="text-primary font-bold text-[10px] mt-1 shrink-0">0{idx + 1}</span>
                                            <span className="text-xs leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="pb-24 px-6 md:px-0">
                <div className="container mx-auto">
                    <div className="relative bg-neutral-dark p-16 md:p-24 overflow-hidden text-center grain">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 translate-x-1/2 pointer-events-none" />
                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white font-playfair mb-10 leading-[0.9] tracking-tighter">
                                {t('cta.titlePart1')} <br />
                                <span className="italic text-primary">{t('cta.titlePart2')}</span>
                            </h2>
                            <Link
                                href={`/${locale}/contact`}
                                className="group flex flex-col items-center gap-4"
                            >
                                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
                                </div>
                                <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] font-inter">
                                    {t('cta.enquiry')}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

