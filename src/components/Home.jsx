import React from 'react'
import Me4 from "../images/me4.png"
import { RiArrowRightSLine } from "react-icons/ri"
import "../styles/Home.css"
import oneletrajz from "../images/Önéletrajz.pdf"
import MultiColor from '../MultiColor/MultiColor'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext'
import AnimatedMotion from '../framerMotion/AnimatedMotion';
const i18n = require('../utils/i18n')



const Home = () => {
    const { selectedTheme } = useContext(ThemeContext)
    const { boxShadow } = selectedTheme
    const { language, setLanguage } = useContext(LanguageContext)

    return (
        <div id="home" >
            <div className="home-content">
                <div className="home-title">
                    <AnimatedMotion animationName="homeH1Animation">
                        <h1>{i18n.text(language, i18n.MAP['home-name'])} </h1>
                    </AnimatedMotion>
                    <AnimatedMotion animationName="homeH3Animation">
                        <h3> {i18n.text(language, i18n.MAP['home-junior'])}</h3>
                    </AnimatedMotion>
                    <AnimatedMotion animationName="homePAnimation">
                        <p>{i18n.text(language, i18n.MAP['home-about'])}
                        </p>
                    </AnimatedMotion>
                    <AnimatedMotion animationName="homeButtonAnimation">
                        <div className='home-button'>
                            <a href="#portfolio" className='home-a' >
                                {i18n.text(language, i18n.MAP['home-portfolio'])}
                                <span><RiArrowRightSLine size={25} /></span>
                            </a>
                            <a href={oneletrajz} download className='home-a'>
                                {i18n.text(language, i18n.MAP['home-cv'])}
                                <span><RiArrowRightSLine size={25} /></span>
                            </a>
                        </div>
                    </AnimatedMotion>

                </div>
                <AnimatedMotion animationName="homeImageAnimation">
                    <div className='image-color'>
                        <div className='home-image'>
                            <AnimatedMotion animationName="ItemAnimation" >
                                <img src={Me4} alt="my portfolio" style={{ boxShadow: boxShadow }} />
                            </AnimatedMotion>
                        </div>
                        <div className="color-mode">
                            <MultiColor />
                        </div>
                    </div>
                </AnimatedMotion>
            </div>
        </div >


    )
}

export default Home


