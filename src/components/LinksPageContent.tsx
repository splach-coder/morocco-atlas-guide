'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Globe, MessageCircle, MapPin, ExternalLink } from 'lucide-react';
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

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
    }),
};

interface LinkCardProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    sublabel: string;
    accentColor: string;
    index: number;
    external?: boolean;
}

const LinkCard = ({ href, icon, label, sublabel, accentColor, index, external = true }: LinkCardProps) => (
    <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        custom={index}
        variants={cardVariants}
        whileHover={{ scale: 1.025, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-4 w-full bg-white rounded-2xl px-5 py-4 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300 group"
    >
        <span
            className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white"
            style={{ backgroundColor: accentColor }}
        >
            {icon}
        </span>
        <span className="flex-1 text-left">
            <span className="block text-sm font-semibold text-neutral-dark font-outfit leading-tight">{label}</span>
            <span className="block text-xs text-neutral-medium font-roboto mt-0.5">{sublabel}</span>
        </span>
        <ExternalLink className="w-4 h-4 text-neutral-medium opacity-50 group-hover:opacity-100 transition-opacity" />
    </motion.a>
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
            sublabel: t('links.tripadvisor'),
            accentColor: '#00AA6C',
        },
        {
            href: siteInfo.socials.instagram,
            icon: <Instagram className="w-5 h-5" />,
            label: 'Instagram',
            sublabel: t('links.instagram'),
            accentColor: '#E1306C',
        },
        {
            href: siteInfo.linksPage.website,
            icon: <Globe className="w-5 h-5" />,
            label: t('links.websiteLabel'),
            sublabel: t('links.website'),
            accentColor: '#C1440E',
        },
        {
            href: whatsappUrl,
            icon: <WhatsAppIcon />,
            label: 'WhatsApp',
            sublabel: t('links.whatsapp'),
            accentColor: '#25D366',
        },
    ];

    return (
        <div className="min-h-screen bg-surface-premium grain flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 pt-28">
                <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-6">

                    {/* Profile photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-xl"
                    >
                        <Image
                            src={siteInfo.linksPage.photo}
                            alt={siteInfo.linksPage.ownerName}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Name & title */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center"
                    >
                        <h1 className="text-2xl font-medium font-playfair text-neutral-dark tracking-tight leading-none">
                            {siteInfo.linksPage.ownerName}
                        </h1>
                        <p className="text-primary text-xs font-bold uppercase tracking-[0.35em] font-inter mt-2">
                            {siteInfo.linksPage.ownerTitle}
                        </p>
                        <div className="flex items-center justify-center gap-1 mt-2 text-neutral-medium">
                            <MapPin className="w-3 h-3" />
                            <span className="text-xs font-roboto">{siteInfo.brand.founded}</span>
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center text-sm text-neutral-medium font-roboto leading-relaxed max-w-xs"
                    >
                        {t('bio')}
                    </motion.p>

                    {/* Divider */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-12 h-px bg-primary/40"
                    />

                    {/* Link cards */}
                    <motion.div
                        className="w-full flex flex-col gap-3"
                        initial="hidden"
                        animate="visible"
                    >
                        {links.map((link, i) => (
                            <LinkCard key={link.label} {...link} index={i + 4} />
                        ))}
                    </motion.div>

                    {/* Bottom brand note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="text-[10px] text-neutral-medium/60 font-roboto text-center mt-2"
                    >
                        {t('footer')}
                    </motion.p>
                </div>
            </main>
        </div>
    );
};
