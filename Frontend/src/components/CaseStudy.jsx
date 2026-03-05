import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGithub,
    FaExternalLinkAlt,
    FaArrowLeft,
    FaServer,
    FaCodeBranch,
    FaChartLine,
    FaBug
} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { caseStudies } from '../utils/ProjectsCaseStudy';
import { useEffect , useState } from 'react';

const CaseStudy = () => {

    const { projectId } = useParams();
    const study = caseStudies.find(project => project.id === Number(projectId));

    useEffect(() => {
        window.scrollTo(0, 0);
        
    }, []);

    // get correct project from array


    // prevent crash if invalid url
    if (!study) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
                Project not found
            </div>
        );
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-cyan-500/30 pb-32">

            <div className="fixed top-0 left-1/2 w-[1000px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 pt-24">

                <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-cyan-400 transition-colors mb-16 group"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
                </motion.a>

                <motion.header
                    initial="hidden" animate="visible" variants={fadeUp}
                    className="mb-24"
                >
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight">
                        {study.title}
                    </h1>

                    <p className="text-xl md:text-2xl font-light text-zinc-400 mb-10 max-w-2xl leading-relaxed">
                        {study.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        {study.liveLink && (
                            <a href={study.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 hover:scale-105 transition-all shadow-lg shadow-cyan-500/20">
                                Live Demo <FaExternalLinkAlt className="w-4 h-4" />
                            </a>
                        )}

                        {study.githubLink && (
                            <a href={study.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-xl hover:bg-zinc-800 hover:scale-105 transition-all">
                                Source Code <FaGithub className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </motion.header>

                <div className="w-full h-px bg-gradient-to-r from-zinc-800/80 via-zinc-800/20 to-transparent mb-24" />

                <article className="space-y-32">

                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="grid md:grid-cols-2 gap-16">
                        <div>
                            <span className="inline-block px-3 py-1 mb-6 text-[10px] font-mono uppercase tracking-widest text-red-400 bg-red-400/10 border border-red-400/20 rounded-full">
                                The Problem
                            </span>
                            <p className="text-zinc-400 leading-relaxed text-lg font-light">
                                {study.problem}
                            </p>
                        </div>

                        <div>
                            <span className="inline-block px-3 py-1 mb-6 text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
                                The Solution
                            </span>
                            <p className="text-zinc-300 leading-relaxed text-lg font-light">
                                {study.solution}
                            </p>
                        </div>
                    </motion.section>

                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                        <h2 className="text-3xl font-serif text-white mb-10">Key Features</h2>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {study.features.map((feature, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                                    <h3 className="text-lg font-medium text-zinc-200 mb-2 flex items-center gap-2">
                                        <span className="text-cyan-500 text-sm">✦</span> {feature.title}
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed font-light">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                        <div className="flex items-center gap-4 mb-8">
                            <FaServer className="text-cyan-500 text-2xl" />
                            <h2 className="text-3xl font-serif text-white">System Architecture</h2>
                        </div>

                        <p className="text-zinc-400 leading-relaxed text-lg font-light mb-8">
                            {study.architecture}
                        </p>

                        <div className="w-full aspect-video rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                            <span className="relative z-10 text-zinc-600 font-mono text-sm tracking-widest uppercase flex flex-col items-center gap-3 group-hover:text-cyan-500/50 transition-colors">
                                <FaCodeBranch className="text-3xl" />
                                Architecture Diagram Placeholder
                            </span>
                        </div>
                    </motion.section>

                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                        <h2 className="text-3xl font-serif text-white mb-10">Engineering Decisions</h2>

                        <div className="space-y-6">
                            {study.decisions.map((item, i) => (
                                <div key={i} className="flex flex-col md:flex-row md:items-start gap-6 p-8 rounded-2xl bg-[#0a0a0a] border border-zinc-800/80">
                                    <div className="md:w-1/3">
                                        <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">{item.topic}</h4>
                                        <h3 className="text-xl text-cyan-400 font-serif">{item.decision}</h3>
                                    </div>

                                    <div className="md:w-2/3 border-l-2 border-zinc-800 pl-6">
                                        <p className="text-sm text-zinc-400 leading-relaxed font-light">{item.reason}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                        <div className="flex items-center gap-4 mb-8">
                            <FaBug className="text-red-400 text-2xl" />
                            <h2 className="text-3xl font-serif text-white">Challenges & Solutions</h2>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-950 border border-zinc-800">
                            <p className="text-zinc-300 leading-relaxed text-lg font-light">
                                {study.challenges}
                            </p>
                        </div>
                    </motion.section>

                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                        <div className="flex items-center gap-4 mb-10">
                            <FaChartLine className="text-cyan-500 text-2xl" />
                            <h2 className="text-3xl font-serif text-white">Results & Impact</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {study.results.map((res, i) => (
                                <div key={i} className="flex flex-col items-center justify-center py-12 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
                                    <span className="text-5xl font-serif text-white mb-3">{res.metric}</span>
                                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-500">{res.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                </article>
            </div>
        </div>
    );
};

export default CaseStudy;