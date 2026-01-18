'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    },
};

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center">
            {/* Hero content */}
            <div className="section-wrapper pt-32 pb-20 md:pt-40 md:pb-32">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl"
                >
                    {/* Status badge */}
                    <motion.div variants={item} className="mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-medium">
                            <Sparkles size={14} className="animate-pulse" />
                            Open to Research Opportunities
                        </span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.div variants={item} className="space-y-4 mb-8">
                        <h1 className="text-display text-text-primary dark:text-text-primary">
                            Nischit Kumar
                        </h1>
                        <p className="text-headline text-text-secondary dark:text-text-secondary max-w-2xl">
                            Aspiring{' '}
                            <span className="gradient-text">Machine Learning</span>{' '}
                            Researcher
                        </p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={item}
                        className="text-body text-text-secondary dark:text-text-secondary max-w-2xl mb-12"
                    >
                        Passionate about building scalable and intelligent systems.
                    </motion.p>

                    {/* Education info */}
                    <motion.div
                        variants={item}
                        className="glass-card p-6 max-w-2xl mb-12"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div className="space-y-2">
                                <p className="text-subtitle text-text-primary dark:text-text-primary font-semibold">
                                    BITS Pilani - Goa Campus
                                </p>
                                <div className="space-y-1">
                                    <p className="text-small text-text-secondary dark:text-text-secondary">
                                        B.E. (Hons) Electronics and Communication
                                    </p>
                                    <p className="text-small text-text-secondary dark:text-text-secondary">
                                        M.Sc. Economics
                                    </p>
                                </div>
                            </div>
                            <div className="text-right space-y-1">
                                <span className="tag tag-accent">Aug 2023 - Jun 2028</span>
                                <p className="text-small text-text-muted dark:text-text-muted">Goa, India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div variants={item} className="flex flex-wrap gap-4">
                        <motion.a
                            href="#about"
                            className="btn-primary flex items-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Explore My Work
                            <ArrowRight size={16} />
                        </motion.a>
                        <motion.a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Download size={16} />
                            Download CV
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
                >
                    <motion.div className="w-1 h-2 bg-accent-primary rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
