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
  );
}

export default App;