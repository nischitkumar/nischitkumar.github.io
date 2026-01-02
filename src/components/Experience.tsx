'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'Research Assistant',
        organization: 'Indian Institute Of Management Bangalore',
        duration: 'Oct 2025 - Present',
        description:
            'Working on optimizing the Traveling Thief problem (TTP) using DRL (PPO and SAC) and similar Combinatorial Optimization (POMO) techniques.',
        highlights: [
            'Optimizing TTP using DRL (PPO and SAC)',
            'Supervised by Dr. Abhay Sobhanan',
        ],
    },
    {
        role: 'Undergraduate Researcher',
        organization: 'Data, Systems and High Performance Computing (DaSH) Lab',
        duration: 'Sept 2024 - Present',
        description:
            'Working on Privacy Preserving Federated Learning, keeping model training weights encrypted using Homomorphic Encryption (HE) and Differential Privacy (DP), while tuning privacy parameters to maintain high accuracy across internal FL workflows.',
        highlights: [
            'Integrated Relational Sum Product Networks (RSPN) pipeline in C++ and studied Mutable DB’s codebase',
            'Supervised by Dr. Arnab K. Paul',
        ],
    },
    {
        role: 'Undergraduate Researcher',
        organization: 'APPCAIR',
        duration: 'Sept 2025 - Nov 2025',
        description: 'Collaborated with University of Cambridge to optimize an LLM based generator for designing lead molecules in drug discovery using various graph search algorithms.',
        highlights: [
            'Collaboration with University of Cambridge',
            'Supervised by Dr. Ashwin Srinivasan, Dr. Tirtharaj Dash, and Dr. Raviprasad Aduri',
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-container">
            <motion.div
                className="space-y-12"
            >
                <div className="space-y-4">
                    <h2 className="h-large text-charcoal dark:text-cream">Experiences</h2>

                </div>

                <div className="space-y-4">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                            transition={{ delay: idx * 0.08, duration: 0.4 }}
                            className="group p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg hover:border-accent/50 dark:hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Subtle top accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent/50 to-transparent dark:from-blue-500 dark:via-blue-500/50" />

                            {/* Number indicator */}
                            <div className="absolute -top-8 -right-8 text-8xl font-bold text-white/5 dark:text-white/[0.02] group-hover:text-white/10 dark:group-hover:text-white/[0.04] transition-colors duration-300">
                                {String(idx + 1).padStart(2, '0')}
                            </div>

                            <div className="relative space-y-3">
                                {/* Header with duration badge */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-1 flex-1">
                                        <h3 className="h-medium text-charcoal dark:text-cream group-hover:text-accent dark:group-hover:text-blue-400 transition-colors duration-300">
                                            {exp.role}
                                        </h3>
                                        <p className="text-accent dark:text-blue-400 font-medium">
                                            {exp.organization}
                                        </p>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="px-3 py-1 bg-accent/10 dark:bg-blue-500/10 border border-accent/30 dark:border-blue-500/30 rounded-full whitespace-nowrap"
                                    >
                                        <p className="text-xs font-semibold text-accent dark:text-blue-400">
                                            {exp.duration}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Description */}
                                <p className="body-md pt-2">{exp.description}</p>

                                {/* Highlights */}
                                <ul className="space-y-2 pt-2">
                                    {exp.highlights.map((highlight, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.15 + i * 0.05 }}
                                            className="flex items-start gap-2 text-sm text-slate dark:text-gray-400"
                                        >
                                            <motion.span
                                                className="text-accent dark:text-blue-400 font-semibold flex-shrink-0 mt-0.5"
                                                whileHover={{ scale: 1.2, rotate: 10 }}
                                            >
                                                →
                                            </motion.span>
                                            <span>{highlight}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
