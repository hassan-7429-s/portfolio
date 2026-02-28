import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { 
  Code2, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  Terminal,
  Braces,
  Cpu
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Next.js', level: 75 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 65 },
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'VS Code', level: 90 },
      ]
    }
  ];

  const otherSkills = [
    { icon: Code2, name: 'TypeScript' },
    { icon: Braces, name: 'Redux' },
    { icon: Globe, name: 'RESTful APIs' },
    { icon: Terminal, name: 'Command Line' },
    { icon: Cpu, name: 'Problem Solving' },
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle 
          title="My Skills" 
          subtitle="Technologies and tools I work with"
        />

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl text-white">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-purple-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-all"></div>
                <div className="relative px-6 py-3 bg-white rounded-xl border border-gray-200 hover:border-transparent transition-all flex items-center gap-2">
                  <skill.icon size={18} className="text-purple-600" />
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Quote */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
            "The only way to do great work is to love what you do. 
            I'm constantly learning and adapting to new technologies 
            to build better solutions."
          </p>
        </div>
      </div>
    </section>
  );
};