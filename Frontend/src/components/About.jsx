import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const About = () => {
  const skills = [
    {
      id: 1,
      name: 'MERN Stack',
      description: 'MongoDB, Express, React, Node.js',
      icon: <FaReact className="w-6 h-6" />,
      level: 'Strong',
    },
    {
      id: 2,
      name: 'Backend Development',
      description: 'REST APIs, JWT Auth, Cookies',
      icon: <FaNodeJs className="w-6 h-6" />,
      level: 'Good',
    },
    {
      id: 3,
      name: 'Database Management',
      description: 'Mongoose ODM & Data Modeling',
      icon: <SiMongodb className="w-6 h-6" />,
      level: 'Good',
    },
    {
      id: 4,
      name: 'Modern UI',
      description: 'Tailwind CSS, Responsive Design',
      icon: <SiTailwindcss className="w-6 h-6" />,
      level: 'Strong',
    },
  ];

  return (
    <section
      id="about"
      className="w-full bg-neutral-950 py-20 px-4 md:px-10 text-white"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* --- Section Title --- */}
        <div className="mb-16 border-b border-zinc-800 pb-4">
          <h2 className="text-4xl md:text-5xl font-serif tracking-wide">
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
          
          {/* --- Left Column: Hook --- */}
          <div>
            <h3 className="text-2xl md:text-3xl font-light leading-relaxed mb-6 text-zinc-100">
              I build full-stack web applications that are fast, responsive, and easy to use.
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I focus on turning ideas into real products using modern web technologies and clean, maintainable code.
            </p>
          </div>

          {/* --- Right Column: Narrative --- */}
          <div className="text-zinc-400 text-base leading-loose space-y-6">
            <p>
              I'm Abhinav, a MERN stack developer who enjoys building real-world web
              applications from scratch. I work with MongoDB, Express, React, and
              Node.js to create scalable and user-friendly products.
            </p>
            <p>
              I’ve built various fullstack web applications, where I handled authentication,
              REST APIs, database design, and frontend UI. I care about writing clean
              code, learning best practices, and improving with every project I build.
            </p>
          </div>
        </div>

        {/* --- Skills Section --- */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group flex items-center justify-between bg-zinc-900/80 rounded-[30px] p-4 pr-8 hover:bg-zinc-800 transition-all duration-300 border border-white/5 hover:border-white/10"
            >
              {/* Left side: Icon and Text */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-950 rounded-full flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                  {skill.icon}
                </div>

                <div className="flex flex-col">
                  <span className="text-lg font-medium text-white tracking-wide">
                    {skill.name}
                  </span>
                  <span className="text-sm text-zinc-500 font-light">
                    {skill.description}
                  </span>
                </div>
              </div>

              {/* Right side: Level Indicator */}
              <div className="text-zinc-400 font-light tracking-widest text-sm uppercase group-hover:text-white transition-colors">
                {skill.level}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
