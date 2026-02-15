import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'UI & Frontend Development',
            description:
                'Modern, responsive user interfaces built with React and Tailwind. Designed for clarity, performance, and great user experience.',
            icon: <FaReact className="w-7 h-7 text-cyan-400" />,
        },
        {
            id: 2,
            title: 'Backend API Development',
            description:
                'Secure REST APIs using Node.js and Express. Authentication, business logic, and scalable backend architecture.',
            icon: <FaNodeJs className="w-7 h-7 text-green-500" />,
        },
        {
            id: 3,
            title: 'Database Design',
            description:
                'MongoDB schema design, data modeling, and performance optimization using Mongoose.',
            icon: <FaDatabase className="w-7 h-7 text-emerald-400" />,
        },
        {
            id: 4,
            title: 'MVP & Product Builds',
            description:
                'End-to-end MVP development — from idea to launch. Clean code, fast delivery, and scalable foundations.',
            icon: <FaGitAlt className="w-7 h-7 text-orange-400" />,
        },
    ];

    // --- ANIMATION VARIANTS ---
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
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
                staggerChildren: 0.15, // Delay between each card appearing
            }
        }
    };

    return (
        <section
            id="services"
            className="relative w-full bg-[#050505] py-32 px-6 overflow-hidden"
        >
            {/* --- BACKGROUND ELEMENTS --- */}

            {/* Subtle Left-Side Glow (Creates a zigzag flow from the About section) */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>

            {/* Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* --- HEADER SECTION --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp}
                    className="mb-20"
                >
                    {/* Tag */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-px bg-zinc-700"></span>
                        <span className="text-zinc-400 text-xs uppercase tracking-[0.2em]">Capabilities</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        Engineering Solutions. <br />
                        <span className="text-zinc-500 italic">Built for the Real World.</span>
                    </h2>
                </motion.div>


                {/* --- SERVICES GRID --- */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Waits until 20% of grid is visible
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className="group relative bg-zinc-900/30 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Top Row: Icon & Number */}
                                <div className="flex justify-between items-start mb-8">
                                    <motion.div
                                        className="w-14 h-14 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:border-zinc-700 transition-colors shadow-sm"
                                        whileHover={{ rotate: 10, scale: 1.05 }}
                                    >
                                        {service.icon}
                                    </motion.div>

                                    <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                        0{service.id}
                                    </span>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-serif tracking-wide text-zinc-100 mb-4 group-hover:text-white transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Services;