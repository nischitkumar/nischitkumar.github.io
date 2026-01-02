'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: 'Twin Delayed DDPG (TD3) Implementation',
        description: 'Implemented TD3 in PyTorch within the Hopper-v5 environment to address systematic overestimation bias by integrating Clipped Double Q-Learning and Target Policy Smoothing.',
        impact: 'Achieved up to ~25–35% higher peak reward and substantially more stable learning dynamics compared to baseline DDPG.',
        tech: ['PyTorch', 'Gymnasium/Hopper-v5', 'Reinforcement Learning', 'Python'],
        links: {
            github: 'https://github.com/nischitkumar/Paper-Implementations/tree/main/TD3',
            paper: 'https://arxiv.org/abs/1802.09477',
        },
    },
    {
        id: 2,
        title: 'Proximal Policy Optimization Implementation',
        description: 'Implemented PPO in PyTorch within the Cartpole-v1 environment. Addressed policy gradient variance by integrating clipped objective functions and adaptive KL divergence penalties.',
        impact: 'Achieved stable learning performance with an average episode reward consistently around ~9.5 – 9.7 over 300+ episodes using ε = 0.2 clipping and λ = 0.95.',
        tech: ['PyTorch', 'Python', 'MNIST'],
        links: {
            github: 'https://github.com/nischitkumar/Paper-Implementations/tree/main/PPO', // Link inferred from your snippet
            paper: 'https://arxiv.org/abs/1707.06347',
        },
    },
    {
        id: 3,
        title: 'Generative Adversarial Networks Implementation',
        description: 'Implemented a GAN from scratch in PyTorch, drawing insights from the original research paper. Trained and fine-tuned the model on the MNIST dataset.',
        impact: 'Achieved stable GAN training with ~50% reduction in discriminator loss (from ~1.03 to ~0.51) and ~68% improvement in generator objective (increase from ~0.94 to ~1.58), which produced realistic handwritten digits.',
        tech: ['PyTorch', 'Python', 'MNIST'],
        links: {
            github: 'https://github.com/nischitkumar/Paper-Implementations/tree/main/GAN', // Link inferred from your snippet
            paper: 'https://arxiv.org/abs/1406.2661',
        },
    },
    {
        id: 4,
        title: 'Variational AutoEncoder Implementation',
        description: 'Implemented a VAE from scratch in PyTorch by going through the original research paper accompanied by additional resources and used the MNIST dataset to train the model.',
        impact: 'Achieved stable convergence, with the Avg loss reducing by ~39%, and Reconstruction loss improving by ~46%, indicating a meaningful latent space for digit reconstruction.',
        tech: ['PyTorch', 'Python', 'MNIST'],
        links: {
            github: 'https://github.com/nischitkumar/Paper-Implementations/tree/main/VAE',
            paper: 'https://arxiv.org/abs/1312.6114',
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
