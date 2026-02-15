import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi'; // Using React Icons for cleaner SVGs

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
  ];

  // Mobile Menu Animation Variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const linkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
          ? 'bg-[#050505]/80 backdrop-blur-md border-white/5 py-4'
          : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between">

          {/* --- LOGO --- */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-3xl font-['Great_Vibes'] cursor-pointer z-50 relative"
          >
            Abhinav
          </motion.a>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-zinc-400 hover:text-white font-light uppercase text-xs tracking-[0.2em] transition-colors duration-300"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-black font-medium text-xs uppercase tracking-widest rounded-sm hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <motion.div
              variants={linkContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col p-8 space-y-6 items-center"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  variants={linkItemVariants}
                  href={link.href}
                  className="text-zinc-300 hover:text-white text-lg font-light uppercase tracking-widest transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div variants={linkItemVariants} className="pt-4 w-full">
                <a
                  href="#contact"
                  className="block w-full text-center py-4 bg-white text-black font-medium uppercase tracking-widest text-sm rounded-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start a Project
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;