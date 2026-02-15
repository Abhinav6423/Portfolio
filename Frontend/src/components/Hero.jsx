import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
        },
    };

    return (
        <div className="relative w-full h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden selection:bg-purple-500/30">

            {/* --- SOPHISTICATED BACKGROUND --- */}

            {/* 1. Static Top Glow (The "Ceiling Light" effect) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black/0 to-transparent blur-3xl z-[0]"></div>

            {/* 2. Primary Moving Orb (Indigo/Blue - Deep & Professional) */}
            <motion.div
                animate={{
                    x: [0, 30, -20, 0],
                    y: [0, -40, 20, 0],
                    scale: [1, 1.1, 0.9, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-[0]"
            />

            {/* 3. Secondary Moving Orb (Purple/Rose - Adds Warmth & Class) */}
            <motion.div
                animate={{
                    x: [0, -30, 20, 0],
                    y: [0, 40, -20, 0],
                    scale: [1, 1.2, 0.9, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-purple-600/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-[0]"
            />

            {/* 4. Refined Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-[1] pointer-events-none"></div>

            {/* 5. Vignette (Darkens edges to focus on content) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_100%)] z-[2] pointer-events-none"></div>

            {/* --- MAIN CONTENT --- */}
            <motion.div
                className="relative z-10 text-center px-6 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Decorative Line */}
                <motion.div
                    variants={itemVariants}
                    className="w-px h-16 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent mx-auto mb-8"
                ></motion.div>

                {/* Tagline */}
                <motion.div variants={itemVariants} className="mb-6 flex justify-center">
                    <span className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md text-zinc-400 text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-lg shadow-black/20">
                        Engineering Scalable Solutions
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-white text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-4 drop-shadow-2xl"
                >
                    Abhinav Pandey
                </motion.h1>

                {/* Headline */}
                <motion.h2
                    variants={itemVariants}
                    className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500 text-2xl md:text-4xl lg:text-5xl font-light tracking-wide mb-8"
                >
                    Architecting the Future of Web.
                </motion.h2>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-zinc-400 max-w-2xl mx-auto mb-12 text-sm md:text-lg font-light leading-relaxed"
                >
                    I build production-ready web applications with the MERN stack.
                    Merging clean architecture with high-performance design to create products that scale.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center items-center">

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-8 py-3 bg-white text-black font-medium text-sm uppercase tracking-widest overflow-hidden rounded-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                        <span className="relative z-10">Build With Me</span>
                        <div className="absolute inset-0 bg-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 border border-zinc-800 text-zinc-300 font-medium text-sm uppercase tracking-widest hover:border-zinc-500 hover:text-white hover:bg-white/5 transition-colors rounded-sm backdrop-blur-sm"
                    >
                        View Portfolio
                    </motion.button>

                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-zinc-800 to-transparent"></div>
            </motion.div>

        </div>
    );
};

export default Hero;