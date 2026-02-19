'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronDown, Loader2 } from 'lucide-react';
import Image from 'next/image';
// Only show images from the gallery folder as requested
const manualGalleryImages = Array.from({ length: 21 }, (_, i) => ({
    id: `manual-gallery-${i + 1}`,
    src: `/images/gallery/gallery_image_${i + 1}.jpeg`,
    category: 'Highlights',
    title: `Atlas Experience ${i + 1}`,
    size: (i) % 3 === 0 ? 'large' : (i) % 3 === 1 ? 'medium' : 'small'
}));

const ALL_GALLERY_IMAGES = manualGalleryImages;

// Constants for pagination
const INITIAL_LOAD = 24;
const LOAD_MORE_COUNT = 12;

// Hook to detect screen size for responsive masonry
const useColumns = () => {
    const [columns, setColumns] = useState(1);

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth >= 1024) {
                setColumns(3); // lg
            } else if (window.innerWidth >= 768) {
                setColumns(2); // md
            } else {
                setColumns(1); // mobile
            }
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    return columns;
};

// Optimized Gallery Item Component with Framer Motion
const GalleryItem = React.memo(({
    img,
    onClick,
    index
}: {
    img: typeof ALL_GALLERY_IMAGES[0];
    onClick: () => void;
    index: number;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group cursor-pointer"
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100 mb-3">
                <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out will-change-transform"
                    style={{
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                    loading={index < 6 ? "eager" : "lazy"}
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />

                <div
                    className="absolute inset-0 bg-black/10 transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0 }}
                />

                <div
                    className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform"
                    style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'scale(1)' : 'scale(0.95)'
                    }}
                >
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                        <ZoomIn className="w-5 h-5 text-neutral-900" />
                    </div>
                </div>
            </div>

            <div className="px-1">
                <h3 className="text-md font-medium text-neutral-dark line-clamp-1 group-hover:text-primary transition-colors duration-300">
                    {img.title}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1 block font-inter">
                    {img.category}
                </span>
            </div>
        </motion.div>
    );
});

GalleryItem.displayName = 'GalleryItem';

export const GalleryPageContent = () => {
    const [selectedImage, setSelectedImage] = useState<typeof ALL_GALLERY_IMAGES[0] | null>(null);
    const columns = useColumns();
    const [hydrated, setHydrated] = useState(false);
    const [displayCount, setDisplayCount] = useState(INITIAL_LOAD);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    // Get current images to display
    const galleryImages = ALL_GALLERY_IMAGES.slice(0, displayCount);
    const hasMore = displayCount < ALL_GALLERY_IMAGES.length;

    // Memoize the column distribution
    const columnImages = React.useMemo(() => {
        const cols = Array.from({ length: columns }, () => [] as typeof galleryImages);
        galleryImages.forEach((img, i) => {
            cols[i % columns].push(img);
        });
        return cols;
    }, [columns, galleryImages]);

    const handleImageClick = useCallback((img: typeof ALL_GALLERY_IMAGES[0]) => {
        setSelectedImage(img);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedImage(null);
    }, []);

    const handleLoadMore = useCallback(() => {
        setIsLoading(true);
        // Simulate loading delay for better UX
        setTimeout(() => {
            setDisplayCount(prev => Math.min(prev + LOAD_MORE_COUNT, ALL_GALLERY_IMAGES.length));
            setIsLoading(false);
        }, 300);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Reduced Height Editorial Banner */}
            <section className="relative h-[50vh] md:h-[60vh] w-full flex overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/excursions/rigel-No_Y3bn4lNQ-unsplash.jpg"
                        alt="Morocco Gallery"
                        fill
                        className="object-cover"
                        style={{ transform: 'scale(1.05)' }}
                        priority
                        quality={85}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 w-full h-full flex flex-col justify-end pb-6 px-6 md:pb-12 md:px-12">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.5em] text-[9px] md:text-[10px] mb-4 md:mb-6 block font-inter">
                                EXPEDITION JOURNAL
                            </span>
                            <h1 className="text-4xl md:text-7xl font-medium text-white font-playfair mb-4 leading-none tracking-tighter">
                                Captured <br />
                                <span className="italic text-primary">Moments.</span>
                            </h1>
                            <p className="text-white/60 md:text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest font-inter max-w-sm">
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
                <div className="container mx-auto px-6 md:px-12 mb-16">
                    <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:items-end lg:text-left gap-8 md:gap-12">
                        <div className="max-w-2xl">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block font-inter">
                                ARCHIVE MMXXIV
                            </span>
                            <h2 className="text-4xl md:text-6xl font-medium text-neutral-dark font-playfair tracking-tight leading-none">
                                The <span className="italic">Visual Record.</span>
                            </h2>
                        </div>
                        <p className="text-neutral-medium text-[10px] font-bold uppercase tracking-[0.4em] mb-2 border-b border-primary/20 pb-1 font-inter">
                            Showing {Math.min(displayCount, ALL_GALLERY_IMAGES.length)} of {ALL_GALLERY_IMAGES.length} Artifacts
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-6 md:px-12 pb-12">
                    {!hydrated ? (
                        // Skeleton / Loading State
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="aspect-[3/4] bg-neutral-100 animate-pulse rounded-lg" />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row gap-8">
                            {columnImages.map((column, colIndex) => (
                                <div key={colIndex} className="flex-1 flex flex-col gap-8">
                                    {column.map((img, imgIndex) => (
                                        <GalleryItem
                                            key={img.id}
                                            img={img}
                                            onClick={() => handleImageClick(img)}
                                            index={colIndex * column.length + imgIndex}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Load More Button */}
                {hasMore && hydrated && (
                    <div className="container mx-auto px-6 md:px-12 pb-20 flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            disabled={isLoading}
                            className="group relative px-12 py-4 bg-neutral-dark text-white font-inter text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Loading
                                    </>
                                ) : (
                                    <>
                                        Load More
                                        <span className="text-primary group-hover:text-white transition-colors">
                                            ({ALL_GALLERY_IMAGES.length - displayCount} remaining)
                                        </span>
                                    </>
                                )}
                            </span>
                            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </button>
                    </div>
                )}
            </section>

            {/* Lightbox Modal - Minimal White */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] bg-white/95 flex items-center justify-center p-8 md:p-12 backdrop-blur-xl"
                        onClick={handleCloseModal}
                    >
                        <button
                            className="absolute top-8 right-8 text-neutral-dark hover:text-primary transition-colors p-4 z-[110]"
                            onClick={handleCloseModal}
                            aria-label="Close modal"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.98, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.98, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative max-w-7xl w-full h-full flex flex-col justify-center items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[70vh] mb-8">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                    quality={90}
                                    priority
                                    sizes="100vw"
                                />
                            </div>

                            <div className="text-center max-w-2xl px-6">
                                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block font-inter">
                                    {selectedImage.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-medium font-playfair text-neutral-dark tracking-tight">
                                    {selectedImage.title}
                                </h2>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};