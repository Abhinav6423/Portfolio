import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaExclamationCircle, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Optimized Images
import avishaft from "../assets/avishaft 2.webp"
import preface from "../assets/Preface2.webp"
import urlShort from "../assets/url-short 2.webp"

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Avishaft — Business Website',
            problem: 'The client needed a modern, responsive website to showcase their services and establish an online presence. Their old site was outdated, slow, and not mobile-friendly.',
            solution: 'Designed and built a clean, responsive business website using React and Tailwind CSS. Optimized layout for mobile devices and improved page load performance for better user experience.',
            image: avishaft,
            technologies: ['React', 'Tailwind CSS', 'JavaScript'],
            githubLink: 'https://github.com/Abhinav6423/Avi-Shaft-',
        },
        {
            id: 2,
            title: 'Preface — Short Story Platform',
            problem: 'Writers and readers lacked a simple platform to publish and discover short stories in one place. Existing platforms were cluttered and not focused on short-form storytelling.',
            solution: 'Built a full-stack MERN application where users can publish, read, and manage short stories. Implemented authentication, user profiles, and a clean reading interface optimized for all devices.',
            image: preface,
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
            liveLink: 'https://preface.vercel.app/',
            githubLink: 'https://github.com/Abhinav6423/Story-Verse',
        },
        {
            id: 3,
            title: 'URL Shortener — Link Analytics Tool',
            problem: 'Users needed a simple way to shorten long URLs and track how their links were performing. Most free tools did not provide meaningful analytics or QR code support.',
            solution: 'Developed a URL shortener with analytics features such as total clicks, popular links, and per-link click tracking. Added automatic QR code generation for every shortened link.',
            image: urlShort,
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
            githubLink: 'https://github.com/yourusername/url-shortener',
        },
        {
            id: 4,
            title: 'OmniAnalytics Dashboard',
            problem: 'Marketing teams were drowning in CSV exports from Twitter, LinkedIn, and Instagram to create monthly reports.',
            solution: 'Created a unified dashboard that visualizes cross-platform growth metrics in one interactive graph, saving the team approx. 10 hours per week.',
            image: 'https://source.unsplash.com/random/900x600?data,charts',
            technologies: ['React', 'D3.js', 'Firebase Functions', 'OAuth 2.0'],
            liveLink: '#',
            githubLink: '#',
        },
    ];

    return (
        <section id="projects" className="w-full bg-neutral-950 py-24 px-4 md:px-10 text-white">
            <div className="max-w-7xl mx-auto">

                {/* --- Section Header (Animated) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20 space-y-4"
                >
                    <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-white">
                        My Projects
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light">
                        A curated selection of projects where I solved complex problems with clean code and intuitive design.
                    </p>
                    <div className="h-1 w-24 bg-zinc-800 mt-6"></div>
                </motion.div>

                {/* --- The Banger Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }} // Triggers when 50px of item is visible
                            transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered delay (0s, 0.2s, 0.4s...)
                            whileHover={{ y: -10 }} // Physical lift effect on hover
                            className="group flex flex-col bg-zinc-900/30 border border-white/5 rounded-[2rem] overflow-hidden hover:bg-zinc-900/50 hover:border-white/10 transition-colors duration-500 shadow-2xl"
                        >

                            {/* 1. Image Area (Optimized) */}
                            <div className="relative w-full aspect-video overflow-hidden bg-zinc-950">
                                <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <div className="relative w-full h-full bg-zinc-800">
                                    <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        width="800"
                                        height="450"
                                        className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Floating Tech Stack Badge */}
                                    <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* 2. Content Area */}
                            <div className="flex flex-col flex-grow p-8 md:p-10 space-y-8">

                                {/* Title & Icons */}
                                <div className="flex justify-between items-start">
                                    <h3 className="text-3xl font-serif text-white group-hover:text-cyan-100 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-2 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-all"
                                            >
                                                <FaGithub className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-2 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-all"
                                            >
                                                <FaExternalLinkAlt className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Problem Block */}
                                <div className="relative pl-6 border-l-2 border-red-500/50">
                                    <div className="absolute -left-[9px] top-0 bg-neutral-950 text-red-400">
                                        <FaExclamationCircle />
                                    </div>
                                    <h4 className="text-sm font-bold text-red-400 uppercase tracking-widest mb-2">The Problem</h4>
                                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                        {project.problem}
                                    </p>
                                </div>

                                {/* Solution Block */}
                                <div className="relative pl-6 border-l-2 border-emerald-500/50">
                                    <div className="absolute -left-[9px] top-0 bg-neutral-950 text-emerald-400">
                                        <FaLightbulb />
                                    </div>
                                    <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2">The Solution</h4>
                                    <p className="text-zinc-300 leading-relaxed text-sm md:text-base font-light">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;