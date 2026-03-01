import React, { useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Laundry Management System",
    description: "A full-stack laundry management system with real-time order tracking, user authentication, and admin dashboard.",
    image: "🧺",
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    category: "fullstack"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "Generate stunning images using AI. Built with React and OpenAI's DALL-E API.",
    image: "🎨",
    technologies: ["React", "OpenAI API", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    category: "ai"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Modern e-commerce platform with cart functionality, payment integration, and admin panel.",
    image: "🛍️",
    technologies: ["Next.js", "Stripe", "Tailwind", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
    category: "fullstack"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather application with interactive maps and 7-day forecast.",
    image: "🌤️",
    technologies: ["React", "Weather API", "Chart.js", "CSS Modules"],
    github: "https://github.com",
    live: "https://example.com",
    category: "frontend"
  }
];

const categories = ["all", "frontend", "fullstack", "ai"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Some of my best work that I'm proud to share"
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-medium capitalize transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:scale-105'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold text-purple-600 hover:text-purple-700 transition-colors group"
          >
            <Code2 size={24} />
            View All Projects on GitHub
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};