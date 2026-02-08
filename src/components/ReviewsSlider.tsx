'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, MessageSquare } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

// Minimal Google Icon
const GoogleIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="currentColor" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
    </svg>
);

interface Review {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
}

interface ReviewsSliderProps {
    reviews: Review[];
}

export const ReviewsSlider: React.FC<ReviewsSliderProps> = ({ reviews }) => {
    // Calculate average rating
    const avgRating = reviews.length > 0
        ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
        : '5.0';

    return (
        <section className="py-12 bg-white grain overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Testimonial Header - High End Editorial */}
                <div className="flex flex-col lg:flex-row items-end justify-between border-b border-neutral-light pb-8 mb-16 gap-12">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">THE GUEST RECORD</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-playfair tracking-tight leading-none transition-all">
                            Voices of the <span className="italic text-primary">High Atlas.</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-12 mb-4">
                        <div className="text-right">
                            <span className="text-6xl font-medium font-playfair text-neutral-dark block leading-none">{avgRating}</span>
                            <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest mt-2 block">Global Index</span>
                        </div>
                        <div className="h-16 w-px bg-neutral-light" />
                        <div className="text-right">
                            <span className="text-5xl font-medium font-playfair text-neutral-dark block leading-none">{reviews.length}+</span>
                            <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest mt-2 block">Verified Stories</span>
                        </div>
                    </div>
                </div>

                {/* Reviews Carousel - High End Catalog Style */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={48}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full !pb-24"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={review.id} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="group flex flex-col h-full"
                            >
                                <div className="flex flex-col gap-4 flex-grow">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3 h-3 ${i < review.rating ? 'fill-primary text-primary' : 'text-neutral-200'}`}
                                            />
                                        ))}
                                    </div>

                                    <div className="relative">
                                        <p className="text-xl font-light text-neutral-medium leading-relaxed italic pr-12">
                                            "{review.comment}"
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-8 flex items-center justify-between border-t border-neutral-light group-hover:border-primary transition-colors duration-700">
                                        <div>
                                            <p className="text-sm font-bold text-neutral-dark uppercase tracking-widest mb-1">{review.author}</p>
                                            <p className="text-[10px] text-neutral-300 font-bold uppercase tracking-[0.2em]">{review.date}</p>
                                        </div>
                                        <GoogleIcon className="w-5 h-5 text-neutral-200 group-hover:text-primary transition-colors duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Authentic Submission Link */}
                <div className="flex justify-center mt-12 border-t border-neutral-light pt-12">
                    <a
                        href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-6"
                    >
                        <div className="w-16 h-16 rounded-full border border-neutral-light flex items-center justify-center group-hover:bg-neutral-dark group-hover:border-neutral-dark transition-all duration-500">
                            <MessageSquare className="w-6 h-6 text-neutral-dark group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-neutral-dark font-bold uppercase tracking-[0.2em] text-[10px]">
                            Document your Discovery
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};
