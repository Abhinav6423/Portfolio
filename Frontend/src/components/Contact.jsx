import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Cards appear one by one
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="contact" className="w-full bg-neutral-950 py-24 px-4 md:px-10 text-white overflow-hidden">
            <div className="max-w-5xl mx-auto">
                
                {/* --- Section Header --- */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                {/* --- Contact Cards Grid --- */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                    
                    {/* 1. Email Card */}
                    <motion.a 
                        href="mailto:pabhinav595@gmail.com"
                        variants={itemVariants}
                        whileHover={{ y: -5, backgroundColor: "rgba(24, 24, 27, 0.8)" }}
                        className="flex flex-col items-center justify-center p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 group text-center"
                    >
                        <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 border border-white/5 mb-6">
                            <FaEnvelope className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-medium mb-2 group-hover:text-cyan-100 transition-colors">Email</h3>
                        <p className="text-zinc-400 font-light text-sm md:text-base">pabhinav595@gmail.com</p>
                    </motion.a>

                    {/* 2. GitHub Card */}
                    <motion.a 
                        href="https://github.com/Abhinav6423" 
                        target="_blank" 
                        rel="noreferrer"
                        variants={itemVariants}
                        whileHover={{ y: -5, backgroundColor: "rgba(24, 24, 27, 0.8)" }}
                        className="flex flex-col items-center justify-center p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 group text-center"
                    >
                        <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 border border-white/5 mb-6">
                            <FaGithub className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-medium mb-2 group-hover:text-cyan-100 transition-colors">GitHub</h3>
                        <p className="text-zinc-400 font-light text-sm md:text-base">View my repositories</p>
                    </motion.a>

                    {/* 3. LinkedIn Card (Placeholder) */}
                    <motion.a 
                        href="https://linkedin.com" // Add your LinkedIn URL here
                        target="_blank" 
                        rel="noreferrer"
                        variants={itemVariants}
                        whileHover={{ y: -5, backgroundColor: "rgba(24, 24, 27, 0.8)" }}
                        className="flex flex-col items-center justify-center p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 group text-center"
                    >
                        <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 border border-white/5 mb-6">
                            <FaLinkedin className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-medium mb-2 group-hover:text-cyan-100 transition-colors">LinkedIn</h3>
                        <p className="text-zinc-400 font-light text-sm md:text-base">Let's connect professionally</p>
                    </motion.a>

                    {/* 4. Location Card */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ y: -5, backgroundColor: "rgba(24, 24, 27, 0.8)" }}
                        className="flex flex-col items-center justify-center p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-300 group text-center cursor-default"
                    >
                        <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 border border-white/5 mb-6">
                            <FaMapMarkerAlt className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-medium mb-2 group-hover:text-cyan-100 transition-colors">Location</h3>
                        <p className="text-zinc-400 font-light text-sm md:text-base">Delhi, India</p>
                    </motion.div>

                </motion.div>

                {/* --- Footer Note --- */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 text-center border-t border-white/5 pt-8"
                >
                    <p className="text-zinc-600 text-sm">
                        © {new Date().getFullYear()} Abhinav Pandey. Built with React & Tailwind CSS.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;