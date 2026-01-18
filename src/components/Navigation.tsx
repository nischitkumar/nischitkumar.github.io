'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isDark, setIsDark] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                    if (rect.top <= 150 && rect.bottom >= 150) {
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
            html.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    };

    if (!mounted) return null;

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                        ? 'py-3'
                        : 'py-5'
                    }`}
            >
                <div className="section-wrapper">
                    <div className={`flex justify-between items-center rounded-2xl px-6 py-3 transition-all duration-500 ${isScrolled
                            ? 'glass-nav shadow-lg'
                            : 'bg-transparent'
                        }`}>
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-xl font-bold gradient-text">NK</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-full transition-all duration-300" />
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item, idx) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.4 }}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${activeSection === item.href.slice(1)
                                            ? 'text-accent-primary'
                                            : 'text-text-secondary hover:text-text-primary dark:text-text-secondary dark:hover:text-text-primary'
                                        }`}
                                >
                                    {item.label}
                                    {activeSection === item.href.slice(1) && (
                                        <motion.span
                                            layoutId="activeSection"
                                            className="absolute inset-0 bg-accent-primary/10 rounded-lg -z-10"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </motion.a>
                            ))}
                        </div>

                        {/* Right side buttons */}
                        <div className="flex items-center gap-3">
                            {/* Theme toggle */}
                            <motion.button
                                onClick={toggleTheme}
                                className="relative p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Toggle theme"
                            >
                                <AnimatePresence mode="wait">
                                    {isDark ? (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Sun size={18} className="text-yellow-400" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Moon size={18} className="text-slate-700" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            {/* CTA Button */}
                            <motion.a
                                href="#contact"
                                className="hidden sm:flex btn-primary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get in touch
                            </motion.a>

                            {/* Mobile menu button */}
                            <motion.button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08]"
                                whileTap={{ scale: 0.95 }}
                            >
                                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-x-0 top-20 z-40 md:hidden px-6"
                    >
                        <div className="glass-card p-4 space-y-2">
                            {navItems.map((item, idx) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeSection === item.href.slice(1)
                                            ? 'bg-accent-primary/10 text-accent-primary'
                                            : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.05]'
                                        }`}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block btn-primary text-center mt-4"
                            >
                                Get in touch
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
