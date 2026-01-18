'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        category: 'Core Areas',
        color: 'blue',
        skills: ['Deep Learning', 'NLP & Transformers', 'Federated Learning', 'Reinforcement Learning', 'LLM Optimization'],
    },
    {
        category: 'Systems',
        color: 'violet',
        skills: ['Docker', 'Ray Engine'],
    },
    {
        category: 'Languages',
        color: 'emerald',
        skills: ['Python', 'C/C++', 'MySQL'],
    },
    {
        category: 'Frameworks',
        color: 'orange',
        skills: ['PyTorch', 'TensorFlow'],
    },
    {
        category: 'Tools',
        color: 'rose',
        skills: ['Git/GitHub', 'Weights & Biases'],
    },
];

const coursework = [
    'Linear Algebra', 'Probability & Statistics', 'Differential Equations', 'Control Theory',
    'Computer Programming', 'Digital Design', 'Operating Systems', 'Econometric Methods'
];

const researchInterests = [
    'Reinforcement Learning', 'Federated Learning', 'Post Training Optimization',
    'Quantization Techniques', 'ML for Systems', 'Scalable Training'
];

const onlineCourses = [
    { name: 'Stanford CS224R: Deep Reinforcement Learning', platform: 'Stanford [YouTube]' },
    { name: 'Andrew Ng: Deep Learning Specialization', platform: 'Coursera' },
    { name: 'Foundations of Machine Learning', platform: 'Udemy' },
    { name: 'Computer Networks', platform: 'YouTube' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
    return (
        <section id="about" className="section-wrapper section-padding">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="space-y-20"
            >
                {/* Section header */}
                <div className="max-w-3xl">
                    <motion.span
                        className="text-label text-accent-primary mb-4 block"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.span>
                    <motion.h2
                        className="text-headline text-text-primary dark:text-text-primary mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Building the future of
                        <span className="gradient-text"> intelligent systems</span>
                    </motion.h2>

                    <motion.div
                        className="space-y-6 text-body text-text-secondary dark:text-text-secondary"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p>
                            I'm currently exploring <strong className="text-text-primary dark:text-text-primary">Reinforcement Learning</strong>,
                            <strong className="text-text-primary dark:text-text-primary"> ML for Systems</strong>, and
                            <strong className="text-text-primary dark:text-text-primary"> Language Models</strong>.
                            I'm fascinated by RL algorithms, their applications, and designing efficient systems within hardware constraints.
                        </p>
                        <p>
                            I believe the next frontier of AI isn't in larger models, but in
                            <strong className="text-text-primary dark:text-text-primary"> interdisciplinary systems</strong> that
                            manage resources intelligently. My goal is to contribute to accessible and sustainable AI.
                        </p>
                        <p className="text-text-muted dark:text-text-muted">
                            Beyond academics, I enjoy reading about tech and sports, listening to music, playing Cricket and Basketball, and staying curious.
                        </p>
                    </motion.div>
                </div>

                {/* Research Interests */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <h3 className="text-title text-text-primary dark:text-text-primary">Research Interests</h3>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3"
                    >
                        {researchInterests.map((interest) => (
                            <motion.span
                                key={interest}
                                variants={itemVariants}
                                className="tag tag-accent"
                                whileHover={{ scale: 1.05 }}
                            >
                                {interest}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <h3 className="text-title text-text-primary dark:text-text-primary">Skills & Expertise</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.4 }}
                                className="glass-card p-5 card-hover"
                            >
                                <h4 className="text-label text-accent-primary mb-4">
                                    {category.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span key={skill} className="tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Coursework Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* University Coursework */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-title text-text-primary dark:text-text-primary">University Coursework</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {coursework.map((course, idx) => (
                                <motion.div
                                    key={course}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.03, duration: 0.3 }}
                                    className="glass-card p-4 card-hover"
                                >
                                    <p className="text-small text-text-primary dark:text-text-primary font-medium">{course}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Online Courses */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h3 className="text-title text-text-primary dark:text-text-primary">Online Certifications</h3>
                        <div className="space-y-3">
                            {onlineCourses.map((course, idx) => (
                                <motion.div
                                    key={course.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                                    className="glass-card p-4 card-hover group"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1 pr-4">
                                            <p className="text-small text-text-primary dark:text-text-primary font-medium group-hover:text-accent-primary transition-colors">
                                                {course.name}
                                            </p>
                                            <p className="text-xs text-text-muted dark:text-text-muted mt-1">
                                                {course.platform}
                                            </p>
                                        </div>
                                        <span className="text-accent-primary text-lg">✓</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
