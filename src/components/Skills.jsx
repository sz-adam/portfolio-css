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

const Skills = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: 'Html',
      count: 80,

    },
    {
      id: 2,
      src: css,
      title: 'Css',
      count: 80,

    },
    {
      id: 3,
      src: js,
      title: 'Js',
      count: 70,

    },
    {
      id: 4,
      src: nodejs,
      title: 'Nodejs',
      count: 40,

    },
    {
      id: 5,
      src: react,
      title: 'React',
      count: 70,

    },

    {
      id: 6,
      src: scss,
      title: 'Scss',
      count: 70,

    },
    {
      id: 7,
      src: tailwind,
      title: 'Tailwind',
      count: 30,

    },
    {
      id: 8,
      src: angular,
      title: 'Angular',
      count: 50,

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
            <div className='skills-color'
              style={{ '--percentage': skill.count + '%' }}>


              <div className="skill-image">
                <img
                  src={skill.src}
                  alt={skill.title}
                  className="skill-image"
                />
              
              </div>
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
