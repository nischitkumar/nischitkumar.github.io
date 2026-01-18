'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative border-t border-white/[0.06]"
        >
            {/* Gradient fade at top */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

            <div className="section-wrapper py-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Logo and tagline */}
                    <div className="space-y-3">
                        <motion.a
                            href="#home"
                            className="inline-block"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-2xl font-bold gradient-text">NK</span>
                        </motion.a>
                        <p className="text-small text-text-muted dark:text-text-muted max-w-xs">
                            Aspiring Machine Learning Researcher
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap gap-6">
                        {footerLinks.map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className="text-small text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-text-primary transition-colors"
                                whileHover={{ y: -2 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-text-muted dark:text-text-muted">
                        © {new Date().getFullYear()} All rights reserved
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}
