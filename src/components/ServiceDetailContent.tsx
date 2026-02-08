'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Check, X, Star, ArrowLeft, ZoomIn, ChevronLeft, ChevronRight, MessageCircle, Calendar, Users, Info } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { siteInfo } from '@/data/siteInfo';

interface SubItem {
    id: string;
    type: string;
    location?: string;
    price: number;
    duration?: string;
}

interface ServiceDetailProps {
    id: string;
    type: 'tour' | 'activity' | 'package' | 'transport';
    title: string;
    description: string;
    image: string;
    price: number | string;
    duration?: string;
    location?: string;
    included?: string[];
    excluded?: string[];
    itinerary?: {
        day: number;
        title: string;
        description: string;
    }[];
    minPeople?: number;
    subItems?: SubItem[];
    locale: string;
    gallery?: string[];
}

export const ServiceDetailContent = ({
    locale,
    title,
    description,
    image,
    price,
    duration,
    location,
    included = [],
    excluded = [],
    itinerary = [],
    gallery = []
}: ServiceDetailProps) => {
    const [activeDay, setActiveDay] = useState<number | null>(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const renderDuration = (d: string) => d?.replace('_', ' ') || 'Flexible';

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const nextImage = () => {
        setLightboxIndex((prev) => (prev + 1) % (gallery?.length || 1));
    };

    const prevImage = () => {
        setLightboxIndex((prev) => (prev - 1 + (gallery?.length || 1)) % (gallery?.length || 1));
    };

    const whatsappUrl = `https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(siteInfo.whatsappBookingMessage + " " + title)}`;

    return (
        <div className="min-h-screen bg-white grain">
            {/* Cinematic Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="relative z-10 w-full h-full flex flex-col justify-end pb-16 px-6 md:px-12">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link href={`/${locale}/tours`} className="inline-flex items-center gap-3 text-white/80 hover:text-primary transition-all mb-8 group backdrop-blur-sm bg-white/5 py-2 px-4 rounded-full border border-white/10 w-fit">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Adventures</span>
                            </Link>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white font-playfair mb-6 leading-[0.9] tracking-tighter max-w-5xl text-shadow-lg">
                                {title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-white/80">
                                {location && (
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                        <MapPin className="w-3 h-3 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-inter">{location}</span>
                                    </div>
                                )}
                                {duration && (
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                        <Clock className="w-3 h-3 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-inter">{renderDuration(duration)}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Star className="w-3 h-3 text-primary fill-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-inter">Verified Experience</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Layout */}
            < div className="container mx-auto px-6 md:px-12 py-20" >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">

                    {/* Main Body - Left */}
                    <div className="lg:col-span-8 space-y-24">

                        {/* Narrative Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-3xl"
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block font-inter">THE EXPERIENCE</span>
                            <h2 className="text-4xl font-medium text-neutral-dark font-playfair mb-8 leading-none tracking-tight">Unveil the <span className="italic text-primary">Extraordinary.</span></h2>
                            <p className="text-neutral-medium leading-relaxed text-lg font-light whitespace-pre-line">
                                {description}
                            </p>
                        </motion.div>

                        {/* Redesigned Itinerary - Adventure Timeline */}
                        {itinerary && itinerary.length > 0 && (
                            <div className="relative pt-8">
                                <div className="flex items-end justify-between mb-16">
                                    <div>
                                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block font-inter">YOUR JOURNEY</span>
                                        <h2 className="text-4xl font-medium text-neutral-dark font-playfair tracking-tight">Daily <span className="italic text-primary">Expedition.</span></h2>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="text-right hidden md:block">
                                            <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">Total Duration</span>
                                            <span className="font-playfair font-medium text-xl text-neutral-dark">{itinerary.length} Days</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center bg-neutral-50">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-0 relative ml-4 md:ml-12 pb-4">
                                    {/* Continuous Line */}
                                    <div className="absolute left-[11px] md:left-[15px] top-4 bottom-0 w-[2px] bg-neutral-100"></div>

                                    {itinerary.map((day, idx) => (
                                        <div key={idx} className="relative pb-20 last:pb-0 group">

                                            {/* Interactive Node */}
                                            <div
                                                className={`absolute -left-[4px] md:lat-[0] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-[3px] transition-all duration-500 z-10 flex items-center justify-center cursor-pointer shadow-sm
                                                ${activeDay === idx ? 'bg-primary border-primary scale-110 shadow-primary/30 shadow-lg' : 'bg-white border-neutral-200 group-hover:border-primary/50'}`}
                                                onClick={() => setActiveDay(activeDay === idx ? null : idx)}
                                            >
                                                <span className={`text-[10px] md:text-xs font-bold font-inter ${activeDay === idx ? 'text-white' : 'text-neutral-400'}`}>
                                                    {day.day}
                                                </span>
                                            </div>

                                            {/* Content Container */}
                                            <div className="pl-12 md:pl-20">
                                                <div
                                                    className="cursor-pointer flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4"
                                                    onClick={() => setActiveDay(activeDay === idx ? null : idx)}
                                                >
                                                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full w-fit transition-colors border
                                                        ${activeDay === idx ? 'bg-primary/5 text-primary border-primary/20' : 'bg-neutral-50 text-neutral-400 border-neutral-100 group-hover:text-primary group-hover:border-primary/30'}`}>
                                                        Day 0{day.day}
                                                    </span>
                                                    <h3 className={`text-2xl md:text-3xl font-medium font-playfair transition-colors duration-300 ${activeDay === idx ? 'text-neutral-dark' : 'text-neutral-dark/60 group-hover:text-neutral-dark'}`}>
                                                        {day.title}
                                                    </h3>
                                                </div>

                                                <AnimatePresence>
                                                    {activeDay === idx && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0, y: -10 }}
                                                            animate={{ opacity: 1, height: "auto", y: 0 }}
                                                            exit={{ opacity: 0, height: 0, y: -10 }}
                                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-2">
                                                                <div className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-100 shadow-xl shadow-neutral-100/50 relative overflow-hidden">
                                                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20"></div>
                                                                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>

                                                                    <p className="text-neutral-medium leading-relaxed font-light text-base md:text-lg relative z-10">
                                                                        {day.description}
                                                                    </p>

                                                                    {/* Quick Stats for the Day (Optional placeholder for future data) */}
                                                                    <div className="flex gap-6 mt-8 pt-6 border-t border-neutral-50">
                                                                        <div className="flex items-center gap-2 text-neutral-400 text-xs uppercase tracking-widest font-bold">
                                                                            <MapPin className="w-4 h-4 text-primary/60" />
                                                                            <span>Location</span>
                                                                        </div>
                                                                        <div className="flex items-center gap-2 text-neutral-400 text-xs uppercase tracking-widest font-bold">
                                                                            <Users className="w-4 h-4 text-primary/60" />
                                                                            <span>Activity</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Finish Node */}
                                    <div className="relative flex items-center gap-6 pt-4 group">
                                        <div className="absolute -left-[4px] md:left-[0] w-8 h-8 md:w-10 md:h-10 rounded-full border-[3px] border-neutral-200 bg-neutral-50 flex items-center justify-center z-10 group-hover:border-primary/50 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-primary transition-colors"></div>
                                        </div>
                                        <span className="pl-12 md:pl-20 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-primary transition-colors">End of Journey</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Inventory Lists */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-neutral-50 p-8 md:p-10 rounded-3xl border border-neutral-100">
                                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block font-inter">INCLUSIONS</span>
                                <h3 className="font-medium text-2xl font-playfair mb-6 tracking-tight">
                                    What's <span className="italic">Covered.</span>
                                </h3>
                                <ul className="space-y-4">
                                    {(included.length > 0 ? included : ['Airport Transfers', 'Professional Guide', 'Muleteers & Cooking', 'All Meals', 'Technical Gear']).map((inc, i) => (
                                        <li key={i} className="flex items-start gap-4 text-neutral-dark/80 text-sm font-light font-inter group">
                                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                                                <Check className="w-3 h-3 text-primary group-hover:text-white transition-colors" />
                                            </div>
                                            <span className="leading-snug">{inc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-neutral-50 p-8 md:p-10 rounded-3xl border border-neutral-100">
                                <span className="text-neutral-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block font-inter">EXCLUSIONS</span>
                                <h3 className="font-medium text-2xl font-playfair mb-6 tracking-tight text-neutral-dark/50">
                                    Not <span className="italic">Included.</span>
                                </h3>
                                <ul className="space-y-4">
                                    {(excluded.length > 0 ? excluded : ['Travel Insurance', 'Personal Gear', 'Bottled Drinks', 'Staff Gratuity', 'Flights']).map((exc, i) => (
                                        <li key={i} className="flex items-start gap-4 text-neutral-dark/50 text-sm font-light font-inter">
                                            <div className="w-5 h-5 rounded-full bg-neutral-200/50 flex items-center justify-center shrink-0 mt-0.5">
                                                <X className="w-3 h-3 text-neutral-400" />
                                            </div>
                                            <span className="leading-snug">{exc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Catalog Gallery */}
                        {gallery && gallery.length > 0 && (
                            <div className="space-y-8">
                                <div className="flex items-end justify-between px-2">
                                    <h2 className="text-3xl font-medium text-neutral-dark font-playfair tracking-tight">Visual <span className="italic text-primary">Diary.</span></h2>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {gallery.slice(0, 8).map((imgSrc, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            onClick={() => openLightbox(idx)}
                                            className={`relative overflow-hidden cursor-pointer group rounded-xl shadow-lg aspect-[4/5] ${idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : ''}`}
                                        >
                                            <Image
                                                src={imgSrc}
                                                alt={`Gallery artifact ${idx + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                <ZoomIn className="w-8 h-8 text-white drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Booking Sidebar - Right */}
                    <div className="lg:col-span-4 pb-12">
                        <div className="lg:sticky lg:top-32">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-white p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-neutral-100 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-neutral-100">
                                        <div>
                                            <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest font-inter block mb-1">Starting Price</span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-medium font-playfair text-neutral-dark">€{price}</span>
                                                <span className="text-neutral-400 text-xs">/ person</span>
                                            </div>
                                        </div>
                                        {duration && (
                                            <div className="text-right">
                                                <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest font-inter block mb-1">Duration</span>
                                                <span className="text-neutral-dark font-medium">{renderDuration(duration)}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-6 mb-8">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 text-center cursor-not-allowed opacity-75 hover:border-primary/30 transition-colors">
                                                <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                                                <span className="text-xs font-bold text-neutral-dark block uppercase tracking-wide">Select Dates</span>
                                            </div>
                                            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 text-center cursor-not-allowed opacity-75 hover:border-primary/30 transition-colors">
                                                <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                                                <span className="text-xs font-bold text-neutral-dark block uppercase tracking-wide">Guests</span>
                                            </div>
                                        </div>

                                        <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 flex items-start gap-3">
                                            <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <p className="text-xs text-neutral-500 font-light leading-relaxed">
                                                Trips are customizable. Contact us to adjust duration, route, or difficulty level.
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-neutral-dark text-white py-4 rounded-xl font-bold uppercase tracking-[0.15em] text-xs hover:bg-primary transition-colors flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Book via WhatsApp</span>
                                    </a>

                                    <p className="text-center text-neutral-400 text-[10px] mt-4 font-inter">
                                        No commitment required. Chat with an expert first.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {lightboxOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                            onClick={() => setLightboxOpen(false)}
                        >
                            <button
                                onClick={() => setLightboxOpen(false)}
                                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-[110]"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-4 text-white/50 hover:text-white transition-colors p-4 z-[110]"
                            >
                                <ChevronLeft className="w-10 h-10" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-4 text-white/50 hover:text-white transition-colors p-4 z-[110]"
                            >
                                <ChevronRight className="w-10 h-10" />
                            </button>

                            <motion.div
                                key={lightboxIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="relative w-full max-w-5xl h-[80vh]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={gallery?.[lightboxIndex] || image}
                                    alt={`Gallery artifact ${lightboxIndex + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>

                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs font-bold tracking-[0.2em] uppercase font-inter">
                                {lightboxIndex + 1} / {gallery?.length || 1}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
