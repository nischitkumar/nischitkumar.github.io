'use client';

import { motion } from 'framer-motion';
import { FileText, Github, ExternalLink } from 'lucide-react';

interface ResearchCardProps {
    paper: {
        id: number;
        title: string;
        venue: string;
        year: number;
        tags: string[];
        summary: string;
        links: Record<string, string>;
        featured?: boolean;
    };
}

export default function ResearchCard({ paper }: ResearchCardProps) {
    return (
        <motion.div
            className={`p-6 rounded-lg border transition-all ${paper.featured
                ? 'bg-white/10 dark:bg-white/5 backdrop-blur-md border-accent/30 dark:border-blue-500/30 shadow-md'
                : 'bg-white/10 dark:bg-white/5 backdrop-blur-md border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20'
                }`}
            whileHover={{ y: -4, shadow: '0 20px 40px rgba(0,0,0,0.08)' }}
        >
            <div className="space-y-4">
                <div className="space-y-2">
                    <motion.h3 className="h-medium text-charcoal dark:text-cream" whileHover={{ color: '#0066CC' }}>
                        {paper.title}
                    </motion.h3>
                    <div className="flex flex-wrap gap-3 text-sm text-slate dark:text-gray-400">
                        <span className="font-medium">{paper.venue}</span>
                        <span>·</span>
                        <span>{paper.year}</span>
                    </div>
                </div>

                <p className="body-md">{paper.summary}</p>

                <div className="flex flex-wrap gap-2">
                    {paper.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-sm rounded-full text-charcoal dark:text-cream">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                    {paper.links.paper && (
                        <motion.a
                            href={paper.links.paper}
                            className="flex items-center gap-2 text-accent dark:text-blue-400 font-medium hover:underline"
                            whileHover={{ x: 2 }}
                        >
                            <FileText size={16} /> Paper
                        </motion.a>
                    )}
                    {paper.links.github && (
                        <motion.a
                            href={paper.links.github}
                            className="flex items-center gap-2 text-accent dark:text-blue-400 font-medium hover:underline"
                            whileHover={{ x: 2 }}
                        >
                            <Github size={16} /> Code
                        </motion.a>
                    )}
                    {paper.links.arxiv && (
                        <motion.a
                            href={paper.links.arxiv}
                            className="flex items-center gap-2 text-accent dark:text-blue-400 font-medium hover:underline"
                            whileHover={{ x: 2 }}
                        >
                            <ExternalLink size={16} /> arXiv
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
