import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
const Layout = () => {
  return (
    // 1. w-full & min-h-screen: Ensures the layout covers the whole viewport
    // 2. bg-neutral-950: The main dark background color for the whole app
    // 3. selection:... : Adds a cool cyan glow when you select text
    <div className='w-full min-h-screen bg-neutral-950 text-white selection:bg-cyan-500/30 selection:text-cyan-200'>
      
      {/* Since you want to remove the Navbar color:
         Ensure your Navbar component has 'fixed w-full z-50' 
         and 'bg-transparent' (or just backdrop-blur) to let this layout background show through.
      */}
      <Navbar />
      
      <Hero />
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Layout;