'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: 'Twin Delayed DDPG (TD3)',
        description: 'Implemented TD3 in PyTorch within the Hopper-v5 environment to address systematic overestimation bias by integrating Clipped Double Q-Learning and Target Policy Smoothing.',
        impact: '25-35% higher peak reward and substantially more stable learning dynamics compared to baseline DDPG.',
        tech: ['PyTorch', 'Gymnasium', 'RL', 'Python'],
        links: {
            github: 'https://github.com/nischitkumar/Paper-Implementations/tree/main/TD3',
            paper: 'https://arxiv.org/abs/1802.09477',
        },
        featured: true,
    },
    {
        id: 2,
        title: 'Proximal Policy Optimization',
        description: 'Implemented PPO in PyTorch within the Cartpole-v1 environment. Addressed policy gradient variance by integrating clipped objective functions and adaptive KL divergence penalties.',
        impact: 'Stable learning with average episode reward around 9.5-9.7 over 300+ episodes using ε=0.2 clipping.',
        tech: ['PyTorch', 'Python', 'RL'],
        links: {
            github: 'https://github.com/nischitkumar/Paper-Implementations/tree/main/PPO',
            paper: 'https://arxiv.org/abs/1707.06347',
        },
        featured: true,
    },
    {
        id: 3,
        title: 'Generative Adversarial Networks',
        description: 'Implemented a GAN from scratch in PyTorch, drawing insights from the original research paper. Trained and fine-tuned the model on the MNIST dataset.',
        impact: '~50% reduction in discriminator loss and ~68% improvement in generator objective.',
        tech: ['PyTorch', 'Python', 'MNIST'],
        links: {
            github: 'https://github.com/nischitkumar/Paper-Implementations/tree/main/GAN',
            paper: 'https://arxiv.org/abs/1406.2661',
        },
        featured: false,
    },
    {
        id: 4,
        title: 'Variational AutoEncoder',
        description: 'Implemented a VAE from scratch in PyTorch by studying the original research paper. Used the MNIST dataset to train and validate the model.',
        impact: 'Avg loss reduced by ~39%, Reconstruction loss improved by ~46%.',
        tech: ['PyTorch', 'Python', 'MNIST'],
        links: {
            github: 'https://github.com/nischitkumar/Paper-Implementations/tree/main/VAE',
            paper: 'https://arxiv.org/abs/1312.6114',
        },
        featured: false,
    },
];

export default function Projects() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="section-wrapper section-padding">
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
                        Projects
                    </motion.span>
                    <motion.h2
                        className="text-headline text-text-primary dark:text-text-primary"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Building &
                        <span className="gradient-text"> learning in public</span>
                    </motion.h2>
                    <motion.p
                        className="text-body text-text-secondary dark:text-text-secondary mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Paper implementations and hands-on explorations of ML concepts
                    </motion.p>
                </div>

                {/* Featured projects - Large cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {featuredProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <ProjectCard project={project} featured />
                        </motion.div>
                    ))}
                </div>

                {/* Other projects - Smaller cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {otherProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: idx * 0.1 + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
