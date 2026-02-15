import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/Abhinav6423" },
        { icon: <FaLinkedin />, href: "https://linkedin.com" },
        { icon: <FaTwitter />, href: "https://twitter.com" },
    ];

    return (
        <footer className="relative w-full bg-[#050505] pt-20 pb-10 px-6 overflow-hidden border-t border-white/5">

            {/* --- BACKGROUND ELEMENTS --- */}
            {/* Subtle top glow to separate from contact section */}
            <div className="absolute top-0 left-1/2 w-[600px] h-[200px] bg-zinc-900/40 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

            {/* Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- MAIN CONTENT --- */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

                    {/* Left Column: Brand Identity */}
                    <div className="md:w-1/2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-white text-3xl md:text-4xl font-serif tracking-tight"
                        >
                            Abhinav
                        </motion.div>

                        <p className="text-zinc-500 max-w-sm text-sm leading-relaxed font-light">
                            Crafting scalable digital products with clean code and human-centric design.
                            Focused on the MERN stack and modern web architecture.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>


                    {/* Right Column: Navigation & Sitemaps */}
                    <div className="md:w-1/2 flex flex-col md:flex-row justify-between md:justify-end gap-12 md:gap-24">

                        {/* Sitemap */}
                        <div className="space-y-4">
                            <h4 className="text-white text-sm font-medium uppercase tracking-widest">Sitemap</h4>
                            <nav className="flex flex-col gap-3 text-sm text-zinc-500 font-light">
                                <a href="#" className="hover:text-zinc-300 transition-colors">Home</a>
                                <a href="#about" className="hover:text-zinc-300 transition-colors">About</a>
                                <a href="#services" className="hover:text-zinc-300 transition-colors">Services</a>
                                <a href="#projects" className="hover:text-zinc-300 transition-colors">Projects</a>
                            </nav>
                        </div>

                        {/* Legal / Extra (Optional) */}
                        <div className="space-y-4">
                            <h4 className="text-white text-sm font-medium uppercase tracking-widest">Legal</h4>
                            <nav className="flex flex-col gap-3 text-sm text-zinc-500 font-light">
                                <span className="cursor-not-allowed opacity-50">Privacy Policy</span>
                                <span className="cursor-not-allowed opacity-50">Terms of Service</span>
                            </nav>
                        </div>

                    </div>

                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900">

                    {/* Copyright */}
                    <p className="text-zinc-600 text-xs tracking-wider mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Abhinav Pandey. All rights reserved.
                    </p>

                    {/* Tech Stack Badge & Back to Top */}
                    <div className="flex items-center gap-6">
                        <span className="text-zinc-700 text-xs font-mono hidden md:block">
                            Built with React & Tailwind
                        </span>

                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-widest hover:text-white transition-colors"
                        >
                            Back to Top
                            <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;