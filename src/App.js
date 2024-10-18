import React, { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Sidebar from './components/Sidebar';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen flex">
        <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
        <main className="flex-1 pl-12 pr-10 ml-80 overflow-y-auto">
          <section id="about" className={`section ${activeSection === 'about' ? 'active' : ''}`}>
            <About />
          </section>
          <section id="experience" className={`section ${activeSection === 'experience' ? 'active' : ''}`}>
            <Experience />
          </section>
          <section id="projects" className={`section ${activeSection === 'projects' ? 'active' : ''}`}>
            <Projects />
          </section>
          <section id="contact" className={`section ${activeSection === 'contact' ? 'active' : ''}`}>
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
