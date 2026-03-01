import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#0f1418]/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Hassan</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
          <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition">Experience</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;