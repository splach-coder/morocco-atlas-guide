'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '@/data/siteData';
import { ArrowRight, MapPin, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function ToursPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params);
    const searchParams = useSearchParams();
    const categoryFilter = searchParams.get('category');

    const allTours = React.useMemo(() => {
        const categories = {
            'toubkal-treks': siteData.toubkalTreks,
            'desert-tours': siteData.desertTours,
            'imperial-cities': siteData.imperialCities,
            'excursions': siteData.excursions
        };

        if (categoryFilter && categories[categoryFilter as keyof typeof categories]) {
            return categories[categoryFilter as keyof typeof categories];
        }

        return [
            ...siteData.toubkalTreks,
            ...siteData.desertTours,
            ...siteData.imperialCities,
            ...siteData.excursions
        ];
    }, [categoryFilter]);

    const renderPrice = (item: any) => {
        if (item.pricing && item.pricing[0]) {
            const p = item.pricing[0] as any;
            return p.totalPrice ? `€${p.totalPrice}` : `€${p.pricePerPerson || p.price}`;
        }
        return 'Enquiry';
    };

    const getCategoryTitle = () => {
        switch (categoryFilter) {
            case 'toubkal-treks': return 'Atlas Peaks';
            case 'desert-tours': return 'Sahara Sands';
            case 'imperial-cities': return 'Ancient Medinas';
            case 'excursions': return 'Hidden Gems';
            default: return 'All Adventures';
        }
    };

    return (
        <div className="min-h-screen bg-white grain overflow-hidden">
            {/* Reduced Height Editorial Banner */}
            <section className="relative h-[50vh] md:h-[60vh] w-full flex overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/toubkal_treks/walking_toubkal_winter.jpg"
                        alt="Morocco Adventures"
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
                                EXPEDITION COLLECTION
                            </span>
                            <h1 className="text-5xl md:text-7xl font-medium text-white font-playfair mb-4 leading-none tracking-tighter">
                                {getCategoryTitle().split(' ')[0]} <span className="italic text-primary">{getCategoryTitle().split(' ')[1] || 'Tours'}</span>
                            </h1>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest font-inter max-w-sm">
                                Curated journeys through the most profound landscapes of Morocco, guided by heritage.
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

            {/* Collection Grid - Reduced Padding */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-12">

                    {/* Minimalist Catalog Filter */}
                    <div className="flex flex-col md:flex-row items-center justify-between border-b border-neutral-light pb-8 mb-16 gap-8">
                        <div className="flex flex-wrap gap-6">
                            {[
                                { id: null, label: 'All' },
                                { id: 'toubkal-treks', label: 'Atlas' },
                                { id: 'desert-tours', label: 'Sahara' },
                                { id: 'imperial-cities', label: 'Cities' },
                                { id: 'excursions', label: 'Hidden' }
                            ].map((cat) => (
                                <Link
                                    key={cat.id || 'all'}
                                    href={cat.id ? `/${locale}/tours?category=${cat.id}` : `/${locale}/tours`}
                                    className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative py-2 font-inter ${(cat.id === categoryFilter) || (!cat.id && !categoryFilter)
                                        ? 'text-primary'
                                        : 'text-neutral-400 hover:text-neutral-dark'
                                        }`}
                                >
                                    {cat.label}
                                    {((cat.id === categoryFilter) || (!cat.id && !categoryFilter)) && (
                                        <motion.span
                                            layoutId="activeFilter"
                                            className="absolute -bottom-[1px] left-0 w-full h-[1.5px] bg-primary"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                        <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest font-inter">
                            {allTours.length} results
                        </p>
                    </div>

                    {/* Catalog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {allTours.map((item: any, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (idx % 3) * 0.1 }}
                            >
                                <Link href={`/${locale}/tours/${item.id}`} className="block group">
                                    <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-neutral-100 border-sharp">
                                        <Image
                                            src={item.image || '/images/hero-marrakech.jpg'}
                                            alt={item.name}
                                            fill
                                            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                                        />

                                        {/* Minimal Hover UI */}
                                        <div className="absolute inset-x-6 bottom-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="bg-white px-4 py-2 text-neutral-dark text-[10px] font-bold tracking-[0.3em] uppercase">
                                                Discover
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-medium font-playfair tracking-tight leading-tight group-hover:text-primary transition-colors">
                                            {item.name}
                                        </h3>

                                        <p className="text-neutral-medium/60 font-light text-sm leading-relaxed line-clamp-2 font-inter">
                                            {item.description}
                                        </p>

                                        <div className="pt-4 border-t border-neutral-light flex items-center justify-between">
                                            <div className="flex gap-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest items-center font-inter">
                                                <span>{item.duration?.replace('_', ' ')}</span>
                                                <span className="w-1 h-1 bg-primary rounded-full" />
                                                <span className="text-neutral-dark font-medium">{renderPrice(item)}</span>
                                            </div>
                                            <div className="w-8 h-8 rounded-full border border-neutral-light flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                                <ArrowRight className="w-4 h-4 text-neutral-dark group-hover:text-white transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {allTours.length === 0 && (
                        <div className="text-center py-20">
                            <h2 className="text-3xl font-playfair italic text-neutral-300">No journeys discovered.</h2>
                            <Link href={`/${locale}/tours`} className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mt-6 inline-block hover:border-b border-primary pb-1 transition-all">
                                All Adventures
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
