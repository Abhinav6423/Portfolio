import React from 'react';
import { motion } from 'framer-motion';


const Hero = () => {
    // Animation Variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each element
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }, // Cubic bezier for smooth "luxury" feel
        },
    };

    return (
        <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">

            {/* --- BACKGROUND EFFECTS START --- */}

            {/* 1. Deep Atmospheric Glow */}
            <div className="absolute top-0 z-[0] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            {/* 2. Moving Blob (Enhanced with Framer Motion) */}
            {/* Instead of simple CSS pulse, we move it around slowly like floating smoke */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"
            />

            {/* 3. Grid Texture */}
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-[1]"></div>

            {/* --- BACKGROUND EFFECTS END --- */}


            {/* --- MAIN CONTENT --- */}
            <motion.div
                className="relative z-10 text-center px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                {/* Decorative Line */}
                <motion.div variants={itemVariants} className="w-px h-20 bg-gradient-to-b from-transparent via-zinc-500 to-transparent mx-auto mb-6 opacity-50"></motion.div>

                {/* Subtitle */}
                <motion.h2 variants={itemVariants} className="text-zinc-400 tracking-[0.3em] text-xs md:text-sm uppercase mb-6 font-light">
                    Turning Ideas Into Real Products

                </motion.h2>

                {/* Name */}
                <motion.h1 variants={itemVariants} className="text-white text-5xl md:text-8xl font-serif tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    Hi, I’m Abhinav Pandey

                </motion.h1>

                {/* Title with Gradient */}
                <motion.h1 variants={itemVariants} className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-500 text-5xl md:text-8xl font-serif italic mb-8 pb-2">
                    Full-Stack Developer building fast, scalable digital products.
                    .
                </motion.h1>

                {/* Description */}
                <motion.p variants={itemVariants} className="text-zinc-400 max-w-lg mx-auto mb-10 text-lg font-light leading-relaxed">
                    I design and develop high-performance web applications with clean architecture, strong backend systems, and modern user experiences.
                    Focused on real-world problem solving, speed, and production-grade execution.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white text-black font-medium text-sm uppercase tracking-widest hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 rounded-sm"
                    >
                        Work With Me

                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border border-zinc-700 text-white font-medium text-sm uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300 rounded-sm"
                    >
                        View Real Projects

                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator (New Addition) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 z-10"
            >
                <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                        className="w-1 h-2 bg-zinc-300 rounded-full"
                    />
                </div>
            </motion.div>

        </div>
    );
};

export default Hero;