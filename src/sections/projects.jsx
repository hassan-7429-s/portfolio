import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const Projects = () => {
  const projects = [
    {
      title: 'E‑Commerce Platform',
      desc: 'Full‑stack e‑commerce with React, Node, MongoDB, and Stripe.',
      tech: ['React', 'Node', 'MongoDB', 'Stripe'],
      image: '/ecommerce.jpg',
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.com',
    },
    {
      title: 'My Portfolio Website',
      desc: 'This very portfolio – modern, responsive, and fast.',
      tech: ['React', 'Tailwind', 'Vite'],
      image: '/portfolio.png',
      github: 'https://github.com/yourusername/portfolio',
      live: 'http://localhost:5173/#projects',
    },
    // Add more projects

    {
      title: 'Infinity Hotel Laundary Management System',
      desc: 'A full-stack application for managing hotel laundry operations.',
      tech: ['Html', 'Css', 'Node', 'MongoDB', 'Express'],
      image: '/infintiyhotel.png',
      github: 'https://github.com/hassan-7429-s/finalStaff',
      live: 'http://127.0.0.1:5500/public/index.html',
    },

  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
              {/* Image with hover zoom */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                {/* Overlay with links on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center space-x-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, j) => (
                    <span key={j} className="text-sm bg-blue-600 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};