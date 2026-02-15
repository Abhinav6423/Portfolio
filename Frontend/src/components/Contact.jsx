import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {

    // --- ANIMATION VARIANTS ---
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    return (
        <section id="contact" className="relative w-full bg-[#050505] py-32 px-6 overflow-hidden">

            {/* --- BACKGROUND ELEMENTS --- */}

            {/* Bottom Glow - Indigo/Purple (Calls back to the Hero Section) */}
            <div className="absolute bottom-0 left-1/2 w-[1000px] h-[400px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            {/* Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">

                {/* --- HEADER --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp}
                    className="mb-20 text-center"
                >
                    <div className="flex justify-center items-center gap-4 mb-6">
                        <span className="w-12 h-px bg-zinc-700"></span>
                        <span className="text-zinc-400 text-xs uppercase tracking-[0.2em]">Contact</span>
                        <span className="w-12 h-px bg-zinc-700"></span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight">
                        Ready to Ship? <br />
                        <span className="text-zinc-500 italic">Let’s Build the Future.</span>
                    </h2>

                    <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        I am currently open to full-time roles, freelance projects, and collaborations.
                        If you need a robust, scalable digital product — I'm ready to engineer it.
                    </p>
                </motion.div>

                {/* --- CONTACT GRID --- */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >

                    {/* 1. Email Card */}
                    <motion.a
                        href="mailto:pabhinav595@gmail.com"
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col items-center justify-center p-12 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-all duration-300 shadow-lg mb-6 group-hover:scale-110">
                                <FaEnvelope className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-zinc-200 mb-2 group-hover:text-white">Email Me</h3>
                            <p className="text-zinc-500 font-mono text-sm group-hover:text-zinc-400">pabhinav595@gmail.com</p>
                        </div>
                    </motion.a>

                    {/* 2. GitHub Card */}
                    <motion.a
                        href="https://github.com/Abhinav6423"
                        target="_blank"
                        rel="noreferrer"
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col items-center justify-center p-12 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-zinc-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-all duration-300 shadow-lg mb-6 group-hover:scale-110">
                                <FaGithub className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-zinc-200 mb-2 group-hover:text-white">GitHub</h3>
                            <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm group-hover:text-zinc-400">
                                <span>View Code</span> <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                        </div>
                    </motion.a>

                    {/* 3. LinkedIn Card */}
                    <motion.a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col items-center justify-center p-12 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-all duration-300 shadow-lg mb-6 group-hover:scale-110">
                                <FaLinkedin className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-zinc-200 mb-2 group-hover:text-white">LinkedIn</h3>
                            <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm group-hover:text-zinc-400">
                                <span>Connect</span> <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                        </div>
                    </motion.a>

                    {/* 4. Location Card */}
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col items-center justify-center p-12 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden cursor-default"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-all duration-300 shadow-lg mb-6 group-hover:scale-110">
                                <FaMapMarkerAlt className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-zinc-200 mb-2 group-hover:text-white">Based In</h3>
                            <p className="text-zinc-500 font-mono text-sm group-hover:text-zinc-400">Delhi, India (Remote)</p>
                        </div>
                    </motion.div>

                </motion.div>

                {/* --- FOOTER --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs uppercase tracking-widest"
                >
                    <p>© {new Date().getFullYear()} Abhinav Pandey.</p>
                    <p>Designed & Engineered with Precision.</p>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;