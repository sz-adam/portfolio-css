import React, { useContext } from 'react'
import '../styles/Portfolio.css'
import memorygame from "../images/memorygame.jpg"
import angularTodo from "../images/angular-todo.jpg"
import angularpokemon from "../images/pokemon.png"
import quiz from "../images/quiz.png"
import movie from "../images/movie.png"
import { LanguageContext } from '../context/LanguageContext'

import { FiGithub } from "react-icons/fi"
import { AiOutlineEye } from "react-icons/ai"
import AnimatedMotion from '../framerMotion/AnimatedMotion';
const i18n = require('../utils/i18n')

const Portfolio = () => {
    const { language, setLanguage } = useContext(LanguageContext)


    const portfolios = [
        {
            id: 1,
            src: memorygame,
            title: i18n.text(language, i18n.MAP['portfolio-memorygame']),
            link: "https://github.com/sz-adam/react-memorygame-tailwindcss",
            demo: "https://sz-adam.github.io/memory-pages/"
        },
        {
            id: 2,
            src: quiz,
            title: i18n.text(language, i18n.MAP['portfolio-quiz']),
            link: "https://github.com/sz-adam/react-quiz",
            demo: "https://sz-adam.github.io/react-quiz-pages/"

        },

        {
            id: 3,
            src: movie,
            title: i18n.text(language, i18n.MAP['portfolio-movie']),
            link: "https://github.com/sz-adam/react-movie-2.0",
            demo: "https://sz-adam.github.io/movie-2.0-pages/"

        },
        {
            id: 4,
            src: angularTodo,
            title: i18n.text(language, i18n.MAP['portfolio-angularTodo']),
            link: "https://github.com/sz-adam/Todo-list-angular-PrimeNg-",
            demo: "https://sz-adam.github.io/angular-todo-pages/"
        },

        {
            id: 5,
            src: angularpokemon,
            title: i18n.text(language, i18n.MAP['portfolio-angularPokemon']),
            link: "https://github.com/sz-adam/angular-pokemon",
            demo: "https://sz-adam.github.io/pages-pokemon/"
        },

    ]

    return (
        <div id="portfolio" className='portfolio-container'>
            <div className='portfolio-header' id="portfolio">
            <AnimatedMotion animationName="textAnimation" > 
                <p >{i18n.text(language, i18n.MAP['portfolio-title'])}</p>
            </AnimatedMotion>
            </div>

            <div className='portfolio-items'>
                {portfolios.map((portfolio) => (
                    <AnimatedMotion animationName="portfolioAnimations" key={portfolio.id}>
                         <AnimatedMotion animationName="ItemAnimation" >
                        <div  className='portfolio-item'>
                            <img className='portfolio-image' src={portfolio.src} alt={portfolio.title} />

                            <div className='portfolio-titles'>
                                <p className='portfolio-text'>{portfolio.title}</p>
                                <div className='portfolio-buttons'>
                                    <a href={portfolio.demo}><button className='portfolio-demo-button'><AiOutlineEye size={25} /></button></a>
                                    <a href={portfolio.link}><button className='portfolio-code-button'><FiGithub size={25} /></button></a>

                                </div>
                            </div>
                        </div>
                        </AnimatedMotion>
                    </AnimatedMotion>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
