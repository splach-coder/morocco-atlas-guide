'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Landmark, Compass, Map, Image as ImageIcon, Phone, Mountain } from 'lucide-react';
import { siteInfo } from '@/data/siteInfo';

export default function Header() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
            router.replace(newPath);
        });
    };

    const navLinks = [
        { href: `/${locale}`, label: 'Home', icon: Compass },
        { href: `/${locale}/tours`, label: 'Adventures', icon: Map },
        { href: `/${locale}/about`, label: 'About', icon: Landmark },
        { href: `/${locale}/gallery`, label: 'Gallery', icon: ImageIcon },
        { href: `/${locale}/contact`, label: 'Contact', icon: Phone },
    ];

    const isWhiteTextHeader = (pathname === `/${locale}` || pathname.startsWith(`/${locale}/tours/`)) && !isScrolled && !isMenuOpen;
    const headerBgClass = isScrolled ? 'bg-white border-b border-neutral-light py-4' : 'bg-transparent py-8';
    const textColorClass = isWhiteTextHeader ? 'text-white' : 'text-neutral-dark';
    const logoColorClass = isWhiteTextHeader ? 'text-white' : 'text-primary';

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-out ${headerBgClass}`}>
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

                    {/* Typographic Logo */}
                    <Link href={`/${locale}`} className="relative z-[70] flex items-center gap-4 group">
                        <Mountain className={`w-8 h-8 transition-colors duration-500 ${logoColorClass}`} />
                        <div className="flex flex-col -gap-1">
                            <span className={`text-2xl font-medium font-playfair tracking-tight transition-colors duration-500 ${textColorClass}`}>
                                Morocco <span className="italic">Atlas</span>
                            </span>
                            <span className={`text-[8px] font-bold uppercase tracking-[0.6em] transition-opacity duration-500 ${isWhiteTextHeader ? 'text-white/60' : 'text-neutral-medium'}`}>
                                Expedition Guide
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Refined */}
                    <nav className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative group py-2 ${isWhiteTextHeader ? 'text-white/80 hover:text-white' : 'text-neutral-dark hover:text-primary'}`}
                            >
                                {link.label}
                                <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-500 group-hover:w-full`} />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-8 relative z-[70]">
                        <div className="hidden md:flex items-center">
                            <select
                                defaultValue={locale}
                                onChange={handleLocaleChange}
                                disabled={isPending}
                                className={`bg-transparent border-0 text-[10px] font-bold focus:outline-none cursor-pointer tracking-widest ${textColorClass}`}
                            >
                                <option value="en" className="text-black">EN</option>
                                <option value="fr" className="text-black">FR</option>
                            </select>
                        </div>

                        <Link
                            href={`/${locale}/tours`}
                            className={`hidden md:block text-[10px] font-bold uppercase tracking-[0.3em] px-8 py-4 border transition-all duration-500 ${isWhiteTextHeader ? 'border-white/30 text-white hover:bg-white hover:text-black hover:border-white' : 'border-neutral-dark text-neutral-dark hover:bg-neutral-dark hover:text-white'}`}
                        >
                            Enquire Now
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`lg:hidden transition-colors ${textColorClass}`}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Editorial Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[50] bg-white pt-32 pb-12 px-8 flex flex-col grain"
                    >
                        <div className="flex-1 flex flex-col justify-center gap-8">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-5xl md:text-7xl font-medium font-playfair tracking-tighter text-neutral-dark hover:text-primary transition-colors block"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-12 border-t border-neutral-light flex flex-col gap-8">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-6">
                                    <button onClick={() => { router.replace(pathname.replace(`/${locale}`, '/en')); setIsMenuOpen(false); }} className={`text-[10px] font-bold tracking-widest uppercase ${locale === 'en' ? 'text-primary' : 'text-neutral-medium'}`}>English</button>
                                    <button onClick={() => { router.replace(pathname.replace(`/${locale}`, '/fr')); setIsMenuOpen(false); }} className={`text-[10px] font-bold tracking-widest uppercase ${locale === 'fr' ? 'text-primary' : 'text-neutral-medium'}`}>Français</button>
                                </div>
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
                                {siteInfo.name} &copy; {new Date().getFullYear()}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
