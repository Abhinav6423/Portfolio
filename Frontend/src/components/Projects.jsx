import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaLayerGroup, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Images (Ensure these paths are correct in your project)
import avishaft from "../assets/avishaft 2.webp"
import preface from "../assets/Preface2.webp"
import urlShort from "../assets/url-short 2.webp"

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Avishaft',
            subtitle: 'Learning Operation System',
            problem: 'Students fail to retain information due to passive note-taking and lack of feedback loops.',
            solution: 'A full-stack platform combining active recall, habit tracking, and AI-feedback to boost retention.',
            image: avishaft,
            technologies: ['React', 'Node.js', 'MongoDB', 'AI Integration'],
            githubLink: 'https://github.com/Abhinav6423/Avi-Shaft-',
        },
        {
            id: 2,
            title: 'Preface',
            subtitle: 'Short Fiction Publishing Platform',
            problem: 'Writers lack a distraction-free space to build audiences for short-form narrative fiction.',
            solution: 'A dedicated ecosystem for storytelling with "Goodreads-style" collections and writer profiles.',
            image: preface,
            technologies: ['React', 'Tailwind', 'Express', 'JWT Auth'],
            liveLink: 'https://preface.vercel.app/',
            githubLink: 'https://github.com/Abhinav6423/Story-Verse',
        },
        {
            id: 3,
            title: 'URL Shortener',
            subtitle: 'Link Analytics & Management',
            problem: 'Basic link shorteners lack deep analytics and QR code generation for free users.',
            solution: 'An analytics-first tool providing click heatmaps, location tracking, and instant QR codes.',
            image: urlShort,
            technologies: ['Node.js', 'React', 'Recharts', 'MongoDB'],
            githubLink: 'https://github.com/Abhinav6423/url-shortener',
        },
        {
            id: 4,
            title: 'OmniAnalytics',
            subtitle: 'Marketing Dashboard',
            problem: 'Marketing teams waste 10+ hours/week manually merging CSVs for reports.',
            solution: 'Unified dashboard visualizing cross-platform growth metrics in real-time.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop', // High quality placeholder
            technologies: ['D3.js', 'Firebase', 'React', 'OAuth 2.0'],
            liveLink: '#',
            githubLink: '#',
        },
    ];

    // --- ANIMATION VARIANTS ---
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="projects" className="relative w-full bg-[#050505] py-32 px-6 overflow-hidden">

            {/* --- BACKGROUND ELEMENTS --- */}
            {/* Center/Bottom Glow - Cyan/Blue mix to distinguish from other sections */}
            <div className="absolute bottom-0 left-1/2 w-[800px] h-[600px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/4"></div>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- HEADER --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp}
                    className="mb-24"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-px bg-zinc-700"></span>
                        <span className="text-zinc-400 text-xs uppercase tracking-[0.2em]">Selected Work</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        Digital Products. <br />
                        <span className="text-zinc-500 italic">Crafted with Precision.</span>
                    </h2>
                </motion.div>

                {/* --- PROJECTS GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
                            transition={{ delay: index * 0.1 }}
                            variants={fadeInUp}
                            className="group flex flex-col gap-6"
                        >
                            {/* 1. Image Card */}
                            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-white/5 bg-zinc-900/50">

                                {/* Overlay Gradient (Darkens image slightly until hover) */}
                                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                                />

                                {/* --- FIX APPLIED HERE --- 
                                    1. opacity-100 translate-y-0: Visible by default (Mobile)
                                    2. md:opacity-0 md:translate-y-4: Hidden by default on Desktop
                                    3. md:group-hover:... : Only animate on hover for Desktop
                                */}
                                <div className="absolute bottom-4 right-4 z-20 flex gap-2 transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                                    {project.githubLink && (
                                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors shadow-lg">
                                            <FaGithub className="w-4 h-4" />
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors shadow-lg">
                                            <FaExternalLinkAlt className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* 2. Project Details */}
                            <div className="space-y-4 px-2">
                                <div className="flex justify-between items-baseline">
                                    <div>
                                        <h3 className="text-3xl font-serif text-zinc-100 group-hover:text-white transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-cyan-500 font-mono mt-1">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                    <span className="text-xs font-mono text-zinc-600">0{project.id}</span>
                                </div>

                                {/* Problem / Solution Mini-Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 border-t border-zinc-800/50 border-b">
                                    <div className="space-y-2">
                                        <h4 className="text-xs uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                            <FaLayerGroup className="text-zinc-600" /> Challenge
                                        </h4>
                                        <p className="text-sm text-zinc-400 leading-relaxed font-light">
                                            {project.problem}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xs uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                            <FaCode className="text-zinc-600" /> Solution
                                        </h4>
                                        <p className="text-sm text-zinc-400 leading-relaxed font-light">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-wider rounded-sm">
                                            {tech}
                                        </span>
                                    ))}
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