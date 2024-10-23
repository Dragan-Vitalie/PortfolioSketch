import React from 'react';
import desktopImage from './../images/desktop.png'
import SignInImage from './../images/Signin.gif'
import Kinoland from './../images/KinoLand.gif'
import FirstWebsite from './../images/FirstWebsite.gif'
import ToDoList from './../images/ToDoList.gif'
import GigRadar from './../images/GigRadar.gif'

// import '../App.css'
// import Modal from './Modal';

const Projects = () => {
  // const [isOpen, setIsOpen] = useState(false); // import useState

  return (
    <section className="section-content">
      {/* <main>
        <button className="primaryBtn" onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </main> */}  
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

      {/* Personal Projects */}
      <h2 className="text-xl ml-6 mt-20 font-bold mb-6">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://login-signup-modal.netlify.app/" target="_blank" rel="noreferrer" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={SignInImage} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modal part of a POC</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </a>
          <a href="https://flowbite.com/docs/components/card/" target="_blank" rel="noreferrer" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={desktopImage} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Redis with Github API</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </a>
          <a href="https://flowbite.com/docs/components/card/" target="_blank" rel="noreferrer" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={ToDoList} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Manage Tasks</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </a>
          <a href="https://flowbite.com/docs/components/card/" target="_blank" rel="noreferrer" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={GigRadar} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GiG Radar</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </a>
          <a href="https://kino-land-vitalie-dragan.netlify.app/" target="_blank" rel="noreferrer" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={Kinoland} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Search a Movie</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kinoland is utilizing the (OMDb) API, a RESTful web service that gives access to details used to enrich the UX with </p>
            </div>
          </a>
          <a href="https://first-website-vitalie-dragan.netlify.app/" target="_blank" rel="noreferrer" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={FirstWebsite} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">First Website</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kinoland is utilizing the (OMDb) API, a RESTful web service that gives access to details used to enrich the UX with </p>
            </div>
          </a>
      </div>
    </section>
  );
};

export default Projects;