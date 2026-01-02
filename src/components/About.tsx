'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        category: 'Core Areas',
        skills: [
            { name: 'Deep Learning' },
            { name: 'NLP & Transformers' },
            { name: 'Federated Learning' },
            { name: 'Reinforcement Learning' },
            { name: 'Optimization of LLMs' },
        ],
    },
    {
        category: 'Systems & Infrastructure',
        skills: [
            { name: 'Docker', level: 88 },
            { name: 'Ray Engine', level: 85 },
        ],
    },
    {
        category: 'Programming Languages',
        skills: [
            { name: 'Python' },
            { name: 'C/C++' },
            { name: 'MySQL' },
        ],
    },
    {
        category: 'Frameworks',
        skills: [
            { name: 'PyTorch' },
            { name: 'TensorFlow' },
        ],
    },
    {
        category: 'Tools',
        skills: [
            { name: 'Git/Github' },
            { name: 'Weights & Biases' },
        ],
    },
];
const coursework = [
    'Linear Algebra',
    'Probability & Statistics',
    'Differential Equations',
    'Control Theory',
    'Computer Programming',
    'Digital Design',
    'Operating Systems',
    'Econometric Methods'
];

const onlineCoursework = [
    { name: 'Stanford CS224R: Deep Reinforcement Learning', platform: 'Stanford University [YouTube]' },
    { name: 'Andrew Ng: Deep Learning Specialization', platform: 'Coursera' },
    { name: 'Foundations of Machine Learning', platform: 'Udemy' },
    { name: 'Computer Networks', platform: 'YouTube' },
];

const categoryColors = {
    'Core Areas': { bg: 'bg-accent/10 dark:bg-blue-500/10', border: 'border-accent/30 dark:border-blue-500/30', text: 'text-accent dark:text-blue-400' },
    'Systems & Infrastructure': { bg: 'bg-purple-500/10 dark:bg-purple-500/10', border: 'border-purple-500/30 dark:border-purple-500/30', text: 'text-purple-600 dark:text-purple-400' },
    'Programming Languages': { bg: 'bg-emerald-500/10 dark:bg-emerald-500/10', border: 'border-emerald-500/30 dark:border-emerald-500/30', text: 'text-emerald-600 dark:text-emerald-400' },
    'Frameworks': { bg: 'bg-orange-500/10 dark:bg-orange-500/10', border: 'border-orange-500/30 dark:border-orange-500/30', text: 'text-orange-600 dark:text-orange-400' },
    'Tools': { bg: 'bg-rose-500/10 dark:bg-rose-500/10', border: 'border-rose-500/30 dark:border-rose-500/30', text: 'text-rose-600 dark:text-rose-400' },
};

const SkillTag = ({ name, categoryColor }: { name: string; categoryColor: keyof typeof categoryColors }) => {
    const colors = categoryColors[categoryColor] || categoryColors['Core Areas'];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium ${colors.bg} border ${colors.border} transition-all duration-200 hover:scale-105 hover:shadow-lg`}
        >
            <span className={colors.text}>{name}</span>
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
                        {['Reinforcement Learning', 'Federated Learning', 'Post Training in LLMs', 'Quantization Techniques', 'ML for Systems', 'Scalable Training'].map((interest, idx) => (
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
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h3 className="h-medium text-charcoal dark:text-cream">Skills & Expertise</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillCategories.map((skillGroup, groupIdx) => {
                            const categoryName = skillGroup.category as keyof typeof categoryColors;
                            const colors = categoryColors[categoryName] || categoryColors['Core Areas'];

                            return (
                                <motion.div
                                    key={skillGroup.category}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                                    className={`p-4 rounded-lg border ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-300 hover:shadow-md`}
                                >
                                    <h4 className={`text-sm font-bold ${colors.text} mb-3 uppercase tracking-wider opacity-90`}>
                                        {skillGroup.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.skills.map((skill) => (
                                            <SkillTag key={skill.name} name={skill.name} categoryColor={categoryName} />
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
