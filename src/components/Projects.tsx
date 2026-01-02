'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: 'ML Training Framework',
        description: 'Distributed training framework for large-scale model training.',
        impact: '2.5x speedup on 128 GPUs',
        tech: ['PyTorch', 'CUDA', 'Distributed Systems'],
        links: {
            github: '#',
            demo: '#',
            paper: '#',
        },
    },
    {
        id: 2,
        title: 'Model Compression Toolkit',
        description: 'End-to-end toolkit for neural network pruning and quantization.',
        impact: '80% parameter reduction, 95% accuracy retention',
        tech: ['TensorFlow', 'Python', 'ONNX'],
        links: {
            github: '#',
            paper: '#',
            demo: '#',
        },
    },
    {
        id: 3,
        title: 'Federated Learning Platform',
        description: 'Privacy-preserving federated learning infrastructure.',
        impact: 'Deployed across 50+ edge devices',
        tech: ['TensorFlow Federated', 'gRPC', 'Kubernetes'],
        links: {
            github: '#',
            paper: '#',
            demo: '#',
        },
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-container">
            <motion.div
                className="space-y-12"
            >
                <div className="space-y-4">
                    <h2 className="h-large text-charcoal dark:text-cream">Projects</h2>
                    <p className="body-lg max-w-2xl">
                        Practical applications and tools built to solve real problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                            transition={{ delay: idx * 0.05, duration: 0.3 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
