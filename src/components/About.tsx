'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        category: 'Machine Learning',
        skills: [
            { name: 'Deep Learning', level: 95 },
            { name: 'NLP & Transformers', level: 90 },
            { name: 'Computer Vision', level: 85 },
            { name: 'Federated Learning', level: 92 },
        ],
    },
    {
        category: 'Systems & Infrastructure',
        skills: [
            { name: 'Distributed Systems', level: 88 },
            { name: 'Cloud Infrastructure', level: 85 },
            { name: 'Kubernetes & Docker', level: 87 },
            { name: 'Performance Optimization', level: 89 },
        ],
    },
    {
        category: 'Programming Languages',
        skills: [
            { name: 'Python', level: 98 },
            { name: 'C++', level: 85 },
            { name: 'TypeScript/JavaScript', level: 80 },
            { name: 'Rust', level: 75 },
        ],
    },
];

const coursework = [
    'Advanced Machine Learning',
    'Deep Learning & Neural Networks',
    'Natural Language Processing',
    'Computer Vision',
    'Distributed Systems',
    'Systems Design & Architecture',
    'Research Methodology',
    'Applied Statistics',
];

const onlineCoursework = [
    { name: 'Stanford CS224R: Deep Reinforcement Learning', platform: 'Stanford University [YouTube]' },
    { name: 'Andrew Ng: Deep Learning Specialization', platform: 'Coursera' },
    { name: 'Foundations of Machine Learning', platform: 'Udemy' },
    { name: 'Computer Networks', platform: 'YouTube' },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
    return (
        <motion.div className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-charcoal dark:text-cream">{name}</span>
                <span className="text-xs text-slate dark:text-gray-400">{level}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-accent dark:bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                />
            </div>
        </motion.div>
    );
};

export default function About() {
    return (
        <section id="about" className="section-container">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl space-y-12"
            >
                <h2 className="h-large text-charcoal dark:text-cream">About</h2>

                <motion.div className="space-y-6 text-slate dark:text-gray-300 leading-relaxed">
                    <p className="body-lg">
                        I'm a machine learning researcher deeply interested in the intersection of systems design and intelligent algorithms. My work focuses on building scalable, efficient, and practical ML systems that can operate at scale.
                    </p>

                    <p className="body-lg">
                        Currently, I'm exploring how we can make machine learning more accessible and efficient, particularly in resource-constrained environments. I believe the next frontier of ML lies not just in better algorithms, but in systems that intelligently manage computation, communication, and memory.
                    </p>

                    <p className="body-lg">
                        When not researching, I enjoy writing about ML concepts, contributing to open-source projects, and mentoring junior researchers.
                    </p>
                </motion.div>

                {/* Research Interests */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-3"
                >
                </motion.div>

                {/* University Coursework */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h3 className="h-medium text-charcoal dark:text-cream">University Coursework</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {coursework.map((course, idx) => (
                            <motion.div
                                key={course}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="p-3 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg hover:border-accent/50 dark:hover:border-blue-500/50 transition-all"
                            >
                                <p className="text-sm font-medium text-charcoal dark:text-cream">{course}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Online Coursework */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h3 className="h-medium text-charcoal dark:text-cream">Research Interests</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['Federated Learning', 'Distributed Systems', 'Model Compression', 'Efficiency', 'Systems ML', 'Scalable Training'].map((interest, idx) => (
                            <motion.div
                                key={interest}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="p-3 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg hover:border-accent/50 dark:hover:border-blue-500/50 transition-all group"
                            >
                                <p className="text-sm font-medium text-charcoal dark:text-cream group-hover:text-accent dark:group-hover:text-blue-400 transition-colors text-center">{interest}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Online Coursework & Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="space-y-4"
                >
                    <h3 className="h-medium text-charcoal dark:text-cream">Online Coursework & Certifications</h3>
                    <div className="space-y-2">
                        {onlineCoursework.map((course, idx) => (
                            <motion.div
                                key={course.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.06 }}
                                className="p-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg hover:border-accent/50 dark:hover:border-blue-500/50 transition-all group"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-charcoal dark:text-cream group-hover:text-accent dark:group-hover:text-blue-400 transition-colors">{course.name}</p>
                                        <p className="text-xs text-slate dark:text-gray-400 mt-1">{course.platform}</p>
                                    </div>
                                    <motion.span
                                        className="text-accent dark:text-blue-400 text-lg"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                    >
                                        ✓
                                    </motion.span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-8"
                >
                    <h3 className="h-medium text-charcoal dark:text-cream">Skills & Expertise</h3>

                    <div className="space-y-8">
                        {skillCategories.map((skillGroup, groupIdx) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: groupIdx * 0.15 }}
                                className="space-y-4 p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg"
                            >
                                <h4 className="font-semibold text-charcoal dark:text-cream text-lg">{skillGroup.category}</h4>
                                <div className="space-y-4">
                                    {skillGroup.skills.map((skill, idx) => (
                                        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technical Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-3"
                >
                    <h3 className="h-medium text-charcoal dark:text-cream">Technical Stack</h3>
                    <div className="space-y-2 text-sm text-slate dark:text-gray-400">
                        <p>• Languages: Python, C++, Rust, TypeScript</p>
                        <p>• Frameworks: PyTorch, TensorFlow, JAX</p>
                        <p>• Infrastructure: Kubernetes, Docker, gRPC</p>
                        <p>• Tools: Git, Weights & Biases, Ray, CUDA</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
