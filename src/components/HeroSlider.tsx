'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { motion } from 'framer-motion';
import { siteInfo } from '@/data/siteInfo';
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import 'swiper/css';
import 'swiper/css/effect-fade';

export const HeroSlider = ({ lang }: { lang: string }) => {
    const t = useTranslations('HomePage.HeroSlider');
    const tCommon = useTranslations('Common');
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            id: 1,
            image: '/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg',
            title: t('slide1.title'),
            emphasis: t('slide1.emphasis'),
            subtitle: t('slide1.subtitle'),
        },
        {
            id: 2,
            image: '/images/desert_tours/merzouga1.jpg',
            title: t('slide2.title'),
            emphasis: t('slide2.emphasis'),
            subtitle: t('slide2.subtitle'),
        },
        {
            id: 3,
            image: '/images/imperial_cities/marrakech9.jpg',
            title: t('slide3.title'),
            emphasis: t('slide3.emphasis'),
            subtitle: t('slide3.subtitle'),
        },
    ];

    const AUTOPLAY_DELAY = 7000;

    return (
        <section className="relative h-[100dvh] w-full overflow-hidden bg-neutral-dark grain">
            <Swiper
                modules={[Autoplay, EffectFade, Keyboard]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false, pauseOnMouseEnter: false }}
                keyboard={{ enabled: true }}
                loop={true}
                speed={1200}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                }}
                className="w-full h-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={slide.id}>
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover scale-[1.04] swiper-zoom-target transition-transform duration-[8000ms] ease-out"
                                priority={i === 0}
                                loading={i === 0 ? 'eager' : 'lazy'}
                                quality={85}
                                sizes="100vw"
                            />
                            {/* Dark overlays */}
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/10 to-transparent" />
                        </div>

                        {/* Slide Content */}
                        <div className="relative z-10 h-full flex items-end pb-12 md:pb-32">
                            <div className="container mx-auto px-6 md:px-12">
                                <div className="max-w-3xl text-left">
                                    {/* Tag */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={activeIndex === i ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                        className="flex items-center gap-3 mb-4"
                                    >
                                        <span className="w-6 h-[1px] bg-primary" />
                                        <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">
                                            {tCommon('tagline')}
                                        </span>
                                    </motion.div>

                                    {/* Heading */}
                                    <div className="overflow-hidden">
                                        <motion.h1
                                            initial={{ y: '100%' }}
                                            animate={activeIndex === i ? { y: 0 } : { y: '100%' }}
                                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                                            className="text-white leading-[0.9] flex flex-col"
                                            style={{ willChange: 'transform' }}
                                        >
                                            <span className="text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter font-medium">
                                                {slide.title}
                                            </span>
                                            <span className="text-primary italic text-5xl md:text-6xl lg:text-7xl tracking-tighter font-light -mt-1 md:-mt-3">
                                                {slide.emphasis}
                                            </span>
                                        </motion.h1>
                                    </div>

                                    {/* Subtitle & CTAs */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={activeIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.75, duration: 0.6 }}
                                        className="mt-6 md:ml-8 border-l border-primary/40 pl-6 max-w-sm"
                                    >
                                        <p className="text-white/80 text-base font-light leading-relaxed mb-6 font-inter">
                                            {slide.subtitle}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                            <Link
                                                href={`/${lang}/tours`}
                                                className="relative group overflow-hidden bg-primary px-6 py-3 text-white font-bold text-xs tracking-widest uppercase transition-all hover:bg-white hover:text-black"
                                            >
                                                <span className="relative z-10 flex items-center gap-3">
                                                    {t('explore')}
                                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </Link>
                                            <a
                                                href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(tCommon('whatsappBookingMessage'))}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white font-bold tracking-widest uppercase text-[10px] border-b border-white/20 pb-1 hover:border-primary transition-all flex items-center gap-2 group"
                                            >
                                                <MessageCircle className="w-3 h-3 text-primary" />
                                                {t('bookWhatsApp')}
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 right-6 md:right-12 z-20 hidden md:flex items-end gap-6 md:gap-8">
                {/* Slide Numbers */}
                <div className="hidden md:flex flex-col gap-3 text-white/40 font-bold text-[10px] uppercase tracking-widest">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => swiperRef.current?.slideToLoop(i)}
                            className={`transition-all duration-300 ${activeIndex === i ? 'text-primary scale-110' : 'hover:text-white'}`}
                        >
                            0{i + 1}
                        </button>
                    ))}
                </div>

                {/* Prev / Next buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous slide"
                        className="w-10 h-10 md:w-12 md:h-12 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next slide"
                        className="w-10 h-10 md:w-12 md:h-12 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all group"
                    >
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Dot indicators (mobile) - HIDDEN as per request */}
            {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => swiperRef.current?.slideToLoop(i)}
                        aria-label={`Go to slide ${i+1}`}
                        className={`transition-all duration-300 rounded-full ${activeIndex === i ? 'w-6 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'}`}
                    />
                ))}
            </div> */}


        </section>
    );
};
