import React from 'react';
// import Arrows from '../icons/Arrows';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiImbricatedArrows } from "react-icons/gi";

const Sidebar = ({ setActiveSection, activeSection}) => {
  return (
    <aside className="mt-48 ml-20 w-80 p-6 h-fit fixed hidden xl:block overflow-y-auto">
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
            className={`w-5/6 rounded-md px-4 py-1 flex justify-between tracking-widest text-gray-300 hover:text-white hover:bg-gray-800 ${activeSection === section ? 'bg-gray-700 text-white font-bold' : ''}`}
          >
            {activeSection === section && <GiImbricatedArrows className='w-6 h-6 -rotate-45'/>}
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
      <div className="mt-8 space-x-6 justify-start rounded-lg flex">
         <a href="https://github.com/Dragan-Vitalie" target="_blank" rel="noopener noreferrer" className="p-4 text-gray-400 hover:text-white hover:bg-gray-700 hover:rounded-xl">
          <FaGithub className='w-6 h-6'/>
        </a>
         <a href="https://www.linkedin.com/in/vitalie-dragan/" target="_blank" rel="noopener noreferrer" className="p-4 text-gray-400 hover:text-white hover:bg-gray-700 hover:rounded-xl">
           <FaLinkedin className='w-6 h-6'/>
         </a>
       </div>
    </aside>
  );
};

export default Sidebar;