import React from 'react';
// Importing icons related to development
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
    // Data derived from your skills list
    const services = [
        {
            id: 1,
            title: 'UI & Frontend Development',
            description:
                'Modern, responsive user interfaces built with React and Tailwind. Designed for clarity, performance, and great user experience.',
            icon: <FaReact className="w-7 h-7" />,
        },
        {
            id: 2,
            title: 'Backend API Development',
            description:
                'Secure REST APIs using Node.js and Express. Authentication, business logic, and scalable backend architecture.',
            icon: <FaNodeJs className="w-7 h-7" />,
        },
        {
            id: 3,
            title: 'Database Design',
            description:
                'MongoDB schema design, data modeling, and performance optimization using Mongoose.',
            icon: <FaDatabase className="w-7 h-7" />,
        },
        {
            id: 4,
            title: 'MVP & Full-Stack Product Builds',
            description:
                'End-to-end MVP development — from idea to launch. Clean code, fast delivery, and scalable foundations.',
            icon: <FaGitAlt className="w-7 h-7" />,
        },
    ];



    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between each card appearing
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section id="services" className="w-full bg-neutral-950 py-20 px-4 md:px-10 text-white">
            <div className="max-w-6xl mx-auto">

                {/* --- Section Title (Slide in) --- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 border-b border-zinc-800 pb-4"
                >
                    <h2 className="text-4xl md:text-5xl font-serif tracking-wide">
                        Services
                    </h2>
                    <p className="text-zinc-500 mt-3 text-sm tracking-widest uppercase">
                        What I Can Build For You
                    </p>
                </motion.div>




                {/* --- Services Grid (Staggered) --- */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -10, // Lifts up
                                transition: { duration: 0.3 }
                            }}
                            className="group bg-zinc-900/50 p-8 rounded-[30px] border border-white/5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors duration-300 shadow-sm hover:shadow-[0_10px_30px_-15px_rgba(255,255,255,0.1)]"
                        >

                            {/* Icon Container - Spins slightly on hover */}
                            <motion.div
                                className="w-14 h-14 bg-zinc-950 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors mb-6"
                                whileHover={{ rotate: 15, scale: 1.1 }}
                            >
                                {service.icon}
                            </motion.div>

                            {/* Service Title */}
                            <h3 className="text-2xl font-serif tracking-wide mb-4 group-hover:text-cyan-200 transition-colors">
                                {service.title}
                            </h3>

                            {/* Service Description */}
                            <p className="text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Services;