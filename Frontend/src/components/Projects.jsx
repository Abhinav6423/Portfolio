import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaLayerGroup, FaCode, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Images (Ensure these paths are correct in your project)
import avishaft from "../assets/avishaft 2.webp"
import preface from "../assets/preface.png"
import urlShort from "../assets/url-short 2.webp"
import pressFlix from "../assets/pressflix cc2.jpg"
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Preface",
            subtitle: "Distraction-Free Reading & Short Fiction Publishing Platform",
            problem:
                "Most modern reading platforms are optimized for engagement loops and feeds, which makes it difficult for readers to focus on immersive reading and for writers to build audiences for short-form storytelling.",
            solution:
                "Preface is a minimal, distraction-free storytelling ecosystem where readers discover stories through curated collections while writers publish and manage narratives through structured profiles and libraries. The platform delivers fast page loads (<300ms), structured story collections, and clean reading interfaces to encourage focused reading.",
            image: preface,
            technologies: [
                "React",
                "TailwindCSS",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT Authentication"
            ],
            highlights: [
                "Distraction-free reader interface optimized for long-form focus",
                "Writer profiles and story collections similar to Goodreads libraries",
                "Optimized content loading for sub-300ms navigation",
                "Secure authentication and user session management"
            ],
            liveLink: "https://preface.vercel.app/",
            githubLink: "https://github.com/Abhinav6423/Story-Verse"
        },

        {
            id: 2,
            title: "PressFlix",
            subtitle: "Instant Landing Page & Startup Pitch Generator",
            problem:
                "Early-stage founders often need landing pages to validate ideas quickly, but traditional website builders are slow and lack built-in analytics for measuring early traction.",
            solution:
                "PressFlix generates ready-to-share product landing pages and startup pitch pages in under 30 seconds, complete with built-in analytics to track page views, engagement, and waitlist conversions for early-stage validation.",
            image: pressFlix,
            technologies: [
                "React",
                "Node.js",
                "MongoDB",
                "TanStack Query",
                "Framer Motion",
                "JWT Authentication"
            ],
            highlights: [
                "Landing page generation in ~30 seconds",
                "Integrated analytics for page views and CTA tracking",
                "Shareable public pitch links for early user validation",
                "Dynamic template rendering using REST APIs"
            ],
            liveLink: "https://press-flix.vercel.app/",
            githubLink: "https://github.com/Abhinav6423/Press-Flix"
        },

        {
            id: 3,
            title: "Avishaft",
            subtitle: "Learning Productivity & Knowledge Retention System",
            problem:
                "Students often forget over 60% of learned material due to passive note-taking methods and lack of structured reinforcement systems.",
            solution:
                "Avishaft is a full-stack learning productivity platform that integrates active recall tools, habit tracking systems, and AI-assisted feedback to help learners reinforce knowledge and build consistent study routines.",
            image: avishaft,
            technologies: [
                "React",
                "Node.js",
                "MongoDB",
                "AI Integration",
                "REST APIs"
            ],
            highlights: [
                "Active recall based learning workflow",
                "Habit tracking system for consistent study cycles",
                "AI-assisted feedback for knowledge reinforcement",
                "Scalable backend architecture with modular REST APIs"
            ],
            githubLink: "https://github.com/Abhinav6423/Avi-Shaft-"
        },

        {
            id: 4,
            title: "URL Shortener",
            subtitle: "Link Management & Analytics Platform",
            problem:
                "Most free URL shorteners provide basic link redirection but lack meaningful analytics insights such as geographic traffic, click sources, and visual engagement data.",
            solution:
                "A full-stack URL shortening and analytics platform that generates short links, tracks click activity, and visualizes traffic patterns through interactive dashboards and QR code sharing.",
            image: urlShort,
            technologies: [
                "React",
                "Node.js",
                "MongoDB",
                "Recharts",
                "REST APIs"
            ],
            highlights: [
                "Real-time click analytics dashboard",
                "Interactive traffic visualization using charts",
                "QR code generation for instant sharing",
                "Scalable link redirection and tracking system"
            ],
            githubLink: "https://github.com/Abhinav6423/url-shortener"
        }
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
        <section
            id="projects"
            className="relative w-full bg-[#050505] py-32 px-6 overflow-hidden"
        >
            {/* --- BACKGROUND ELEMENTS --- */}
            <div className="absolute bottom-0 left-1/2 w-[800px] h-[600px] bg-cyan-900/10 blur-[70px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/4"></div>

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
                        <span className="text-zinc-400 text-xs uppercase tracking-[0.2em]">
                            Selected Work
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        Digital Products. <br />
                        <span className="text-zinc-500 italic">
                            Crafted with Precision.
                        </span>
                    </h2>
                </motion.div>

                {/* --- PROJECTS GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: index * 0.1 }}
                            variants={fadeInUp}
                            className="group flex flex-col h-full bg-zinc-900/20 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors duration-500"
                        >
                            {/* 1. Image Card - NO CROPPING */}
                            <div className="relative w-full bg-zinc-950/80 border-b border-white/5 overflow-hidden">
                                <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-transparent transition-all duration-700 z-10 pointer-events-none"></div>

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-auto max-h-[450px] object-contain object-top transition-transform duration-700 group-hover:scale-[1.03]"
                                />

                                {/* Floating Action Buttons */}
                                <div className="absolute bottom-4 right-4 z-20 flex gap-3 transition-all duration-500 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-3 bg-white/90 backdrop-blur-md text-black rounded-xl hover:bg-white hover:scale-105 transition-all shadow-xl"
                                            aria-label="View Source on GitHub"
                                        >
                                            <FaGithub className="w-4 h-4" />
                                        </a>
                                    )}

                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-400 hover:scale-105 transition-all shadow-xl"
                                            aria-label="View Live Project"
                                        >
                                            <FaExternalLinkAlt className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* 2. Project Details - Premium Layout */}
                            <div className="flex flex-col flex-grow p-8 space-y-8">

                                {/* Header Area */}
                                <div className="flex justify-between items-start gap-4">
                                    <div className="space-y-2">
                                        <h3 className="text-3xl md:text-4xl font-serif text-white tracking-wide">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm font-mono text-cyan-400">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                    <span className="text-sm font-mono text-zinc-600 mt-2 font-bold">
                                        0{project.id}
                                    </span>
                                </div>

                                {/* Content Area */}
                                <div className="space-y-8">

                                    {/* Context */}
                                    <div className="space-y-6">
                                        <div className="flex flex-col items-start">
                                            <h4 className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-800/60 border border-zinc-700 text-xs font-bold uppercase tracking-widest text-zinc-200 mb-3 shadow-sm">
                                                <FaLayerGroup className="text-cyan-400" /> The Challenge
                                            </h4>
                                            <p className="text-sm leading-relaxed text-zinc-400 font-light mt-1">
                                                {project.problem}
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-start">
                                            <h4 className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-800/60 border border-zinc-700 text-xs font-bold uppercase tracking-widest text-zinc-200 mb-3 shadow-sm">
                                                <FaCode className="text-cyan-400" /> The Solution
                                            </h4>
                                            <p className="text-sm leading-relaxed text-zinc-300 font-light mt-1">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Subtle Divider */}
                                    <div className="w-full h-px bg-gradient-to-r from-zinc-800/60 via-zinc-800/20 to-transparent" />

                                    {/* Highlights - 2 Column Grid */}
                                    <div className="flex flex-col items-start">
                                        <h4 className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-800/60 border border-zinc-700 text-xs font-bold uppercase tracking-widest text-zinc-200 mb-4 shadow-sm">
                                            Key Features
                                        </h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 w-full">
                                            {project.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 font-light">
                                                    <span className="text-cyan-400 text-[10px] mt-1.5">✦</span>
                                                    <span className="leading-relaxed">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Bottom Section: Tech & Case Study Button */}
                                <div className="pt-8 mt-auto space-y-8">

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3.5 py-1.5 bg-[#0a0a0a] border border-zinc-800/80 text-cyan-50/70 text-[10px] font-mono uppercase tracking-widest rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read Case Study Button */}
                                    <Link
                                        to={`/caseStudy/${project.id}`}
                                        className="group/btn flex items-center justify-center w-full py-4 px-6 bg-zinc-900/50 hover:bg-cyan-500/10 border border-zinc-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300"
                                    >
                                        <span className="text-sm font-mono uppercase tracking-widest text-zinc-300 group-hover/btn:text-cyan-400 transition-colors">
                                            Read the full case study
                                        </span>
                                        <FaArrowRight className="w-3 h-3 ml-3 text-zinc-500 group-hover/btn:text-cyan-400 group-hover/btn:translate-x-1 transition-all" />
                                    </Link>

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