import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiPostgresql } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-indigo-400' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="flex flex-col items-center p-4 bg-gray-700 rounded-xl hover:scale-105 transition">
                <Icon className={`text-5xl mb-2 ${skill.color}`} />
                <span className="text-gray-200 font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};