
import Hero from './sections/hero';
import { Skills } from './sections/skills';
import { Projects } from './sections/projects';
import { About } from './sections/about';
import { Experience } from './sections/experience';
import { Contact } from './sections/contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
import React from 'react';
import { Layout } from './components/layout/layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
    </Layout>

  );
}

export default App;