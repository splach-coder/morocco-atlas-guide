'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Shield, Star, Heart, ChevronDown, ArrowRight, Mountain, Users, Map, Compass } from 'lucide-react';
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

    return (
        <div className="min-h-screen bg-white grain overflow-hidden">
            {/* Reduced Height Editorial Banner */}
            {/* Reduced Height Editorial Banner */}
            <section className="relative h-[50vh] md:h-[60vh] w-full flex overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg"
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
                                BEYOND THE PEAKS
                            </span>
                            <h1 className="text-4xl md:text-7xl font-medium text-white font-playfair mb-4 leading-none tracking-tighter">
                                Berber <br />
                                <span className="italic text-primary">Soul.</span>
                            </h1>
                            <p className="text-white/60 md:text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest font-inter max-w-sm">
                                Born from the peaks of the High Atlas, dedicated to sharing the authentic magic of Morocco.
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

            {/* Our Story Section - Asymmetric Editorial */}
            <section className="py-20">
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
                                THE ANCESTRAL PATH
                            </span>
                            <h2 className="text-4xl md:text-6xl font-medium text-neutral-dark font-playfair mb-8 leading-[1] tracking-tighter">
                                From Imlil to the <br />
                                <span className="italic">Highest Peaks</span>
                            </h2>
                            <div className="space-y-6 text-neutral-medium text-lg font-light leading-relaxed max-w-xl font-inter">
                                <p>
                                    Morocco Atlas Guide was founded by a team of local Berber guides born and raised in the heart of the High Atlas mountains. Our connection to this land isn't just professional; it's ancestral.
                                </p>
                                <p>
                                    For over a decade, we have been leading travelers through the ancient trails of Mount Toubkal and the vast silence of the Sahara. Our mission is to provide more than just a tour—we offer an immersion into the Berber way of life.
                                </p>
                            </div>

                            <div className="flex items-center gap-8 mt-12 pt-12 border-t border-neutral-light">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-neutral-100 overflow-hidden relative shadow-lg">
                                            <Image src={`/images/reviews/avatar-${i}.jpg`} alt="Guide" fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-neutral-dark font-bold text-[10px] uppercase tracking-[0.2em] leading-loose font-inter">
                                    Elite Team of <br />
                                    <span className="text-primary">Certified Local Guides</span>
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-6 relative pt-12 lg:pt-0"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden grayscale-[40%] hover:grayscale-0 transition-all duration-1000">
                                <Image
                                    src="/images/toubkal_treks/rihards-sarma-JHeCuXiERFo-unsplash.jpg"
                                    alt="Berber Hospitality"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Structured Info Card */}
                            <div className="absolute -bottom-8 -left-8 bg-white border-sharp p-8 shadow-xl hidden md:block max-w-xs">
                                <span className="text-primary font-bold text-5xl block font-playfair mb-2 leading-none">12+</span>
                                <span className="text-neutral-dark font-bold text-[10px] uppercase tracking-[0.2em] font-inter">Years of Mountain Excellence</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Grid - High End Formal */}
            <section className="py-20 border-y border-neutral-light bg-surface-off grain">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        <div className="flex flex-col items-center">
                            <AnimatedCounter value={98} suffix="%" />
                            <h3 className="text-neutral-medium font-bold uppercase tracking-[0.3em] text-[10px] mt-6 font-inter">Guest Fidelity</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <AnimatedCounter value={1200} suffix="+" />
                            <h3 className="text-neutral-medium font-bold uppercase tracking-[0.3em] text-[10px] mt-6 font-inter">Successful Summits</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <AnimatedCounter value={100} suffix="%" />
                            <h3 className="text-neutral-medium font-bold uppercase tracking-[0.3em] text-[10px] mt-6 font-inter">Local Stewardship</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values / Features - Catalog Design */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 text-left">
                        <div className="max-w-2xl">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block font-inter">THE ATLAS PILLARS</span>
                            <h2 className="text-5xl md:text-6xl font-medium text-neutral-dark font-playfair tracking-tight leading-none">
                                Our <span className="italic">Philosophy.</span>
                            </h2>
                        </div>
                        <p className="text-neutral-medium text-lg font-light max-w-sm border-l border-neutral-light pl-6 mb-2 font-inter">
                            Integrity, hospitality, and safety aren't just words; they are the terrain we navigate every day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-light border border-neutral-light overflow-hidden shadow-xl">
                        {[
                            { icon: Mountain, title: "Unrivaled Safety", text: "Elite certification by national mountain guides. Deep expertise in high-altitude logistics and terrain management." },
                            { icon: Heart, title: "Profound Hospitality", text: "Beyond the trail, we offer a seat at our table. Experience the deep rhythm of Berber life in our mountain homes." },
                            { icon: Compass, title: "Tailored Expeditions", text: "From accessible excursions to technical summits. Every path is calibrated for your unique threshold and vision." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-12 group hover:bg-neutral-dark transition-colors duration-700"
                            >
                                <div className="w-12 h-12 rounded-full border border-neutral-light flex items-center justify-center mb-8 group-hover:border-white/20 transition-colors duration-700">
                                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-700" />
                                </div>
                                <h3 className="text-2xl font-medium text-neutral-dark font-playfair mb-4 group-hover:text-white transition-colors duration-700">{item.title}</h3>
                                <p className="text-neutral-medium/80 font-light text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-700 font-inter">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA - Immersive Editorial Statement */}
            <section className="pb-20 px-6">
                <div className="container mx-auto">
                    <div className="relative bg-neutral-dark p-16 md:p-24 overflow-hidden text-center grain">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 translate-x-1/2 pointer-events-none" />
                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white font-playfair mb-10 leading-[0.9] tracking-tighter">
                                Begin Your <br />
                                <span className="italic text-primary">Legacy.</span>
                            </h2>
                            <Link
                                href={`/${locale}/contact`}
                                className="group flex flex-col items-center gap-4"
                            >
                                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
                                </div>
                                <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] font-inter">
                                    Private Enquiry
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
