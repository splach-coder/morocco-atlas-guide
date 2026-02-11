'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { siteInfo } from '@/data/siteInfo';
import Image from 'next/image';

export default function Footer() {
    const locale = useLocale();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-dark text-white pt-16 pb-12 relative overflow-hidden grain">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-16">

                    {/* Brand Identity / Vision */}
                    <div className="lg:col-span-4">
                        <Link href={`/${locale}`} className="flex items-center gap-4 mb-12 group">
                            <div className="relative w-14 h-14 transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src="/images/logo.webp"
                                    alt="Morocco Atlas Guide"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col -gap-1">
                                <span className="text-3xl font-medium font-playfair tracking-tight">
                                    Morocco <span className="italic">Atlas</span>
                                </span>
                                <span className="text-[8px] font-bold uppercase tracking-[0.6em] text-white/30">
                                    Expedition Guide
                                </span>
                            </div>
                        </Link>
                        <p className="text-white/40 leading-relaxed font-light text-lg mb-8">
                            Curating profound desert and mountain experiences since 2012. We believe in the luxury of slow travel and the depth of Berber heritage.
                        </p>
                        <div className="flex gap-8">
                            <a href={siteInfo.socials.instagram} target="_blank" className="text-white/30 hover:text-primary transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '')}`} className="text-white/30 hover:text-[#25D366] transition-colors">
                                <MessageCircle className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Deep Navigation Columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Expeditions</h4>
                        <ul className="space-y-6">
                            <li><Link href={`/${locale}/tours?category=toubkal-treks`} className="text-white/40 hover:text-white transition-colors text-sm font-light">Atlas Peaks</Link></li>
                            <li><Link href={`/${locale}/tours?category=desert-tours`} className="text-white/40 hover:text-white transition-colors text-sm font-light">Sahara Magic</Link></li>
                            <li><Link href={`/${locale}/tours?category=imperial-cities`} className="text-white/40 hover:text-white transition-colors text-sm font-light">Ancient Cities</Link></li>
                            <li><Link href={`/${locale}/tours?category=excursions`} className="text-white/40 hover:text-white transition-colors text-sm font-light">Hidden Gems</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Company</h4>
                        <ul className="space-y-6">
                            <li><Link href={`/${locale}/about`} className="text-white/40 hover:text-white transition-colors text-sm font-light">Our Heritage</Link></li>
                            <li><Link href={`/${locale}/gallery`} className="text-white/40 hover:text-white transition-colors text-sm font-light">Gallery</Link></li>
                            <li><Link href={`/${locale}/contact`} className="text-white/40 hover:text-white transition-colors text-sm font-light">Private Enquiries</Link></li>
                        </ul>
                    </div>

                    {/* Contact - Direct & Sophisticated */}
                    <div className="lg:col-span-4">
                        <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Get in Touch</h4>
                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex gap-4 items-start group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <MapPin className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div className="pt-2">
                                    <span className="text-white/60 text-sm font-light leading-relaxed block group-hover:text-white transition-colors">
                                        {siteInfo.contact.address}
                                    </span>
                                </div>
                            </div>

                            {/* Phone */}
                            <a href={`tel:${siteInfo.contact.phone.replace(/\s/g, '')}`} className="flex gap-4 items-center group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Phone className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-lg font-medium font-playfair text-white group-hover:text-primary transition-colors">
                                    {siteInfo.contact.phone}
                                </span>
                            </a>

                            {/* WhatsApp */}
                            <a href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '')}`} className="flex gap-4 items-center group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                                    <MessageCircle className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm font-light text-white/60 group-hover:text-white transition-colors">
                                    WhatsApp Available
                                </span>
                            </a>

                            {/* Email */}
                            <a href={`mailto:${siteInfo.contact.email}`} className="flex gap-4 items-center group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Mail className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">
                                    {siteInfo.contact.email}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Formal Footer Bottom */}
                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-8">
                        <div className="relative w-6 h-6 opacity-10">
                            <Image
                                src="/images/logo.webp"
                                alt="Morocco Atlas Guide"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">
                            &copy; {currentYear} {siteInfo.name} Expedition Group
                        </p>
                    </div>

                    <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/10">
                        <Link href={`/${locale}/privacy`} className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href={`/${locale}/terms`} className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Subtle Gradient Accent */}
            <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </footer>
    );
}
