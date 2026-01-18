'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const socialLinks = [
    {
        icon: Mail,
        label: 'Email',
        href: 'mailto:nischitkumar24@gmail.com',
        text: 'nischitkumar24@gmail.com',
        color: 'from-orange-500 to-red-500'
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/nischitkumar',
        text: 'Connect on LinkedIn',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/nischitkumar',
        text: 'View my repositories',
        color: 'from-gray-600 to-gray-800'
    },
];

export default function Contact() {
    return (
        <section id="contact" className="section-wrapper section-padding">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                {/* Section header */}
                <div className="text-center mb-16">
                    <motion.span
                        className="text-label text-accent-primary mb-4 block"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Contact
                    </motion.span>
                    <motion.h2
                        className="text-headline text-text-primary dark:text-text-primary mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Let's
                        <span className="gradient-text"> connect</span>
                    </motion.h2>
                    <motion.p
                        className="text-body text-text-secondary dark:text-text-secondary max-w-xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Open to collaborations, research opportunities, and interesting conversations about RL, LLMs, and beyond.
                    </motion.p>
                </div>

                {/* Social links grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {socialLinks.map((link, idx) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="glass-card p-6 group cursor-pointer relative overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} shadow-lg`}>
                                            <Icon className="text-white" size={24} />
                                        </div>
                                        <motion.div
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <ArrowUpRight size={20} className="text-text-muted dark:text-text-muted" />
                                        </motion.div>
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-subtitle text-text-primary dark:text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                                        {link.label}
                                    </h3>
                                    <p className="text-small text-text-secondary dark:text-text-secondary">
                                        {link.text}
                                    </p>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-text-muted dark:text-text-muted text-small">
                        Prefer a quick chat? Feel free to reach out and I'll respond as soon as possible.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
