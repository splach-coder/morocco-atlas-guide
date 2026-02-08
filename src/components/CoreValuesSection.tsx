'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
    {
        title: "Our People",
        image: "/images/toubkal_treks/20160707_161717-1024x614.jpg",
        description: "Meet our exceptional full-time local drivers and guides. They aren't just staff; they are your well-connected friends, sharing lifelong connections and fascinating anecdotes about the region's history and culture. You'll feel like a local in no time."
    },
    {
        title: "Local Cuisine",
        image: "/images/excursions/Ville-Essaouira-Maroc.jpg", // Using a vibrant image for cuisine context if specific food image isn't available, or generic landscape that implies culture
        description: "Experience flavors that tell a story. Whether it’s a cozy family-owned restaurant or a gourmet meal under the Sahara stars, our expertly curated dining experiences offer a glimpse into the heart and soul of Moroccan tradition."
    },
    {
        title: "Custom Experience",
        image: "/images/desert_tours/desert-dunes-merzouga.webp",
        description: "Imagine immersing yourself in the daily life of a nomadic family or cruising through the Sahara on a quad bike. We build custom itineraries tailored to your unique desires, ensuring your journey is nothing short of amazing."
    },
    {
        title: "Sustainable Travel",
        image: "/images/toubkal_treks/walking_toubkal_winter.jpg",
        description: "Invest in local livelihoods by putting your money where your heart is. Our unique personal touch preserves the cultures you explore, satisfying your curiosity while leaving a positive impact on the communities we visit."
    }
];

export const CoreValuesSection = () => {
    return (
        <section className="py-24 bg-neutral-50 grain overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block font-inter">
                        THE ATLAS PROMISE
                    </span>
                    <h2 className="text-4xl md:text-5xl font-medium font-playfair text-neutral-dark leading-tight">
                        More Than a Tour, <br />
                        <span className="italic text-primary">A Connection.</span>
                    </h2>
                </div>

                {/* Alternating Feature Layout */}
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="relative aspect-[4/3] overflow-hidden shadow-2xl bg-white p-2 border border-neutral-100/50">
                                    <div className="relative w-full h-full overflow-hidden">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </div>
                                {/* Decorative Offset Box */}
                                <div className={`absolute -bottom-6 -z-10 w-full h-full border border-primary/20 ${index % 2 === 0 ? '-right-6' : '-left-6'} hidden md:block transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <div className={`max-w-md ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                                    <h3 className="text-3xl font-playfair font-medium text-neutral-dark mb-6 relative inline-block">
                                        {feature.title}
                                        <span className="absolute -bottom-2 left-0 w-1/3 h-[2px] bg-primary/40"></span>
                                    </h3>
                                    <p className="text-neutral-medium text-lg font-light leading-relaxed font-inter">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
