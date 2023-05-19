import React from 'react';
import html from '../images/html.png';
import angular from '../images/angular.png';
import css from '../images/css.png';
import js from '../images/js.png';
import nodejs from '../images/nodejs.png';
import react from '../images/react.png';
import scss from '../images/scss.png';
import tailwind from '../images/tailwind.png';
import '../styles/Skills.css';

import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

const Skills = () => {
  const { selectedTheme } = useContext(ThemeContext)
  const { boxShadow } = selectedTheme
  const tech = [
    {
      id: 1,
      src: html,
      title: 'Html',
      

    },
    {
      id: 2,
      src: css,
      title: 'Css',
      

    },
    {
      id: 3,
      src: js,
      title: 'Js',
      

    },
    {
      id: 4,
      src: nodejs,
      title: 'Nodejs',
      

    },
    {
      id: 5,
      src: react,
      title: 'React',
      

    },

    {
      id: 6,
      src: scss,
      title: 'Scss',
      

    },
    {
      id: 7,
      src: tailwind,
      title: 'Tailwind',
      

    },
    {
      id: 8,
      src: angular,
      title: 'Angular',
      

    },
  ];

  return (
    <div id="skills" className="skills-container">
      <div className="skills-heading">
        <p className="skills-title">Ezeket a technológiákat ismerem</p>
        
      </div>
      <div className="skills-list">
        {tech.map((skill) => (
          <div key={skill.id} className="skill-item">
        


              <div className='skill-images' style={{ boxShadow: boxShadow }}>
                <img
                  src={skill.src}
                  alt={skill.title}
                  className="skill-image"
                />
              
              </div>
            
            <p className="skill-title" >
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
