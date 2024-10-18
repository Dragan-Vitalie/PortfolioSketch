import React from 'react';
import ProgressContainer from '../ProgressContainer';

const About = () => {
  return (
    <section className="section-content w-11/12">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300 mb-4">
        Dedicated and ambitious professional with a passion for understanding how things are built and function. Known for going the extra mile to ensure project success. Skilled in problem solving, project management and teamwork. Eager to contribute and drive meaningful outcomes in a dynamic, growth-oriented environment.
      </p>
      <div>
        <ProgressContainer />
      </div>
    </section>
  );
};

export default About;