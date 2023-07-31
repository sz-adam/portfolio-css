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
import { LanguageContext } from '../context/LanguageContext';
import AnimatedMotion from '../framerMotion/AnimatedMotion';
const i18n = require('../utils/i18n')



const Skills = () => {
  const { selectedTheme } = useContext(ThemeContext)
  const { boxShadow } = selectedTheme
  const { language, setLanguage } = useContext(LanguageContext)
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

    <div id="skills" className="skills-container" >
      <div className="skills-heading">
        <AnimatedMotion animationName="textAnimation" >      
          <p className="skills-title">{i18n.text(language, i18n.MAP['skills-title'])}</p>
        </AnimatedMotion>
      </div>
      <div className="skills-list">
        {tech.map((skill) => (
          <AnimatedMotion animationName="skillAnimation" key={skill.id} >
            <AnimatedMotion animationName="ItemAnimation" >
              <div className="skill-item">

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
            </AnimatedMotion>
          </AnimatedMotion>
        ))}
      </div>
    </div >

  );
};

export default Skills;
