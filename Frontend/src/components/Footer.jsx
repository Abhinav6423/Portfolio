import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-neutral-950 pt-20 pb-10 px-4 md:px-10 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto">

                {/* --- Main Footer Content --- */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

                    {/* Left Column: Brand & Navigation */}
                    <div className="md:w-1/2 space-y-8">
                        {/* Logo */}
                        <div className="text-white text-4xl font-['Great_Vibes']">
                            Abhinav
                        </div>

                        {/* Tagline */}
                        <p className="text-zinc-400 max-w-sm leading-relaxed font-light">
                            Transforming bold concepts into intuitive, high-impact digital experiences that captivate users, amplify brands, and convert visitors into growth.
                        </p>

                        {/* Navigation Links */}
                        <nav className="flex flex-wrap gap-6 md:gap-8 text-sm font-medium tracking-wide uppercase text-zinc-300">
                            <a href="#" className="hover:text-white transition-colors">Home</a>
                            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                            <a href="#services" className="hover:text-white transition-colors">Services</a>
                            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                            <a href="#about" className="hover:text-white transition-colors">About</a>

                        </nav>
                    </div>


                    {/* Right Column: CTA (Replaces the photo area) */}
                    {/* Aligned to the right/end to balance the layout */}
                    <div className="md:w-1/2 flex flex-col items-start md:items-end justify-center space-y-6">

                        {/* Big Headline */}
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight text-left md:text-right">
                            Let’s build something <br />
                            <span className="italic text-zinc-500">real and impactful.</span>
                        </h2>


                        {/* CTA Button */}
                        <button className="px-8 py-3 bg-white text-black font-medium text-sm uppercase tracking-widest rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
                            Build With Me

                        </button>
                    </div>

                </div>

                {/* --- Bottom Bar --- */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-xs text-zinc-600 font-light tracking-wider">
                    <p>
                        &copy; {new Date().getFullYear()} Abhinav Pandey. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Optional Social Links could go here if needed later */}
                        <span>Designed & Built with React & Tailwind CSS</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;