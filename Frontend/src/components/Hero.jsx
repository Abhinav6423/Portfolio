import React from 'react';

const Hero = () => {
    return (
        <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">

            {/* --- BACKGROUND EFFECTS START --- */}

            {/* 1. Deep Atmospheric Glow (The Main Spotlight) 
          Ye upar se ek purple/indigo glow phekti hai jo dark theme me depth lati hai */}
            <div className="absolute top-0 z-[0] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            {/* 2. Moving Blob (Dynamic Glow) 
          Ek extra glow jo peeche subtle move karta hai */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

            {/* 3. Grid Texture with Fade Mask 
          Grid ab edges par fade ho jayega (mask-image ka use karke) */}
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-[1]"></div>

            {/* --- BACKGROUND EFFECTS END --- */}


            {/* Main Content (Z-Index badha diya taaki background ke upar rahe) */}
            <div className="relative z-10 text-center px-4  ">

                {/* Subtle decorative line */}
                <div className="w-px h-20 bg-gradient-to-b from-transparent via-zinc-500 to-transparent mx-auto mb-6 opacity-50"></div>

                <h2 className="text-zinc-400 tracking-[0.3em] text-xs md:text-sm uppercase mb-6 font-light">
                    Full Stack Engineer
                </h2>

                <h1 className="text-white text-5xl md:text-8xl font-serif tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    I'm Abhinav Pandey,
                </h1>

                <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-500 text-5xl md:text-8xl font-serif italic mb-8">
                    WEB DEVELOPER.
                </h1>

                <p className="text-zinc-400 max-w-lg mx-auto mb-10 text-lg font-light leading-relaxed">
                    Crafting scalable MERN stack applications with clean code and minimal design.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <button className="px-8 py-3 bg-white text-black font-medium text-sm uppercase tracking-widest hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 rounded-sm">
                        Get in touch
                    </button>

                    <button className="px-8 py-3 border border-zinc-700 text-white font-medium text-sm uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300 rounded-sm">
                        See my projects
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Hero;