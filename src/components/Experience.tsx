'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        role: 'Research Assistant',
        organization: 'Indian Institute of Management Bangalore',
        duration: 'Oct 2025 - Present',
        location: 'Bangalore, India',
        description: 'Optimizing the Traveling Thief Problem (TTP) using Deep Reinforcement Learning (PPO and SAC) and Combinatorial Optimization techniques (POMO).',
        highlights: [
            'Applying DRL algorithms (PPO, SAC) to combinatorial optimization',
            'Supervised by Dr. Abhay Sobhanan',
        ],
        current: true,
    },
    {
        role: 'Undergraduate Researcher',
        organization: 'DaSH Lab - BITS Pilani',
        duration: 'Sept 2024 - Present',
        location: 'Goa, India',
        description: 'Privacy Preserving Federated Learning research, implementing Homomorphic Encryption (HE) and Differential Privacy (DP) while optimizing privacy-accuracy trade-offs.',
        highlights: [
            'Integrated RSPN pipeline in C++ and studied Mutable DB codebase',
            'Supervised by Dr. Arnab K. Paul',
        ],
        current: true,
    },
    {
        role: 'Undergraduate Researcher',
        organization: 'APPCAIR',
        duration: 'Sept 2025 - Nov 2025',
        location: 'Goa, India',
        description: 'Collaborated with University of Cambridge to optimize an LLM-based generator for drug discovery using graph search algorithms.',
        highlights: [
            'Collaboration with University of Cambridge researchers',
            'Supervised by Dr. Ashwin Srinivasan, Dr. Tirtharaj Dash, and Dr. Raviprasad Aduri',
        ],
        current: false,
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-wrapper section-padding">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
            >
                {/* Section header */}
                <div className="max-w-3xl">
                    <motion.span
                        className="text-label text-accent-primary mb-4 block"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Experience
                    </motion.span>
                    <motion.h2
                        className="text-headline text-text-primary dark:text-text-primary"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Research &
                        <span className="gradient-text"> Professional Journey</span>
                    </motion.h2>
                </div>

                {/* Experience timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/50 via-accent-secondary/30 to-transparent hidden md:block" />

                    <div className="space-y-8">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="relative md:pl-20"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-6 top-0 hidden md:flex items-center justify-center">
                                    <div className={`w-5 h-5 rounded-full border-2 ${exp.current
                                            ? 'bg-accent-primary border-accent-primary shadow-glow'
                                            : 'bg-dark-surface border-white/20'
                                        }`}>
                                        {exp.current && (
                                            <span className="absolute inset-0 rounded-full bg-accent-primary animate-ping opacity-30" />
                                        )}
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="glass-card p-6 md:p-8 card-hover group relative overflow-hidden">
                                    {/* Gradient accent line */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-primary via-accent-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <div className="space-y-2">
                                            <h3 className="text-subtitle text-text-primary dark:text-text-primary group-hover:text-accent-primary transition-colors">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-accent-primary">
                                                <Building2 size={16} />
                                                <span className="text-small font-medium">{exp.organization}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start md:items-end gap-2">
                                            <span className={`tag ${exp.current ? 'tag-accent' : ''}`}>
                                                <Calendar size={12} className="mr-1.5" />
                                                {exp.duration}
                                            </span>
                                            <span className="text-xs text-text-muted dark:text-text-muted flex items-center gap-1">
                                                <MapPin size={12} />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-body text-text-secondary dark:text-text-secondary mb-6">
                                        {exp.description}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="space-y-3">
                                        {exp.highlights.map((highlight, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 + i * 0.05 }}
                                                className="flex items-start gap-3 text-small text-text-secondary dark:text-text-secondary"
                                            >
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                                                <span>{highlight}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
