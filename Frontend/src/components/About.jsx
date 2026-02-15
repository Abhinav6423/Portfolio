import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      id: 1,
      name: 'MERN Stack Engineering',
      description: 'MongoDB, Express, React, Node.js',
      icon: <FaReact className="w-6 h-6" />,
      level: 'Advanced',
    },
    {
      id: 2,
      name: 'Backend Systems',
      description: 'REST APIs, JWT Auth, Cookies, MVC',
      icon: <FaNodeJs className="w-6 h-6" />,
      level: 'Advanced',
    },
    {
      id: 3,
      name: 'Database Architecture',
      description: 'Mongoose ODM, Data Modeling',
      icon: <SiMongodb className="w-6 h-6" />,
      level: 'Strong',
    },
    {
      id: 4,
      name: 'Frontend UI Engineering',
      description: 'Tailwind CSS, Responsive Design',
      icon: <SiTailwindcss className="w-6 h-6" />,
      level: 'Strong',
    },
  ];


  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Controls speed of the list loading
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section
      id="about"
      className="w-full bg-neutral-950 py-20 px-4 md:px-10 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* --- Section Title --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 border-b border-zinc-800 pb-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif tracking-wide">
            About
          </h2>
          <p className="text-zinc-500 mt-3 text-sm tracking-widest uppercase">
            Builder • Full-Stack Engineer • Product-Focused
          </p>
        </motion.div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">

          {/* --- Left Column: Hook --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-light leading-relaxed mb-6 text-zinc-100">
              I turn ideas into real, production-ready web products.
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I’m a full-stack developer focused on building fast, scalable applications with clean architecture and intuitive user experiences — not just demos, but real-world products.
            </p>
          </motion.div>

          {/* --- Right Column: Narrative --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }} // Slightly slower than left col
            className="text-zinc-400 text-base leading-loose space-y-6"
          >
            <p>
              I’m Abhinav, a MERN stack developer who builds full-stack web applications
              from the ground up — from backend APIs to frontend UI and deployment.
            </p>
            <p>
              I’ve shipped multiple projects where I handled authentication, REST APIs,
              database modeling, and frontend architecture. I care deeply about clean
              code, scalability, and building systems that actually work in real-world use.
            </p>
            <p>
              I’m constantly improving my craft, learning best practices, and pushing
              myself to build better, faster, and more maintainable products with every project.
            </p>
          </motion.div>
        </div>

        {/* --- Skills Section (Staggered List) --- */}
        <motion.div
          className="max-w-3xl mx-auto flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }} // Scale up and slight slide right
              className="group flex items-center justify-between bg-zinc-900/80 rounded-[30px] p-4 pr-8 hover:bg-zinc-800 transition-colors duration-300 border border-white/5 hover:border-white/10 cursor-default shadow-lg"
            >
              {/* Left side: Icon and Text */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-950 rounded-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {skill.icon}
                </div>

                <div className="flex flex-col">
                  <span className="text-lg font-medium text-white tracking-wide group-hover:text-cyan-100 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">
                    {skill.description}
                  </span>
                </div>
              </div>

              {/* Right side: Level Indicator */}
              <div className="text-zinc-400 font-light tracking-widest text-sm uppercase group-hover:text-white transition-colors">
                {skill.level}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;