import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      id: 1,
      title: "Frontend Architecture",
      tech: "React, Tailwind, Framer Motion",
      description: "Building responsive, pixel-perfect interfaces with modern state management.",
      icon: <FaReact className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: 2,
      title: "Backend Engineering",
      tech: "Node.js, Express, REST APIs",
      description: "Designing scalable server-side logic and secure authentication systems.",
      icon: <FaNodeJs className="w-6 h-6 text-green-500" />,
    },
    {
      id: 3,
      title: "Database Management",
      tech: "MongoDB, Mongoose, Aggregations",
      description: "Optimizing data schemas for performance and reliability.",
      icon: <SiMongodb className="w-6 h-6 text-green-400" />,
    },
    {
      id: 4,
      title: "Product Deployment",
      tech: "Vercel, AWS, CI/CD",
      description: "Ensuring smooth delivery from development to production environments.",
      icon: <SiNextdotjs className="w-6 h-6 text-white" />,
    },
  ];

  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 }, // Starts lower for more dramatic effect
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card
      }
    }
  };

  return (
    <section
      id="about"
      className="relative w-full bg-[#050505] py-32 px-6 overflow-hidden"
    >
      {/* --- BACKGROUND --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* --- HEADER SECTION --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Waits until 50% is visible
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-zinc-700"></span>
            <span className="text-zinc-400 text-xs uppercase tracking-[0.2em]">About The Developer</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            More Than Just Code. <br />
            <span className="text-zinc-500 italic">I Build Digital Assets.</span>
          </h2>

          <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed font-light">
            I am a full-stack engineer who bridges the gap between clean code and user-centric design.
            My focus isn't just on making things work, but on making them scalable, maintainable, and impactful.
          </p>
        </motion.div>


        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Narrative (Triggers when 30% visible) */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="p-8 border-l border-zinc-800 bg-zinc-900/20 backdrop-blur-sm rounded-r-2xl hover:bg-zinc-900/40 transition-colors duration-500">
              <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                The Approach
              </h3>
              <p className="text-zinc-400 leading-loose text-sm md:text-base">
                I don't just write functions; I architect solutions. Whether it's optimizing a database query
                or crafting a buttery-smooth UI interaction, I treat every line of code as a critical part of the user experience.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 border-l border-zinc-800 bg-zinc-900/20 backdrop-blur-sm rounded-r-2xl hover:bg-zinc-900/40 transition-colors duration-500">
              <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                The Goal
              </h3>
              <p className="text-zinc-400 leading-loose text-sm md:text-base">
                To move beyond "making it work" to "making it scale." I am constantly refining my stack
                to deliver production-ready applications that stand the test of real-world usage.
              </p>
            </motion.div>
          </motion.div>


          {/* Right Column: Skills Grid (Triggers when 20% visible) */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={fadeInUp} // Each card uses the fade up variant
                whileHover={{ y: -5 }}
                className="group relative p-6 bg-zinc-900/30 border border-white/5 rounded-xl hover:border-white/10 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    0{skill.id}
                  </span>
                </div>

                <div className="relative z-10">
                  <h4 className="text-lg font-medium text-zinc-100 mb-2 group-hover:text-white">
                    {skill.title}
                  </h4>
                  <p className="text-xs font-mono text-indigo-400 mb-3">
                    {skill.tech}
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;