import React from 'react';

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

export default Experience;