import React from 'react';

const About = () => {
  return (
    <section className="fade">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300 mb-4">
        Dedicated and ambitious professional with a passion for understanding how things are built and function. Known for going the extra mile to ensure project success. Skilled in problem solving, project management and teamwork.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {['HTML', 'CSS', 'SCSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind', 'Ruby', 'Rails', 'SQL', 'Git', 'Figma'].map(skill => (
            <span key={skill} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;