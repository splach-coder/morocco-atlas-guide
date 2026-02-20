import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Check, X, Star, ArrowLeft, ZoomIn, ChevronLeft, ChevronRight, MessageCircle, Calendar, Users, Info, ChevronDown, Camera } from 'lucide-react';
import { useTranslations } from 'next-intl';
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
    const t = useTranslations('ServiceDetail');
    const [activeDay, setActiveDay] = useState<number | null>(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // Booking State
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [guestCount, setGuestCount] = useState<number>(2);

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

    const dateInputRef = React.useRef<HTMLInputElement>(null);

    const whatsappUrl = `https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(
        `${siteInfo.whatsappBookingMessage} ${title}
        
👤 Guests: ${guestCount}
${selectedDate ? `📅 Date: ${new Date(selectedDate).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}` : ''}
${guestCount > 1 && typeof price === 'number' ? `💰 Total Price: €${price * guestCount}` : `💰 Price: €${price}`}
`
    )}`;

    return (
        <div className="min-h-screen bg-white grain">
            {/* Cinematic Hero Section */}
            <section className="relative h-[100dvh] md:h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:from-black/80 md:via-black/20" />
                </div>

                <div className="relative z-10 w-full h-full flex flex-col justify-end pb-8 px-4 md:pb-16 md:px-12">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link href={`/${locale}/tours`} className="inline-flex items-center gap-2 md:gap-3 text-white/80 hover:text-primary transition-all mb-6 md:mb-8 group backdrop-blur-sm bg-white/5 py-1.5 px-3 md:py-2 md:px-4 rounded-full border border-white/10 w-fit">
                                <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">{t('back')}</span>
                            </Link>

                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-white font-playfair mb-6 leading-[1.1] md:leading-[0.9] tracking-tight md:tracking-tighter max-w-5xl text-shadow-lg">
                                {title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-3 md:gap-6 text-white/90 md:text-white/80">
                                {location && (
                                    <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
                                        <MapPin className="w-3 h-3 text-primary" />
                                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] font-inter">{location}</span>
                                    </div>
                                )}
                                {duration && (
                                    <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
                                        <Clock className="w-3 h-3 text-primary" />
                                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] font-inter">{renderDuration(duration)}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
                                    <Star className="w-3 h-3 text-primary fill-primary" />
                                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] font-inter">{t('verified')}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Layout */}
            <div className="container mx-auto px-6 md:px-12 py-20">
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
                            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block font-inter">{t('experience.tag')}</span>
                            <h2 className="text-4xl font-medium text-neutral-dark font-playfair mb-8 leading-none tracking-tight">{t('experience.titlePart1')} <span className="italic text-primary">{t('experience.titlePart2')}</span></h2>
                            <p className="text-neutral-medium leading-relaxed text-lg font-light whitespace-pre-line">
                                {description}
                            </p>
                        </motion.div>

                        {/* Visual Itinerary - Static & Expressive */}
                        {itinerary && itinerary.length > 0 && (
                            <div className="pt-8 mb-20">
                                <div className="flex items-end justify-between mb-16">
                                    <div>
                                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block font-inter">{t('journey.tag')}</span>
                                        <h2 className="text-4xl md:text-5xl font-medium text-neutral-dark font-playfair tracking-tight">{t('journey.titlePart1')} <span className="italic text-primary">{t('journey.titlePart2')}</span></h2>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="inline-flex items-center gap-3 bg-neutral-50 px-5 py-2.5 rounded-full border border-neutral-100">
                                            <Clock className="w-4 h-4 text-primary" />
                                            <span className="font-playfair font-medium text-lg text-neutral-dark">{t('journey.daysAdventure', { count: itinerary.length })}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative space-y-12">
                                    {/* Vertical Guide Line */}
                                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent md:left-1/2 md:-ml-px hidden md:block"></div>
                                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent md:hidden"></div>

                                    {itinerary.map((day, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                        >
                                            {/* Content Side */}
                                            <div className="flex-1 md:w-1/2">
                                                <div className={`bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                                    <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                                        <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/10">
                                                            {t('journey.day')} {day.day}
                                                        </span>
                                                    </div>

                                                    <h3 className="text-2xl font-playfair font-medium text-neutral-dark mb-4 group-hover:text-primary transition-colors">
                                                        {day.title}
                                                    </h3>

                                                    <p className="text-neutral-medium font-light leading-relaxed text-sm md:text-base">
                                                        {day.description}
                                                    </p>

                                                    {/* Decorative Element */}
                                                    <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-neutral-50 rounded-full opacity-50 pointer-events-none group-hover:bg-primary/5 transition-colors ${idx % 2 !== 0 ? 'right-auto -left-6' : ''}`}></div>
                                                </div>
                                            </div>

                                            {/* Center Icon Node */}
                                            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white border-4 border-neutral-50 shadow-sm z-10 mt-6 md:mt-0">
                                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary"></div>
                                            </div>

                                            {/* Empty Spacer Side */}
                                            <div className="hidden md:block flex-1 md:w-1/2"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Inventory Lists */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                            <div className="bg-neutral-50 p-8 md:p-10 rounded-3xl border border-neutral-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
                                <span className="text-green-600/60 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block font-inter">{t('inclusions.tag')}</span>
                                <h3 className="font-medium text-2xl font-playfair mb-6 tracking-tight">
                                    {t('inclusions.titlePart1')} <span className="italic text-green-600">{t('inclusions.titlePart2')}</span>
                                </h3>
                                <ul className="space-y-4 relative z-10">
                                    {included.map((inc, i) => (
                                        <li key={i} className="flex items-start gap-4 text-neutral-dark/80 text-sm font-light font-inter group">
                                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span className="leading-snug">{inc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-neutral-50 p-8 md:p-10 rounded-3xl border border-neutral-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
                                <span className="text-red-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block font-inter">{t('exclusions.tag')}</span>
                                <h3 className="font-medium text-2xl font-playfair mb-6 tracking-tight text-neutral-dark/50">
                                    {t('exclusions.titlePart1')} <span className="italic">{t('exclusions.titlePart2')}</span>
                                </h3>
                                <ul className="space-y-4 relative z-10">
                                    {excluded.map((exc, i) => (
                                        <li key={i} className="flex items-start gap-4 text-neutral-dark/50 text-sm font-light font-inter">
                                            <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                                                <X className="w-3 h-3 text-red-400" />
                                            </div>
                                            <span className="leading-snug">{exc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* EXPERT TIPS SECTION */}
                        <div className="bg-neutral-900 text-white p-6 md:p-16 rounded-[1rem] relative overflow-hidden mb-20">
                            {/* Artistic Background */}
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
                                    <path d="M0 100 C 30 20 70 20 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <div className="max-w-xl mb-12">
                                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block font-inter">{t('tips.tag')}</span>
                                    <h2 className="text-4xl md:text-5xl font-medium font-playfair mb-6 text-white">{t('tips.titlePart1')} <span className="italic text-primary">{t('tips.titlePart2')}</span></h2>

                                    <p className="text-white/60 font-light text-lg">
                                        {t('tips.description')}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Tip 1 */}
                                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                                            <div className="w-6 h-6 text-primary"><Users className="w-6 h-6" /></div>
                                        </div>
                                        <h4 className="text-xl font-playfair mb-3 text-white">{t('tips.tip1.title')}</h4>

                                        <p className="text-sm text-white/50 font-light leading-relaxed">
                                            {t('tips.tip1.desc')}
                                        </p>
                                    </div>

                                    {/* Tip 2 */}
                                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                                            <div className="w-6 h-6 text-primary"><Calendar className="w-6 h-6" /></div>
                                        </div>
                                        <h4 className="text-xl font-playfair mb-3 text-white">{t('tips.tip2.title')}</h4>

                                        <p className="text-sm text-white/50 font-light leading-relaxed">
                                            {t('tips.tip2.desc')}
                                        </p>
                                    </div>

                                    {/* Tip 3 */}
                                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                                            <div className="w-6 h-6 text-primary"><MessageCircle className="w-6 h-6" /></div>
                                        </div>
                                        <h4 className="text-xl font-playfair mb-3 text-white">{t('tips.tip3.title')}</h4>

                                        <p className="text-sm text-white/50 font-light leading-relaxed">
                                            {t('tips.tip3.desc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Catalog Gallery */}
                        {gallery && gallery.length > 0 && (
                            <div className="space-y-8">
                                <div className="flex items-end justify-between px-2">
                                    <h2 className="text-3xl font-medium text-neutral-dark font-playfair tracking-tight">{t('gallery.titlePart1')} <span className="italic text-primary">{t('gallery.titlePart2')}</span></h2>
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
                                            <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest font-inter block mb-1">{t('booking.startingPrice')}</span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-medium font-playfair text-neutral-dark">€{price}</span>
                                                <span className="text-neutral-400 text-xs">{t('booking.perPerson')}</span>
                                            </div>
                                        </div>
                                        {duration && (
                                            <div className="text-right">
                                                <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest font-inter block mb-1">{t('booking.duration')}</span>
                                                <span className="text-neutral-dark font-medium">{renderDuration(duration)}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-6 mb-8">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div
                                                className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 hover:border-primary/30 transition-all relative group flex flex-col items-center justify-center cursor-pointer overflow-hidden"
                                                onClick={() => {
                                                    const input = dateInputRef.current;
                                                    if (input) {
                                                        const el = input as any;
                                                        if (typeof el.showPicker === 'function') {
                                                            el.showPicker();
                                                        } else {
                                                            el.click();
                                                        }
                                                    }
                                                }}
                                            >
                                                <input
                                                    ref={dateInputRef}
                                                    type="date"
                                                    id="tour-date-picker"
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                                                    onChange={(e) => setSelectedDate(e.target.value)}
                                                    min={new Date().toISOString().split('T')[0]}
                                                />
                                                <Calendar className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform relative z-10" />
                                                <span className="text-[10px] font-bold text-neutral-dark block uppercase tracking-wide text-center group-hover:text-primary transition-colors relative z-10">
                                                    {selectedDate ? new Date(selectedDate).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : t('booking.selectDate')}
                                                </span>
                                            </div>

                                            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 hover:border-primary/30 transition-colors flex flex-col items-center justify-center gap-2">
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                                                        className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-primary hover:border-primary transition-colors focus:outline-none"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-sm font-bold text-neutral-dark w-4 text-center">{guestCount}</span>
                                                    <button
                                                        onClick={() => setGuestCount(guestCount + 1)}
                                                        className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-primary hover:border-primary transition-colors focus:outline-none"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{t('booking.guests')}</span>
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {guestCount > 1 && typeof price === 'number' && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex justify-between items-center overflow-hidden"
                                                >
                                                    <span className="text-[10px] font-bold text-neutral-medium uppercase tracking-[0.2em]">{t('booking.totalPrice')}</span>
                                                    <span className="text-xl font-medium font-playfair text-neutral-dark">€{price * guestCount}</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 flex items-start gap-3">
                                            <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <p className="text-xs text-neutral-500 font-light leading-relaxed">
                                                {t('booking.customizable')}
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
                                        <span>{t('booking.bookWhatsApp')}</span>
                                    </a>

                                    <p className="text-center text-neutral-400 text-[10px] mt-4 font-inter">
                                        {t('booking.noCommitment')}
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
