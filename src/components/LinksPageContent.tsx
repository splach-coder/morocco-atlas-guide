'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Globe } from 'lucide-react';
import { siteInfo } from '@/data/siteInfo';

const TripAdvisorIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.42 0 9.818 4.398 9.818 9.818S17.42 21.818 12 21.818 2.182 17.42 2.182 12 6.58 2.182 12 2.182zM6.545 9.818a3.818 3.818 0 100 7.637 3.818 3.818 0 000-7.637zm10.91 0a3.818 3.818 0 100 7.637 3.818 3.818 0 000-7.637zm-10.91 1.273a2.545 2.545 0 110 5.09 2.545 2.545 0 010-5.09zm10.91 0a2.545 2.545 0 110 5.09 2.545 2.545 0 010-5.09zM6.545 12a1.273 1.273 0 110 2.545A1.273 1.273 0 016.545 12zm10.91 0a1.273 1.273 0 110 2.545A1.273 1.273 0 0117.455 12zM12 6.545c-1.847 0-3.527.668-4.83 1.77a5.454 5.454 0 011.921 3.957 5.452 5.452 0 01-1.09 3.272l.981.9A5.44 5.44 0 0012 17.455a5.44 5.44 0 003.018-.911l.981-.9a5.452 5.452 0 01-1.09-3.272 5.454 5.454 0 011.921-3.957A7.243 7.243 0 0012 6.545z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export const LinksPageContent = () => {
    const t = useTranslations('LinksPage');

    const whatsappNumber = siteInfo.contact.whatsapp.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    const links = [
        {
            href: siteInfo.socials.tripadvisor,
            icon: <TripAdvisorIcon />,
            label: 'TripAdvisor',
        },
        {
            href: siteInfo.socials.instagram,
            icon: <Instagram className="w-5 h-5" />,
            label: 'Instagram',
        },
        {
            href: siteInfo.linksPage.website,
            icon: <Globe className="w-5 h-5" />,
            label: t('links.websiteLabel'),
        },
        {
            href: whatsappUrl,
            icon: <WhatsAppIcon />,
            label: 'WhatsApp',
        },
    ];

    const socials = [
        { href: siteInfo.socials.tripadvisor, icon: <TripAdvisorIcon /> },
        { href: siteInfo.socials.instagram, icon: <Instagram className="w-5 h-5" /> },
        { href: siteInfo.linksPage.website, icon: <Globe className="w-5 h-5" /> },
        { href: whatsappUrl, icon: <WhatsAppIcon /> },
    ];

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">

            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg"
                    alt="Toubkal landscape"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <main className="relative z-10 w-full max-w-xs mx-auto flex flex-col items-center gap-5 px-4 py-12">

                {/* Profile photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/80 shadow-2xl"
                >
                    <Image
                        src={siteInfo.linksPage.photo}
                        alt={siteInfo.linksPage.ownerName}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Name & bio */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                    className="text-center"
                >
                    <h1 className="text-xl font-semibold text-white font-playfair tracking-tight leading-snug">
                        {siteInfo.linksPage.ownerName}
                    </h1>
                    <p className="text-white/75 text-sm font-roboto mt-1 leading-snug max-w-[220px] mx-auto">
                        {t('bio')}
                    </p>
                </motion.div>

                {/* Link buttons */}
                <motion.div
                    className="w-full flex flex-col gap-3 mt-1"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } }}
                >
                    {links.map(({ href, icon, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={{
                                hidden: { opacity: 0, y: 18 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
                            }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative flex items-center w-full rounded-xl overflow-hidden"
                            style={{ background: 'rgba(193, 148, 100, 0.55)', backdropFilter: 'blur(8px)' }}
                        >
                            {/* Icon cell */}
                            <span className="flex items-center justify-center w-12 h-12 shrink-0 text-white/90"
                                style={{ background: 'rgba(0,0,0,0.18)' }}>
                                {icon}
                            </span>
                            {/* Label — centered in the remaining width */}
                            <span className="flex-1 text-center text-sm font-semibold text-white font-outfit tracking-wide pr-12">
                                {label}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Social icons row */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
                    className="flex items-center gap-6 mt-2"
                >
                    {socials.map(({ href, icon }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors duration-200"
                        >
                            {icon}
                        </a>
                    ))}
                </motion.div>

            </main>
        </div>
    );
};
