'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Reduced timeout for better UX, adjust as needed
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-dark"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: [0, 1, 1, 0.8],
                            scale: [0.8, 1, 1.05, 1],
                        }}
                        transition={{
                            duration: 2,
                            times: [0, 0.4, 0.7, 1],
                            ease: "easeInOut"
                        }}
                        className="relative"
                    >
                        <Image
                            src="/images/logo.png"
                            alt="YooMarrakech"
                            width={200}
                            height={200}
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
