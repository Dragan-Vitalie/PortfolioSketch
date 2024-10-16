import React from 'react';
import SocialIcon from './SocialIcon';

const Sidebar = ({ setActiveSection, activeSection }) => {
  const sections = ['about', 'experience', 'projects', 'contact'];
  return (
    <aside className="w-64 bg-gray-800 p-6 shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Vitalie Dragan</h1>
      <p className="text-gray-400 mb-8">Software Engineer</p>
      <nav className="bg-gray-800 min-w-[200px] p-4">
        <ul>
          {sections.map(section => (
            <li
              key={section}
              className={`p-2 cursor-pointer rounded ${activeSection === section ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-10 flex space-x-4">
        <SocialIcon link="https://github.com/your-profile" icon="github" />
        <SocialIcon link="https://linkedin.com/in/your-profile" icon="linkedin" />
      </div>
    </aside>
  );
};

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export default Sidebar;