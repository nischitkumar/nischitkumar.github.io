'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Hero() {
    return (
        <section id="home" className="section-container pt-32 md:pt-40">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-8"
            >
                <motion.div variants={item} className="space-y-4">
                    <h1 className="h-display text-charcoal dark:text-cream">Nischit Kumar</h1>
                    <p className="h-medium text-slate dark:text-gray-300 max-w-2xl">
                        Aspiring Machine Learning Researcher
                    </p>
                </motion.div>

                <motion.p variants={item} className="body-lg max-w-2xl">
                    Passionate about building scalable, intelligent systems. Currently exploring the intersection of systems design and machine learning.
                </motion.p>

                <motion.div variants={item} className="flex flex-wrap gap-4 pt-8">
                    <div className="w-full space-y-2">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0">
                            <p className="text-base font-serif text-charcoal dark:text-cream">
                                <span className="font-bold">Birla Institute Of Technology And Science, Pilani - Goa Campus</span>
                            </p>
                            <p className="text-base font-serif text-charcoal dark:text-cream italic">Aug 2023 - Jun 2028</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0">
                            <div className="space-y-1">
                                <p className="text-sm text-charcoal dark:text-gray-300">Bachelors of Engineering (Hons) in Electronics and Communication</p>
                                <p className="text-sm text-charcoal dark:text-gray-300">Masters in Economics</p>
                            </div>
                            <p className="text-sm text-charcoal dark:text-gray-300 italic">Goa, India</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={item} className="flex flex-wrap gap-4 pt-8">
                    <motion.a
                        href="#about"
                        className="premium-button bg-charcoal text-cream dark:bg-cream dark:text-charcoal flex items-center gap-2"
                        whileHover={{ backgroundColor: '#0F0F0F' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Profile <ArrowRight size={16} />
                    </motion.a>
                    <motion.a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="premium-button bg-white dark:bg-gray-800 border border-charcoal dark:border-gray-600 text-charcoal dark:text-cream flex items-center gap-2 hover:bg-charcoal dark:hover:bg-gray-700 hover:text-cream dark:hover:text-charcoal"
                        whileTap={{ scale: 0.95 }}
                    >
                        Download CV <Download size={16} />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}
