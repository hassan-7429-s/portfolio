import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Optional: your photo */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 flex-shrink-0">
            <img
              src="/profile.jpg"  // ← replace with your photo path
              alt="Your Name"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-gray-300 space-y-4">
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Hassan Sharif Ahmed</span> – a passionate full‑stack developer based in Kigali. 
              I love building web applications that are both beautiful and functional.
            </p>
            <p className="text-lg leading-relaxed">
              With over 2 years of experience in React, Node.js, and modern web technologies, 
              I've helped startups and businesses turn their ideas into reality. 
              I'm a problem‑solver at heart and always eager to learn new things.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me contributing to open source projects, reading tech blogs, or exploring new frameworks, and playing soccer, and having fun with my friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};