'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Users, Star, Mountain, Heart } from 'lucide-react';
import Image from 'next/image';

export const AboutPreview = ({ locale, dict }: { locale: string, dict: any }) => {
    return (
        <section className="py-16 bg-[#F9F7F2] overflow-hidden grain">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Editorial Image Composition */}
                    <div className="lg:col-span-6 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative aspect-[4/5] overflow-hidden"
                        >
                            <Image
                                src="/images/atlas-legacy.jpg"
                                alt="Atlas Mountains Legacy"
                                fill
                                className="object-cover transition-transform duration-[2s] hover:scale-110"
                                loading="lazy"
                                quality={80}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>

                        {/* Secondary Overlapping Image/Element */}
                        <div className="absolute -bottom-16 -right-16 w-3/4 hidden lg:block">
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="p-4 bg-white border-sharp shadow-2xl relative z-10"
                            >
                                <span className="block text-primary font-bold text-4xl mb-4 font-playfair leading-none">12+</span>
                                <h4 className="text-neutral-dark font-bold tracking-[0.2em] text-xs uppercase mb-2">Years of Heritage</h4>
                                <p className="text-neutral-medium font-light text-sm leading-relaxed">
                                    Our journey began in the dust of Imlil. Today, we are Morocco's leading boutique trekking specialists.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-5 lg:col-start-8 pt-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">
                                THE ATLAS LEGACY
                            </span>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-playfair mb-8 leading-[0.95] tracking-tighter">
                                More than a <br />
                                <span className="italic">Journey.</span>
                            </h2>

                            <p className="text-neutral-medium text-xl font-light leading-relaxed mb-12">
                                Born and raised in the High Atlas mountains, our team brings a life's worth of local knowledge to every trek. We don't just show you the path; we share our culture, our home, and our heart.
                            </p>

                            <div className="space-y-12 mb-16">
                                <div className="flex gap-8 group">
                                    <div className="text-primary font-bold text-sm tracking-widest pt-1">01</div>
                                    <div>
                                        <h4 className="font-bold text-neutral-dark mb-2 tracking-widest uppercase text-xs">Berber Roots</h4>
                                        <p className="text-neutral-medium/80 font-light text-sm">Every guide is a native of the peaks you conquer.</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 group">
                                    <div className="text-primary font-bold text-sm tracking-widest pt-1">02</div>
                                    <div>
                                        <h4 className="font-bold text-neutral-dark mb-2 tracking-widest uppercase text-xs">Boutique Service</h4>
                                        <p className="text-neutral-medium/80 font-light text-sm">We believe in small groups and big experiences.</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href={`/${locale}/about`}
                                className="inline-flex items-center gap-6 group"
                            >
                                <div className="w-16 h-16 rounded-full border border-neutral-dark/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                    <ArrowRight className="w-6 h-6 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                </div>
                                <span className="font-bold uppercase tracking-[0.2em] text-xs text-neutral-dark group-hover:text-primary transition-colors">
                                    Discover Our Story
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
