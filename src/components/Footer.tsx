'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-charcoal dark:bg-gray-950 text-cream py-12"
        >
            <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-6 border-t border-white/10 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <p className="font-display text-lg">NK</p>
                        <p className="text-sm text-cream/60 mt-2">
                            Aspiring Machine Learning Researcher
                        </p>
                    </div>

                    <div className="flex gap-8 text-sm">
                        <a href="#about" className="hover:text-white transition-colors">
                            About
                        </a>
                        <a href="#experience" className="hover:text-white transition-colors">
                            Experience
                        </a>
                        <a href="#projects" className="hover:text-white transition-colors">
                            Projects
                        </a>
                        {/* <a href="#research" className="hover:text-white transition-colors">
                            Research
                        </a> */}
                        <a href="#contact" className="hover:text-white transition-colors">
                            Contact
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-cream/50">
                    {/* <p>© 2026 Nischit Kumar. All rights reserved.</p> */}
                </div>
            </div>
        </motion.footer>
    );
}
