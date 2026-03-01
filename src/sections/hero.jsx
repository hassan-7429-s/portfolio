import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 pt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left column: text + photo + icons */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            {/* Your photo - replace src with your actual image */}
            <img
              src="/public/profile.jpg" // Placeholder – put your image in the public folder and reference it here
              alt="Hassan Sharif Ahmed"
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Hi, I'm <span className="text-blue-400">Hassan Sharif Ahmed</span>
              </h1>
              <p className="text-xl text-gray-300 mt-2">Full‑Stack Developer</p>
            </div>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            Crafting digital experiences that blend creativity with functionality, 
            turning complex problems into elegant solutions.
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 pt-4">
            <a href="https://github.com/hassan-7429-s/portfolio/upload/main" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition text-3xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/hassan-sharif-7a845a1ab/?skipRedirect=true" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition text-3xl">
              <FaLinkedin />
            </a>
            
            <a href="mailto:hassansharif2030@gmail.com"
               className="text-gray-400 hover:text-white transition text-3xl">
              <FaEnvelope />
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition shadow-lg">
              Let's Connect
            </a>
            <a href="#projects" className="px-8 py-3 border border-gray-500 hover:border-white rounded-full font-semibold transition">
              View My Work
            </a>
          </div>
        </div>

        {/* Right column: illustration or your photo (alternative) */}
        <div className="hidden md:block">
          <img
            src="/public/Devillust.svg" // You can use a nice vector graphic or another photo
            alt="Developer illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;