'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteInfo } from '@/data/siteInfo';
import { useTranslations } from 'next-intl';

export const CTASection = ({ locale }: { locale: string }) => {
    const t = useTranslations('CTASection');
    const marqueeItems = t.raw('marquee') as string[];

    return (
        <section className="py-20 bg-surface-off overflow-hidden grain relative">
            {/* Background Texture/Accent */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 skew-x-12 translate-x-1/2" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10 text-balance"
                    >
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
                            {t('tag')}
                        </span>

                        <h2 className="text-5xl md:text-7xl font-medium text-neutral-dark font-playfair leading-[0.9] tracking-tighter mb-10">
                            {t('titlePart1')} <br />
                            <span className="italic text-primary">{t('titlePart2')}</span>
                        </h2>

                        <p className="text-neutral-medium text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12">
                            {t('description')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-12 items-center"
                    >
                        <Link
                            href={`/${locale}/tours`}
                            className="group flex flex-col items-center gap-4"
                        >
                            <div className="w-16 h-16 rounded-full border border-neutral-dark/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                <ArrowRight className="w-5 h-5 text-neutral-dark group-hover:text-white group-hover:translate-x-2 transition-transform" />
                            </div>
                            <span className="text-neutral-dark font-bold uppercase tracking-[0.2em] text-[10px]">
                                {t('browseAdventures')}
                            </span>
                        </Link>

                        <div className="w-[1px] h-8 bg-neutral-dark/10 hidden md:block" />

                        <a
                            href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(siteInfo.whatsappBookingMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-4"
                        >
                            <div className="w-16 h-16 rounded-full border border-neutral-dark/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-500">
                                <MessageCircle className="w-5 h-5 text-neutral-dark group-hover:text-white scale-110" />
                            </div>
                            <span className="text-neutral-dark font-bold uppercase tracking-[0.2em] text-[10px]">
                                {t('speakWithGuide')}
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Minimalist Marquee Style Footer */}
                <div className="mt-12 pt-12 border-t border-neutral-dark/5 flex flex-wrap justify-center gap-12 md:gap-16 opacity-90">
                    {marqueeItems.map((item: string) => (
                        <span key={item} className="text-accent font-bold text-[8px] tracking-[0.5em] whitespace-nowrap">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
