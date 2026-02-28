import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Code2, Palette, Globe, Coffee, Award, Users } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '20+' },
    { icon: Users, label: 'Happy Clients', value: '15+' },
    { icon: Award, label: 'Years Experience', value: '3+' },
    { icon: Coffee, label: 'Coffee Consumed', value: '500+' },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle 
          title="About Me" 
          subtitle="Passionate developer with a creative edge"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image/Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-3xl bg-white p-1 overflow-hidden">
                  <img
                    src="/images/profile.jpg"
                    alt="Hassan Sharif Ahmed"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <p className="font-bold">Open to work</p>
              </div>
            </div>

            {/* Stats grid (unchanged) */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                  <stat.icon className="text-purple-600 mb-3" size={24} />
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Content (unchanged) */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-medium">Available for work</span>
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              Crafting code with{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">passion and purpose</span>
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a software engineering developer with a passion for creating beautiful and functional websites. 
              With experience in React, Node.js, and modern web technologies, 
              I've helped businesses and individuals bring their ideas to life.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive user experiences. 
              When I'm not coding, you can find me contributing to open-source, writing tech blogs, 
              or exploring the latest web technologies.
            </p>

            {/* Personal info cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-1">📍 Location</h4>
                <p className="text-gray-600">Kigali, Rwanda</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-1">📧 Email</h4>
                <p className="text-gray-600">hassansharif2030@gmail.com</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-1">🎓 Degree</h4>
                <p className="text-gray-600">Software Engineering</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-1">⚡ Availability</h4>
                <p className="text-green-600 font-medium">Full-time / Freelance</p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-4 pt-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                Download Resume
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};