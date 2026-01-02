'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    // { label: 'Research', href: '#research' },
    // { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialDark = stored ? stored === 'dark' : prefersDark;
        setIsDark(initialDark);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            navItems.forEach(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(item.href.slice(1));
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        const html = document.documentElement;
        if (newTheme) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    if (!mounted) return null;

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-cream/95 dark:bg-charcoal/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-5xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                <motion.a
                    href="#home"
                    className="font-display text-xl font-bold text-charcoal dark:text-cream"
                    whileHover={{ scale: 1.05 }}
                >
                    NK
                </motion.a>

                <div className="hidden md:flex gap-8">
                    {navItems.map(item => (
                        <motion.a
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium transition-colors ${activeSection === item.href.slice(1)
                                ? 'text-accent'
                                : 'text-slate dark:text-gray-400 hover:text-charcoal dark:hover:text-cream'
                                }`}
                            whileHover={{ y: -2 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <motion.button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-cream hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>

                    <motion.a
                        href="#contact"
                        className="premium-button bg-charcoal text-cream dark:bg-cream dark:text-charcoal"
                        whileHover={{ backgroundColor: isDark ? '#E5E7EB' : '#0F0F0F' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get in touch
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    );
}
