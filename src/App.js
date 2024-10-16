// import React, { useState } from 'react';
// import About from './components/About';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Sidebar from './components/Sidebar';

// const App = () => {
//   const [activeSection, setActiveSection] = useState('about');

//   const scrollToSection = (section) => {
//     setActiveSection(section);
//     const element = document.getElementById(section);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex">
//       <Sidebar setActiveSection={scrollToSection} activeSection={activeSection} />
//       <main className="flex-1 p-8">
//         <div id="about"><About /></div>
//         <div id="experience"><Experience /></div>
//         <div id="projects"><Projects /></div>
//         <div id="contact"><Contact /></div>
//       </main>
//     </div>
//   );
// };

// export default App;



// // import React, { useState } from 'react';

// // const App = () => {
// //   const [activeSection, setActiveSection] = useState('about');

// //   return (
// //     <div className="bg-gray-900 text-white min-h-screen flex">
// //       <Sidebar setActiveSection={setActiveSection} />
// //       <main className="flex-1 p-8">
// //         {activeSection === 'about' && <About />}
// //         {activeSection === 'experience' && <Experience />}
// //         {activeSection === 'projects' && <Projects />}
// //         {activeSection === 'contact' && <Contact />}
// //       </main>
// //     </div>
// //   );
// // };

// // const Sidebar = ({ setActiveSection }) => {
// //   return (
// //     <aside className="w-64 bg-gray-800 p-6">
// //       <h1 className="text-2xl font-bold mb-2">Vitalie Dragan</h1>
// //       <p className="text-gray-400 mb-6">Software Engineer</p>
// //       <nav>
// //         <button onClick={() => setActiveSection('about')} className="block text-left py-2 text-gray-300 hover:text-white">About</button>
// //         <button onClick={() => setActiveSection('experience')} className="block text-left py-2 text-gray-300 hover:text-white">Experience</button>
// //         <button onClick={() => setActiveSection('projects')} className="block text-left py-2 text-gray-300 hover:text-white">Projects</button>
// //         <button onClick={() => setActiveSection('contact')} className="block text-left py-2 text-gray-300 hover:text-white">Contact</button>
// //       </nav>
// //       <div className="mt-6 flex space-x-4">
// //         <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
// //           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
// //         </a>
// //         <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
// //           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
// //         </a>
// //       </div>
// //     </aside>
// //   );
// // };

// // const About = () => {
// //   return (
// //     <section>
// //       <h2 className="text-3xl font-bold mb-4">About Me</h2>
// //       <p className="text-gray-300 mb-4">
// //         Dedicated and ambitious professional with a passion for understanding how things are
// //         built and function. Known for going the extra mile to ensure project success. Skilled in
// //         problem solving, project management and teamwork. Eager to contribute and drive
// //         meaningful outcomes in a dynamic, growth oriented environment.
// //       </p>
// //       <div className="mt-6">
// //         <h3 className="text-xl font-semibold mb-2">Skills</h3>
// //         <div className="flex flex-wrap gap-2">
// //           {['HTML', 'CSS', 'SCSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind', 'Material UI', 'Ruby', 'Ruby on Rails', 'SQL', 'MySQL', 'Git', 'GitHub', 'Figma', 'API Proficient'].map(skill => (
// //             <span key={skill} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{skill}</span>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const Experience = () => {
// //   return (
// //     <section>
// //       <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
// //       <div className="mb-8">
// //         <h3 className="text-xl font-semibold">Software Engineer Apprenticeship</h3>
// //         <p className="text-gray-400 mb-2">Warner Music Group | June 2023 - Present</p>
// //         <ul className="list-disc list-inside text-gray-300">
// //           <li>Main developer for a key feature that reduces event editing time by over 90%</li>
// //           <li>Led page modernization and spam link checking project</li>
// //           <li>Co-developed feature for testing code changes in specific environments</li>
// //           <li>Contributed to Auth proof of concept and Ruby upgrade across services</li>
// //         </ul>
// //       </div>
// //       <div>
// //         <h3 className="text-xl font-semibold">Construction Supervisor</h3>
// //         <p className="text-gray-400 mb-2">Kendell | September 2022 - June 2023</p>
// //         <ul className="list-disc list-inside text-gray-300">
// //           <li>Supervised a team of laborers and skilled workers</li>
// //           <li>Collaborated with manager to optimize work efficiency and save company money</li>
// //         </ul>
// //       </div>
// //     </section>
// //   );
// // };

// // const Projects = () => {
// //   return (
// //     <section>
// //       <h2 className="text-3xl font-bold mb-6">Projects</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <div className="bg-gray-800 p-6 rounded-lg">
// //           <h3 className="text-xl font-semibold mb-2">Event Management System</h3>
// //           <p className="text-gray-300 mb-4">Developed a system that reduced event editing time by over 90%, from 25 minutes to under 2 minutes.</p>
// //           <div className="flex gap-2">
// //             <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
// //             <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Ruby on Rails</span>
// //             <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">MySQL</span>
// //           </div>
// //         </div>
// //         <div className="bg-gray-800 p-6 rounded-lg">
// //           <h3 className="text-xl font-semibold mb-2">Page Modernization</h3>
// //           <p className="text-gray-300 mb-4">Led project to modernize page and implement spam link checking using Google's WebRisk API.</p>
// //           <div className="flex gap-2">
// //             <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
// //             <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Google WebRisk API</span>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const Contact = () => {
// //   return (
// //     <section>
// //       <h2 className="text-3xl font-bold mb-6">Contact</h2>
// //       <p className="text-gray-300 mb-2">Email: dragan-vitali@mail.com</p>
// //       <p className="text-gray-300 mb-2">Phone: 07562690128</p>
// //       <p className="text-gray-300">Languages: English, Romanian, Russian</p>
// //     </section>
// //   );
// // };

