'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResearchCard from './ResearchCard';

const researchPapers = [
    {
        id: 1,
        title: 'Federated Learning at Scale: Communication-Efficient Mechanisms',
        venue: 'ICML 2024',
        year: 2024,
        tags: ['Federated Learning', 'Systems ML', 'Optimization'],
        summary: 'Developing communication-efficient mechanisms for federated learning in heterogeneous environments.',
        links: {
            paper: '#',
            github: '#',
            arxiv: '#',
        },
        featured: true,
    },
    {
        id: 2,
        title: 'Efficient Transformer Architectures for Edge Deployment',
        venue: 'NeurIPS 2024',
        year: 2024,
        tags: ['Transformers', 'Model Compression', 'Edge ML'],
        summary: 'Designing efficient transformer variants optimized for deployment on edge devices.',
        links: {
            paper: '#',
            github: '#',
        },
        featured: true,
    },
    {
        id: 3,
        title: 'Neural Pruning via Learned Importance Metrics',
        venue: 'ICLR 2023',
        year: 2023,
        tags: ['Model Compression', 'Neural Networks'],
        summary: 'Novel approach to network pruning using learned importance metrics.',
        links: {
            paper: '#',
            github: '#',
        },
        featured: false,
    },
];

const allTags = Array.from(new Set(researchPapers.flatMap(p => p.tags)));

export default function Research() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredPapers = selectedTag
        ? researchPapers.filter(p => p.tags.includes(selectedTag))
        : researchPapers;

    return (
        <section id="research" className="section-container">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
            >
                <div className="space-y-4">
                    <h2 className="h-large text-charcoal dark:text-cream">Research Interests & Publications</h2>
                    <p className="body-lg max-w-2xl">
                        Peer-reviewed work in machine learning systems, efficiency, and scalability.
                    </p>
                </div>

                <motion.div className="flex flex-wrap gap-2">
                    <motion.button
                        onClick={() => setSelectedTag(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTag === null
                            ? 'bg-charcoal text-cream dark:bg-cream dark:text-charcoal'
                            : 'bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-charcoal dark:text-cream hover:border-accent/50 dark:hover:border-blue-500/50'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        All
                    </motion.button>
                    {allTags.map(tag => (
                        <motion.button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTag === tag
                                ? 'bg-accent text-white dark:bg-blue-500 dark:text-charcoal'
                                : 'bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-charcoal dark:text-cream hover:border-accent/50 dark:hover:border-blue-500/50'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tag}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div className="space-y-6">
                    <AnimatePresence mode="wait">
                        {filteredPapers.map((paper, idx) => (
                            <motion.div
                                key={paper.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <ResearchCard paper={paper} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </section>
    );
}
