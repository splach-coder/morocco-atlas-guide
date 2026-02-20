'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';

export const ExpertiseSection = () => {
    const t = useTranslations('ExpertiseSection');
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-24 bg-white grain overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* Content Side */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block font-inter">
                                {t('tag')}
                            </span>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium font-playfair text-neutral-dark mb-8 leading-[1]">
                                {t('titleHighAtlas')} <br />
                                <span className="italic text-primary">{t('heritage')}</span>
                            </h2>

                            <div className="space-y-8">
                                <p className="text-neutral-medium text-lg font-light leading-relaxed font-inter">
                                    {t('description')}
                                </p>

                                <div className="flex flex-col gap-6 pt-4">
                                    <div className="flex items-baseline gap-4 border-l border-primary/30 pl-6">
                                        <span className="text-primary font-bold text-sm tracking-widest pt-1">01</span>
                                        <div>
                                            <h4 className="font-bold text-neutral-dark mb-1 tracking-widest uppercase text-xs">{t('item1Title')}</h4>
                                            <p className="text-neutral-medium/80 font-light text-sm">{t('item1Desc')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-baseline gap-4 border-l border-primary/30 pl-6">
                                        <span className="text-primary font-bold text-sm tracking-widest pt-1">02</span>
                                        <div>
                                            <h4 className="font-bold text-neutral-dark mb-1 tracking-widest uppercase text-xs">{t('item2Title')}</h4>
                                            <p className="text-neutral-medium/80 font-light text-sm">{t('item2Desc')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-baseline gap-4 border-l border-primary/30 pl-6">
                                        <span className="text-primary font-bold text-sm tracking-widest pt-1">03</span>
                                        <div>
                                            <h4 className="font-bold text-neutral-dark mb-1 tracking-widest uppercase text-xs">{t('item3Title')}</h4>
                                            <p className="text-neutral-medium/80 font-light text-sm">{t('item3Desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                    {/* Video / Visual Side */}
                    <div className="lg:col-span-7 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-video w-full overflow-hidden shadow-2xl bg-neutral-100 group"
                        >
                            {!isPlaying ? (
                                <>
                                    <Image
                                        src="/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg"
                                        alt="Atlas Expedition Guide"
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>

                                    <button
                                        onClick={() => setIsPlaying(true)}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/40 bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:scale-110"
                                    >
                                        <Play className="w-6 h-6 text-white ml-1 fill-white" />
                                    </button>
                                </>
                            ) : (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/LXM5Zwu7utY?autoplay=1&start=2322"
                                    title="Morocco Atlas Guide Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            )}
                        </motion.div>

                        {/* Simple Quote Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-sm hidden lg:block border border-neutral-light"
                        >
                            <p className="text-2xl font-playfair italic text-neutral-dark leading-tight">
                                {t('quote')}
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
