'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, ArrowRight, MessageCircle, ChevronDown, Globe } from 'lucide-react';
import { siteInfo } from '@/data/siteInfo';
import Image from 'next/image';

export default function ContactPage() {
    const locale = useLocale();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `*New Inquiry from Website*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '')}?text=${encodedText}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-white grain overflow-hidden">
            {/* Reduced Height Editorial Banner */}
            <section className="relative h-[50vh] md:h-[60vh] w-full flex overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/toubkal_treks/toubkal_trekking_mountains.jpg"
                        alt="Contact Morocco Atlas Guide"
                        fill
                        className="object-cover scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 w-full h-full flex flex-col justify-end pb-12 px-6 md:px-12">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block font-inter">
                                PRIVATE CONCIERGE
                            </span>
                            <h1 className="text-5xl md:text-7xl font-medium text-white font-playfair mb-4 leading-none tracking-tighter">
                                Let's <br />
                                <span className="italic text-primary">Connect.</span>
                            </h1>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest font-inter max-w-sm">
                                Reach out directly to our head guide to begin crafting your bespoke Moroccan expedition.
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

            {/* Main Content - Asymmetric Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left Side: Contact Identity */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block font-inter">
                                    CHANNELS
                                </span>
                                <h2 className="text-4xl md:text-6xl font-medium text-neutral-dark font-playfair mb-8 leading-[0.95] tracking-tighter">
                                    Directly <span className="italic">to a Guide.</span>
                                </h2>

                                <div className="space-y-px bg-neutral-light border border-neutral-light overflow-hidden shadow-xl">
                                    {/* Phone/WhatsApp */}
                                    <a
                                        href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '')}`}
                                        className="group block bg-white p-8 hover:bg-neutral-dark transition-colors duration-700"
                                    >
                                        <div className="flex flex-col gap-4">
                                            <div className="w-10 h-10 rounded-full border border-neutral-light flex items-center justify-center group-hover:border-white/20 transition-colors duration-700">
                                                <MessageCircle className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-700" />
                                            </div>
                                            <div>
                                                <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 group-hover:text-white/40 transition-colors duration-700 font-inter">Instant Messaging</span>
                                                <span className="text-2xl font-medium text-neutral-dark font-playfair group-hover:text-white transition-colors duration-700">{siteInfo.contact.phone}</span>
                                            </div>
                                        </div>
                                    </a>

                                    {/* Email */}
                                    <a
                                        href={`mailto:${siteInfo.contact.email}`}
                                        className="group block bg-white p-8 hover:bg-neutral-dark transition-colors duration-700"
                                    >
                                        <div className="flex flex-col gap-4">
                                            <div className="w-10 h-10 rounded-full border border-neutral-light flex items-center justify-center group-hover:border-white/20 transition-colors duration-700">
                                                <Mail className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-700" />
                                            </div>
                                            <div>
                                                <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 group-hover:text-white/40 transition-colors duration-700 font-inter">Email Correspondence</span>
                                                <span className="text-xl font-medium text-neutral-dark font-playfair group-hover:text-white transition-colors duration-700 lowercase">{siteInfo.contact.email}</span>
                                            </div>
                                        </div>
                                    </a>

                                    {/* Location Info */}
                                    <div className="bg-white p-8">
                                        <div className="flex flex-col gap-4">
                                            <div className="w-10 h-10 rounded-full border border-neutral-light flex items-center justify-center">
                                                <MapPin className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 font-inter">Our Base</span>
                                                <span className="text-lg font-light text-neutral-medium leading-relaxed block font-inter">{siteInfo.contact.address}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 flex items-center gap-6 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] font-inter">Follow the Trail</span>
                                    <div className="flex gap-4">
                                        <a href={siteInfo.socials.instagram} className="w-8 h-8 rounded-full border border-neutral-light flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                                            <Instagram className="w-3 h-3" />
                                        </a>
                                        <a href={siteInfo.socials.youtube} className="w-8 h-8 rounded-full border border-neutral-light flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                                            <Globe className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Inquiry Statement Form */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white border-sharp p-8 md:p-12 shadow-xl relative"
                            >
                                <div className="relative z-10">
                                    <h2 className="text-4xl font-medium text-neutral-dark font-playfair mb-4 leading-none tracking-tight">Send a <span className="italic">Proclamation.</span></h2>
                                    <p className="text-neutral-medium font-light text-lg leading-relaxed mb-12 max-w-md font-inter">Tell us about your dream journey. We usually provide a tailored response within 2 hours.</p>

                                    <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-bold text-neutral-dark uppercase tracking-[0.2em] font-inter">Your Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Sarah J."
                                                    className="w-full bg-transparent border-0 border-b border-neutral-light py-3 text-neutral-dark outline-none focus:border-primary transition-all font-light text-lg placeholder:text-neutral-200"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-bold text-neutral-dark uppercase tracking-[0.2em] font-inter">Email Address</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="sarah@example.com"
                                                    className="w-full bg-transparent border-0 border-b border-neutral-light py-3 text-neutral-dark outline-none focus:border-primary transition-all font-light text-lg placeholder:text-neutral-200"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-neutral-dark uppercase tracking-[0.2em] font-inter">The Vision</label>
                                            <textarea
                                                rows={4}
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="I would like to trek Mount Toubkal in December..."
                                                className="w-full bg-transparent border-0 border-b border-neutral-light py-3 text-neutral-dark outline-none focus:border-primary transition-all font-light text-lg placeholder:text-neutral-200 resize-none min-h-[100px]"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="group flex flex-col items-center gap-4 mt-4"
                                        >
                                            <div className="w-16 h-16 rounded-full border border-neutral-dark flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                                <ArrowRight className="w-6 h-6 text-neutral-dark group-hover:text-white transition-transform group-hover:translate-x-2" />
                                            </div>
                                            <span className="text-neutral-dark font-bold uppercase tracking-[0.2em] text-[10px] group-hover:text-primary transition-colors font-inter">
                                                Submit via WhatsApp
                                            </span>
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
