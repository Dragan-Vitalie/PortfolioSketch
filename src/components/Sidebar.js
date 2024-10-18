import React from 'react';
import Arrows from '../icons/Arrows';
import Github from '../icons/Github';
import Linkedin from '../icons/Linkedin';
import Instagram from '../icons/Instagram';

const Sidebar = ({ setActiveSection, activeSection}) => {
  return (
    <aside className="mt-48 ml-20 w-80 p-6 h-fit fixed overflow-y-auto">
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
         <a href="https://www.instagram.com/dragan_vitali/" target="_blank" rel="noopener noreferrer" className="p-4 text-gray-400 hover:text-white hover:bg-gray-700 hover:rounded-xl">
           <Instagram />
         </a>
       </div>
    </aside>
  );
};

export default Sidebar;