'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText } from 'lucide-react';

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        impact: string;
        tech: string[];
        links: Record<string, string>;
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg hover:border-accent/50 dark:hover:border-blue-500/50 transition-all"
            whileHover={{ y: -4 }}
        >
            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="h-medium text-charcoal dark:text-cream">{project.title}</h3>
                    <p className="body-md">{project.description}</p>
                </div>

                <div className="pt-2 border-t border-white/20 dark:border-white/10">
                    <p className="text-sm text-slate dark:text-gray-300">
                        <span className="font-semibold text-accent dark:text-blue-400">Impact:</span> {project.impact}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-xs rounded text-charcoal dark:text-cream">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 pt-2">
                    {project.links.github && (
                        <motion.a href={project.links.github} whileHover={{ x: 2 }}>
                            <Github size={18} className="text-slate dark:text-gray-400 hover:text-charcoal dark:hover:text-cream" />
                        </motion.a>
                    )}
                    {project.links.demo && (
                        <motion.a href={project.links.demo} whileHover={{ x: 2 }}>
                            <ExternalLink size={18} className="text-slate dark:text-gray-400 hover:text-charcoal dark:hover:text-cream" />
                        </motion.a>
                    )}
                    {project.links.paper && (
                        <motion.a href={project.links.paper} whileHover={{ x: 2 }}>
                            <FileText size={18} className="text-slate dark:text-gray-400 hover:text-charcoal dark:hover:text-cream" />
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
