'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:nischitkumar24@gmail.com', text: 'nischitkumar24@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/nischitkumar', text: 'LinkedIn' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/nischitkumar', text: 'GitHub' },
    // { icon: ExternalLink, label: 'Google Scholar', href: 'https://scholar.google.com', text: 'Google Scholar' },
];

export default function Contact() {
    return (
        <section id="contact" className="section-container">
            <motion.div
                className="max-w-2xl mx-auto space-y-12"
            >
                <div className="space-y-4 text-center">
                    <h2 className="h-large text-charcoal dark:text-cream">Get In Touch</h2>
                    <p className="body-lg">
                        Open to collaborations, research opportunities, and interesting conversations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {socialLinks.map((link, idx) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                                transition={{ delay: idx * 0.04, duration: 0.2 }}
                                whileHover={{ x: 4 }}
                                className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg hover:border-accent/50 dark:hover:border-blue-500/50 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <Icon className="text-accent dark:text-blue-400 group-hover:scale-110 transition-transform" size={24} />
                                    <div>
                                        <p className="font-medium text-charcoal dark:text-cream">{link.label}</p>
                                        <p className="text-sm text-slate dark:text-gray-400">{link.text}</p>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
