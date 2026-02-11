'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { siteData } from '@/data/siteData';

// Dynamically generate gallery items from categorized siteData
const allTours = [
    ...siteData.toubkalTreks,
    ...siteData.desertTours,
    ...siteData.imperialCities,
    ...siteData.excursions
];

const allTourImages = allTours.reduce((acc: any[], tour) => {
    acc.push({
        id: `${tour.id}-main`,
        src: tour.image,
        category: 'Tour',
        title: tour.name,
        size: acc.length % 3 === 0 ? 'large' : acc.length % 3 === 1 ? 'medium' : 'small'
    });

    if ((tour as any).gallery && (tour as any).gallery.length > 0) {
        (tour as any).gallery.forEach((img: string, idx: number) => {
            acc.push({
                id: `${tour.id}-gal-${idx}`,
                src: img,
                category: 'Experience',
                title: `${tour.name} View`,
                size: (acc.length + idx) % 3 === 0 ? 'medium' : (acc.length + idx) % 3 === 1 ? 'small' : 'large'
            });
        });
    }
    return acc;
}, []);

const galleryImages = allTourImages.slice(0, 24);

export const GalleryPageContent = () => {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    return (
        <div className="min-h-screen bg-white grain overflow-hidden">
            {/* Reduced Height Editorial Banner */}
            <section className="relative h-[50vh] md:h-[60vh] w-full flex overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/excursions/rigel-No_Y3bn4lNQ-unsplash.jpg"
                        alt="Morocco Gallery"
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
                                EXPEDITION JOURNAL
                            </span>
                            <h1 className="text-5xl md:text-7xl font-medium text-white font-playfair mb-4 leading-none tracking-tighter">
                                Captured <br />
                                <span className="italic text-primary">Moments.</span>
                            </h1>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest font-inter max-w-sm">
                                A visual journal of the vibrant colors, breathtaking landscapes, and authentic daily life discovered on our journeys.
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

            {/* Gallery Section - Editorial Catalog Style */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12 text-left mb-16 transition-all">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
                        <div className="max-w-2xl">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block font-inter">
                                ARCHIVE MMXXIV
                            </span>
                            <h2 className="text-4xl md:text-6xl font-medium text-neutral-dark font-playfair tracking-tight leading-none transition-all">
                                The <span className="italic">Visual Record.</span>
                            </h2>
                        </div>
                        <p className="text-neutral-medium text-[10px] font-bold uppercase tracking-[0.4em] mb-2 border-b border-primary/20 pb-1 font-inter">
                            Showing {galleryImages.length} Artifacts
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-6 md:px-12 pb-20">
                    {/* Masonry Grid - High End Catalog */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {galleryImages.map((img, index) => (
                            <motion.div
                                key={img.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index % 3 * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="break-inside-avoid"
                            >
                                <div
                                    className="relative group overflow-hidden cursor-pointer"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <div className="relative w-full overflow-hidden grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000">
                                        <Image
                                            src={img.src}
                                            alt={img.title}
                                            width={800}
                                            height={1000}
                                            className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                        />

                                        {/* Hover Hint */}
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center">
                                                <ZoomIn className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Catalog Label */}
                                    <div className="mt-4 flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-medium font-playfair tracking-tight text-neutral-dark group-hover:text-primary transition-colors">{img.title}</h3>
                                            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mt-1 font-inter">{img.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal - Minimal White */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-white/95 flex items-center justify-center p-8 md:p-12 backdrop-blur-xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-8 right-8 text-neutral-dark hover:text-primary transition-colors p-4 z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative max-w-7xl w-full h-full flex flex-col justify-center items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[70vh] mb-8">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="text-center max-w-2xl px-6">
                                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block font-inter">
                                    {selectedImage.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-medium font-playfair text-neutral-dark tracking-tight">{selectedImage.title}</h2>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
