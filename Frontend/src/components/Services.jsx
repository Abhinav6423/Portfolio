import React from 'react';
// Importing icons related to development
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';

const Services = () => {
    // Data derived from your skills list in image_1.png, formatted for service cards.
    const services = [
        {
            id: 1,
            title: 'Frontend Development',
            description: 'Building responsive, interactive, and pixel-perfect user interfaces using React.js and Tailwind CSS. I ensure a seamless and engaging experience across all devices.',
            icon: <FaReact className="w-7 h-7" />,
        },
        {
            id: 2,
            title: 'Backend Development',
            description: 'Engineering robust and secure RESTful APIs with Node.js and Express.js. I handle server-side logic, authentication using JWT, and efficient data flow.',
            icon: <FaNodeJs className="w-7 h-7" />,
        },
        {
            id: 3,
            title: 'Database Management',
            description: 'Designing and managing scalable, high-performance NoSQL databases with MongoDB and Mongoose for reliable data storage and quick retrieval.',
            icon: <FaDatabase className="w-7 h-7" />,
        },
        {
            id: 4,
            title: 'Version Control & Workflow',
            description: 'Maintaining clean code history and collaboration using Git and GitHub. I use tools like Postman for rigorous API testing to ensure quality deliverables.',
            icon: <FaGitAlt className="w-7 h-7" />,
        },
    ];

    return (
        <section id="services" className="w-full bg-neutral-950 py-20 px-4 md:px-10 text-white">
            <div className="max-w-6xl mx-auto">

                {/* --- Section Title --- */}
                {/* Styled to match the reference image with a bottom border and serif font */}
                <div className="mb-16 border-b border-zinc-800 pb-4">
                    <h2 className="text-4xl md:text-5xl font-serif tracking-wide">
                        Services
                    </h2>
                </div>

                {/* --- Services Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        // Service Card: Dark background, rounded corners, subtle border, and hover effect
                        <div
                            key={service.id}
                            className="group bg-zinc-900/50 p-8 rounded-[30px] border border-white/5 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300"
                        >

                            {/* Icon Container */}
                            <div className="w-14 h-14 bg-zinc-950 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors mb-6">
                                {service.icon}
                            </div>

                            {/* Service Title */}
                            <h3 className="text-2xl font-serif tracking-wide mb-4 group-hover:text-cyan-200 transition-colors">
                                {service.title}
                            </h3>

                            {/* Service Description */}
                            <p className="text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;