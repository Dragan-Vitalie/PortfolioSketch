import React from 'react';
import Briefcase from '../icons/Briefcase';

const Projects = () => {
  return (
    <section className="section-content">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center">Event Management System <Briefcase /></h3>
          <p className="text-gray-300 mb-4">Developed a system that reduced event editing time by over 90%, from 25 minutes to under 2 minutes.</p>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Ruby on Rails</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">MySQL</span>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center ">Page Modernization <Briefcase /></h3>
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

export default Projects;