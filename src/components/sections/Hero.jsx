import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 2px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container-custom relative z-10 text-center text-white">
        {/* Floating code icons */}
        <div className="absolute top-20 left-10 animate-bounce hidden lg:block">
          <Code2 size={40} className="text-white/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce hidden lg:block" style={{ animationDelay: '1s' }}>
          <Code2 size={60} className="text-white/20" />
        </div>

        {/* Profile image placeholder */}
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm mx-auto border-4 border-white/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
            <span className="text-3xl">👨‍💻</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Hassan Sharif Ahmed
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Crafting digital experiences that blend creativity with functionality, 
          turning complex problems into elegant solutions.
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <a 
            href="#contact" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Let's Connect
          </a>
          <a 
            href="#projects" 
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/hassan-7429-s" className="text-white/80 hover:text-white transform hover:scale-110 transition-all">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/hassan-sharif-7a845a1ab/" className="text-white/80 hover:text-white transform hover:scale-110 transition-all">
            <Linkedin size={24} />
          </a>
          <a href="mailto:hassan.sharif.ahmed@gmail.com" className="text-white/80 hover:text-white transform hover:scale-110 transition-all">
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/80 hover:text-white">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};