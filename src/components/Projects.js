import React from 'react';
import Github from './../images/GitHub.png'
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
      <h2 className="text-4xl font-bold mb-6">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://login-signup-modal.netlify.app/" target="_blank" rel="noreferrer" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={SignInImage} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modal part of a POC</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </a>
          <a href="https://flowbite.com/docs/components/card/" target="_blank" rel="noreferrer" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={Github} alt="" />
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