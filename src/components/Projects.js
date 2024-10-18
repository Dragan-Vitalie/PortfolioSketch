import React from 'react';
import desktopImage from './../images/desktop.png'

const Projects = () => {
  return (
    <section className="section-content">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <h2 className="text-xl ml-6 mt-6 font-bold mb-6">Experience at Warner Music Group </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center">Event Management</h3>
          <p className="text-gray-300 mb-4"><strong className='text-lime-300'>Main developer for a key feature</strong> that reduces the time required for managers of artists to edit existing events by over 90%, from 25 minutes to under 2 minutes.</p>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Ruby on Rails</span>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center ">Page Modernization</h3>
          <p className="text-gray-300 mb-4"><strong className='text-lime-300'>Main developer for page modernization</strong>, from old server side ruby code to a fancy looking client side rendering. Responsible for key documentation <strong>PRD</strong> (Product Requirement Document), <strong>EDD</strong> (Engineering Design Document)</p>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">API</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Ruby on Rails</span>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center ">Trust and Safety</h3>
          <p className="text-gray-300 mb-4"><strong className='text-lime-300'>Implemented spam link checking </strong> using Google's WebRisk API as part of this work enhancing trust and safety with Google's WebRisk API.</p>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">API</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Ruby on Rails</span>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center ">Improve Testing</h3>
          <p className="text-gray-300 mb-4"><strong className='text-lime-300'>Co-developed a feature </strong> enabling different types of users with distinct permissions to test new code changes in a specific environment before deployment to production. This enhancement reduced the time spent testing features impacting different user roles by over 93%.</p>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">API</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Ruby on Rails</span>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center ">POC using Auth0</h3>
          <p className="text-gray-300 mb-4"><strong className='text-lime-300'>Contributed to a proof of concept using Auth0 </strong>, including Figma wireframes and React integrations, which was subsequently integrated into the Website, Dashboard, and App.</p>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">API</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Ruby on Rails</span>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center ">Ruby Upgrade</h3>
          <p className="text-gray-300 mb-4"><strong className='text-lime-300'>Contributed to the Ruby upgrade </strong>, across multiple services, verifying gems and tests before pipeline deployment, while following best practices and reporting a critical outdated gem issue.</p>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">API</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Ruby on Rails</span>
          </div>
        </div>
      </div>
        <div className="bg-gray-800 mt-7 p-6 justify-center rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center "> Following Best Practices within B2B</h3>
          <p className="text-gray-300 mb-4"><strong className='text-lime-300'>Working within the B2B team </strong>, adopting Agile methodology while prioritizing CI/CD, continuous learning, and team productivity.</p>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">API</span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Ruby on Rails</span>
          </div>
        </div>
      <h2 className="text-xl ml-6 mt-20 font-bold mb-6">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 flex justify-between items-center ">Signin / Signup</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <p className="text-gray-300 mb-4"><strong className='text-lime-300'>title </strong>, text - text - text</p>
            <img className='h-40' src={desktopImage} alt='ProjectName'/>
          </div>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center ">Redis with Github API</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <p className="text-gray-300 mb-4"><strong className='text-lime-300'>title </strong>, text - text - text</p>
            <img className='h-40' src={desktopImage} alt='ProjectName'/>
          </div>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center ">POC</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <p className="text-gray-300 mb-4"><strong className='text-lime-300'>title </strong>, text - text - text</p>
            <img className='h-40' src={desktopImage} alt='ProjectName'/>
          </div>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex justify-between items-center ">GiG Radar</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <p className="text-gray-300 mb-4"><strong className='text-lime-300'>title </strong>, text - text - text</p>
            <img className='h-40' src={desktopImage} alt='ProjectName'/>
          </div>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">React</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;