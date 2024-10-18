import React from 'react';
import { FaHtml5, FaJs, FaReact, FaBootstrap, FaDocker, FaGit, FaFigma, FaDatabase, FaLightbulb, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiKubernetes, SiRedis, SiRuby, SiRubyonrails, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { TbApi } from "react-icons/tb";
import { SiJest, SiTestinglibrary, SiNextui, SiAppwrite  } from "react-icons/si";


import CircularProgress from './CircularProgress';

const skills = [
  { name: 'HTML / CSS / SCSS', percentage: 95, icon: FaHtml5 },
  { name: 'JavaScript', percentage: 90, icon: FaJs },
  { name: 'React.js', percentage: 80, icon: FaReact },
  { name: 'API Proficient', percentage: 95, icon: TbApi }, // Using chart icon
  { name: 'Bootstrap', percentage: 95, icon: FaBootstrap },
  { name: 'Tailwind CSS', percentage: 95, icon: SiTailwindcss }, // Using Tailwind CSS icon
  { name: 'Shadcn/ui', percentage: 75, icon: SiNextui }, // Using React icon
  { name: 'Material UI', percentage: 75, icon: SiNextui }, // Material UI icon
  { name: 'Next.js (novice)', percentage: 40, icon: SiNextdotjs }, // Next.js icon
  { name: 'TypeScript (novice)', percentage: 40, icon: SiTypescript }, // TypeScript icon
  { name: 'Ruby', percentage: 80, icon: SiRuby }, // Ruby icon
  { name: 'Ruby on Rails', percentage: 80, icon: SiRubyonrails }, // Ruby on Rails icon
  { name: 'RSpec', percentage: 70, icon: SiTestinglibrary }, // Jest icon
  { name: 'Jest', percentage: 70, icon: SiJest }, // Jest icon
  { name: 'Appwrite (firebase alternative)', percentage: 85, icon: SiAppwrite },
  { name: 'Docker', percentage: 90, icon: FaDocker },
  { name: 'Kubernetes (novice)', percentage: 30, icon: SiKubernetes }, // Kubernetes icon
  { name: 'AWS', percentage: 30, icon: FaAws }, 
  { name: 'SQL & MySQL', percentage: 80, icon: FaDatabase },
  { name: 'Redis', percentage: 65, icon: SiRedis }, // Redis icon
  { name: 'Git & GitHub', percentage: 85, icon: FaGit },
  { name: 'Figma', percentage: 90, icon: FaFigma },
  { name: 'Critical Thinking', percentage: 85, icon: FaLightbulb }, // Lightbulb icon 
  { name: 'Enthusiasm', percentage: 95, icon: FaLightbulb }, // Lightbulb icon
  { name: 'Teamwork', percentage: 85, icon: FaLightbulb }, // Lightbulb icon
];

const ProgressContainer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', columnGap: '10px', height: '80vh' }}>
      {skills.map((skill, index) => (
        <div key={index} className='-mt-10 h-fit' style={{ textAlign: 'center', justifyContent: 'center'}}>
          <CircularProgress percentage={skill.percentage} Icon={skill.icon} />
          <p style={{
            width:'130px',
            fontSize: '14px',
            lineHeight: '1.8',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressContainer;
