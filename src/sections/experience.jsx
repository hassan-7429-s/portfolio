import React from 'react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#1a1f26]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-semibold">Frontend Developer</h3>
            <p className="text-blue-400 mb-2"> Infinity Hotel . 2026 </p>
            <p className="text-gray-400">Built responsive web apps using React and Tailwind.</p>
          </div>
          {/* Add more experiences */}
          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-2xl font-semibold">Software Engineer Intern</h3>
            <p className="text-green-400 mb-2"> Tech Startup . 2025 </p>
            <p className="text-gray-400">Developed features in a Node.js backend and React frontend.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
  
};