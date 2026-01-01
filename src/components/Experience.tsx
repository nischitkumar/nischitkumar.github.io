'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'Research Assistant',
        organization: 'Indian Institute Of Management Bangalore',
        duration: 'Oct 2025 - Present',
        description:
            'Working on optimizing the Traveling Thief problem (TTP) using Deep Reinforcement Learning (DRL) and similar Combinatorial Optimization techniques.',
        highlights: [
            'Optimizing TTP using Deep Reinforcement Learning',
            'Supervised by Dr. Abhay Sobhanan',
        ],
    },
    {
        role: 'Undergraduate Researcher',
        organization: 'Data, Systems and High Performance Computing (DaSH) Lab',
        duration: 'Sept 2024 - Present',
        description:
            'Focusing on the systems side of homomorphic encryption in Federated Learning (FL) and integrating RSPNs for data pipeline optimization.',
        highlights: [
            'Integrated Relational Sum Product Networks (RSPN) in C++',
            'Benchmarking performance and studying Mutable DB’s codebase',
            'Supervised by Dr. Arnab K. Paul',
        ],
    },
    {
        role: 'Undergraduate Researcher',
        organization: 'APPCAIR',
        duration: 'Sept 2025 - Nov 2025',
        description: 'Collaborated with University of Cambridge to optimize an LLM based generator for designing lead molecules in drug discovery.',
        highlights: [
            'LLM-based generator for drug discovery',
            'International collaboration with University of Cambridge',
            'Supervised by Dr. Ashwin Srinivasan, Dr. Tirtharaj Dash, and Dr. Raviprasad Aduri',
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-container">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
            >
                <div className="space-y-4">
                    <h2 className="h-large text-charcoal dark:text-cream">Experience</h2>
                    <p className="body-lg max-w-2xl">
                        Professional journey in machine learning research and engineering.
                    </p>
                </div>

                <div className="space-y-0 relative">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-12 py-8"
                        >
                            {/* Timeline Line - extends from circle down */}
                            {idx < experiences.length - 1 && (
                                <div className="absolute left-[8.5px] top-10 h-20 w-0.5 bg-gradient-to-b from-accent to-accent/30 dark:from-blue-500 dark:to-blue-500/30" />
                            )}

                            {/* Timeline Dot */}
                            <motion.div
                                className="absolute -left-[5px] top-3 w-6 h-6 bg-accent dark:bg-blue-500 rounded-full shadow-lg shadow-accent/50 dark:shadow-blue-500/50 border-[3px] border-cream dark:border-charcoal"
                                whileHover={{ scale: 1.3, boxShadow: '0 0 20px rgba(0, 102, 204, 0.6)' }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            />

                            <div className="space-y-3">
                                <div>
                                    <h3 className="h-medium text-charcoal dark:text-cream">
                                        {exp.role}
                                    </h3>
                                    <p className="text-accent dark:text-blue-400 font-medium">
                                        {exp.organization}
                                    </p>
                                    <p className="text-sm text-slate dark:text-gray-400">
                                        {exp.duration}
                                    </p>
                                </div>

                                <p className="body-md">{exp.description}</p>

                                <ul className="space-y-1 text-sm text-slate dark:text-gray-400">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-accent dark:text-blue-400 mt-1">
                                                ✓
                                            </span>
                                            {highlight}
                                        </li>
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
