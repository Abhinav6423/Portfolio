import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Changed: Added fixed position, glassmorphism (backdrop-blur), and a subtle bottom border
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm  transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-10">
        <div className="flex items-center justify-between">
          
          {/* Logo - kept the font, added a hover scale effect */}
          <div className="text-white text-3xl md:text-4xl font-['Great_Vibes'] cursor-pointer hover:scale-105 transition-transform duration-300">
            Abhinav
          </div>

          {/* Desktop Links - Cleaned up to look less blocky */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="group relative text-white font-medium uppercase text-sm tracking-wider py-2">
              Projects
              {/* animated underline effect */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <button className="px-6 py-2 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown - Integrated smoothly */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <div className="flex flex-col p-6 space-y-4 text-center">
            <a href="#projects" className="text-zinc-300 hover:text-white font-medium uppercase tracking-widest text-sm transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-black bg-white font-bold uppercase tracking-widest text-sm py-3 px-6 hover:bg-zinc-200 transition-colors">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;