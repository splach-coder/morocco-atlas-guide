'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteInfo } from '@/data/siteInfo';
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        image: '/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg',
        title: 'High Atlas',
        emphasis: 'Peaks',
        subtitle: 'Conquer the majestic Mount Toubkal with expert local guides.'
    },
    {
        id: 2,
        image: '/images/desert_tours/merzouga3.jpg',
        title: 'Sahara',
        emphasis: 'Magic',
        subtitle: 'Experience the silence of the dunes and the magic of starlit nights.'
    },
    {
        id: 3,
        image: '/images/imperial_cities/marrakech5.jpg',
        title: 'Ancient',
        emphasis: 'Medinas',
        subtitle: 'Uncover the rich history and vibrant culture of Morocco\'s imperial cities.'
    }
];

export const HeroSlider = ({ lang }: { lang: string }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[100dvh] w-full overflow-hidden bg-neutral-dark grain">
            {/* Background Image with Zoom Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`bg-${currentSlide}`}
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0"
                    style={{ willChange: 'transform, opacity' }}
                >
                    <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        fill
                        className="object-cover"
                        priority={currentSlide === 0}
                        loading={currentSlide === 0 ? "eager" : "lazy"}
                        quality={85}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content Sidebar / Layout */}
            <div className="relative z-10 h-full flex items-end pb-12 md:pb-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-3xl">
                        {/* Upper Label */}
                        <motion.div
                            key={`tag-${currentSlide}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <span className="w-6 h-[1px] bg-primary" />
                            <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">
                                {siteInfo.tagline}
                            </span>
                        </motion.div>

                        {/* Heading Section */}
                        <div className="overflow-hidden">
                            <motion.h1
                                key={`title-${currentSlide}`}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                                className="text-white leading-[0.9] flex flex-col"
                                style={{ willChange: 'transform' }}
                            >
                                <span className="text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter font-medium">
                                    {slides[currentSlide].title}
                                </span>
                                <span className="text-primary italic text-5xl md:text-6xl lg:text-7xl tracking-tighter font-light -mt-1 md:-mt-3">
                                    {slides[currentSlide].emphasis}
                                </span>
                            </motion.h1>
                        </div>

                        {/* Description & Buttons */}
                        <motion.div
                            key={`desc-${currentSlide}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="mt-6 md:ml-8 border-l border-primary/40 pl-6 max-w-sm"
                        >
                            <p className="text-white/80 text-base font-light leading-relaxed mb-6 font-inter">
                                {slides[currentSlide].subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                <Link
                                    href={`/${lang}/tours`}
                                    className="relative group overflow-hidden bg-primary px-6 py-3 text-white font-bold text-xs tracking-widest uppercase transition-all hover:bg-white hover:text-black"
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        Explore Journeys
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>

                                <a
                                    href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(siteInfo.whatsappBookingMessage)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-bold tracking-widest uppercase text-[10px] border-b border-white/20 pb-1 hover:border-primary transition-all flex items-center gap-2 group"
                                >
                                    <MessageCircle className="w-3 h-3 text-primary" />
                                    Book via WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Slider Controls - Minimal & Sophisticated */}
            <div className="absolute bottom-12 right-12 z-20 hidden md:flex items-end gap-8">
                <div className="flex flex-col gap-3 text-white/40 font-bold text-[10px] uppercase tracking-widest">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`transition-all ${currentSlide === i ? 'text-primary scale-110' : 'hover:text-white'}`}
                        >
                            0{i + 1}
                        </button>
                    ))}
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all group"
                    >
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-white/5 w-full z-20">
                <motion.div
                    key={`progress-${currentSlide}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="h-full bg-primary/80"
                />
            </div>
        </section>
    );
};