// // export default App;


import React, { useState } from 'react';
import './App.css'; // Make sure this file exists for styles
// import Selected from './icons/Selected';
import Arrows from './icons/Arrows';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="bg-gray-900 text-white min-h-screen flex">
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="flex-1 p-8 ml-80 overflow-y-auto">
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
  );
};

const Sidebar = ({ setActiveSection, activeSection, selected}) => {
  return (
    <aside className="mt-80 ml-20 w-80 p-6 h-fit fixed overflow-y-auto">
      <h1 className="text-4xl font-bold mb-2">Vitalie Dragan</h1>
      <p className="text-gray-400 mb-6">Software Engineer</p>
      <nav className="space-y-8">
        {['about', 'experience', 'projects', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => {
              setActiveSection(section);
              document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-5/6 rounded-md text-left px-4 py-1 flex justify-between tracking-widest text-gray-300 hover:text-white hover:bg-gray-800 ${activeSection === section ? 'bg-gray-700 text-white font-bold' : ''}`}
          >
            {activeSection === section && <Arrows />}
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
      <div className="mt-16 space-x-6 justify-start rounded-lg flex">
         <a href="https://github.com/Vitalie-Dragan-Songkick" target="_blank" rel="noopener noreferrer" className="p-4 text-gray-400 hover:text-white hover:bg-gray-700 hover:rounded-xl">
          <Github />
        </a>
         <a href="https://www.linkedin.com/in/vitalie-dragan/" target="_blank" rel="noopener noreferrer" className="p-4 text-gray-400 hover:text-white hover:bg-gray-700 hover:rounded-xl">
           <Linkedin />
         </a>
       </div>
    </aside>
  );
};

const About = () => {
  return (
    <section className="section-content">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300 mb-4">
        Dedicated and ambitious professional with a passion for understanding how things are built and function. Known for going the extra mile to ensure project success. Skilled in problem solving, project management and teamwork. Eager to contribute and drive meaningful outcomes in a dynamic, growth-oriented environment.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {['HTML', 'CSS', 'SCSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind', 'Material UI', 'Ruby', 'Ruby on Rails', 'SQL', 'MySQL', 'Git', 'GitHub', 'Figma', 'API Proficient'].map(skill => (
            <span key={skill} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="section-content">
      <h2 className="text-4xl font-bold mb-6">Work Experience</h2>
      <div className="mb-8">
        <h3 className="text-xl font-semibold">Software Engineer Apprenticeship</h3>
        <p className="text-gray-400 mb-2">Warner Music Group | June 2023 - Present</p>
        <ul className="list-disc list-inside text-gray-300">
          <li>Main developer for a key feature that reduces event editing time by over 90%</li>
          <li>Led page modernization and spam link checking project</li>
          <li>Co-developed feature for testing code changes in specific environments</li>
          <li>Contributed to Auth proof of concept and Ruby upgrade across services</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Construction Supervisor</h3>
        <p className="text-gray-400 mb-2">Kendell | September 2022 - June 2023</p>
        <ul className="list-disc list-inside text-gray-300">
          <li>Supervised a team of laborers and skilled workers</li>
          <li>Collaborated with manager to optimize work efficiency and save company money</li>
        </ul>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="section-content">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Event Management System</h3>
          <p className="text-gray-300 mb-4">Developed a system that reduced event editing time by over 90%, from 25 minutes to under 2 minutes.</p>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Ruby on Rails</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">MySQL</span>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Page Modernization</h3>
          <p className="text-gray-300 mb-4">Main developer for page modernization, from old server side ruby code to a fancy looking client side rendering. Implemented spam link checking using Google's WebRisk API as part of this work</p>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Google WebRisk API</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="section-content">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <div className=''>
        <p className="text-gray-300 mb-2">
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank'>Email: dragan-vitali@mail.com</a>
        </p>
        <p className="text-gray-300 mb-2">Phone: 07562690128</p>
        <p className="text-gray-300 mb-6">Languages: English, Romanian, Russian</p>
      </div>
      
      <form className="mt-20 space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-300 mb-1">First Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-600 bg-gray-800 text-white"
              placeholder="First Name"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-300 mb-1">Last Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-600 bg-gray-800 text-white"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-600 bg-gray-800 text-white"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Phone Number</label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-600 bg-gray-800 text-white"
            placeholder="Phone Number"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Company</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-600 bg-gray-800 text-white"
            placeholder="Company"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-600 bg-gray-800 text-white"
            placeholder="Your message"
            rows="5"
          ></textarea>
        </div>

        <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-green-500 text-white w-60 px-4 py-2 rounded-md hover:bg-green-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default App;
