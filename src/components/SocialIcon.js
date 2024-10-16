import React from 'react';

const SocialIcon = ({ link, icon }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    <i className={`fab fa-${icon} w-6 h-6`} />
  </a>
);

export default SocialIcon;