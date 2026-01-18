'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        impact: string;
        tech: string[];
        links: Record<string, string>;
    };
    featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
    return (
        <motion.div
            className={`glass-card group relative overflow-hidden h-full ${featured ? 'p-8' : 'p-6'
                }`}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-[1px] rounded-2xl bg-dark-bg dark:bg-dark-bg" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/30 via-transparent to-accent-secondary/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        {featured && (
                            <span className="text-label text-accent-primary mb-2 block">Featured</span>
                        )}
                        <h3 className={`${featured ? 'text-subtitle' : 'text-body font-semibold'} text-text-primary dark:text-text-primary group-hover:text-accent-primary transition-colors duration-300`}>
                            {project.title}
                        </h3>
                    </div>
                    <motion.div
                        className="ml-4 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <ArrowUpRight size={16} className="text-accent-primary" />
                    </motion.div>
                </div>

                {/* Description */}
                <p className={`text-text-secondary dark:text-text-secondary ${featured ? 'text-body' : 'text-small'} mb-4 flex-grow`}>
                    {project.description}
                </p>

                {/* Impact */}
                <div className="mb-4 p-3 rounded-lg bg-accent-primary/5 border border-accent-primary/10">
                    <p className="text-small text-text-secondary dark:text-text-secondary">
                        <span className="text-accent-primary font-medium">Impact: </span>
                        {project.impact}
                    </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                        <span
                            key={tech}
                            className="tag text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                    {project.links.github && (
                        <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-small text-text-muted dark:text-text-muted hover:text-accent-primary transition-colors"
                            whileHover={{ x: 2 }}
                        >
                            <Github size={16} />
                            <span>Code</span>
                        </motion.a>
                    )}
                    {project.links.demo && (
                        <motion.a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-small text-text-muted dark:text-text-muted hover:text-accent-primary transition-colors"
                            whileHover={{ x: 2 }}
                        >
                            <ExternalLink size={16} />
                            <span>Demo</span>
                        </motion.a>
                    )}
                    {project.links.paper && (
                        <motion.a
                            href={project.links.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-small text-text-muted dark:text-text-muted hover:text-accent-primary transition-colors"
                            whileHover={{ x: 2 }}
                        >
                            <FileText size={16} />
                            <span>Paper</span>
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
