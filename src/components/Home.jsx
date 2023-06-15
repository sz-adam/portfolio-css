import React from 'react'
import Me4 from "../images/me4.png"
import { RiArrowRightSLine } from "react-icons/ri"
import "../styles/Home.css"
import oneletrajz from "../images/Önéletrajz.pdf"
import MultiColor from '../MultiColor/MultiColor'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext'
const i18n = require('../utils/i18n')



const Home = () => {
    const { selectedTheme } = useContext(ThemeContext)
    const { boxShadow } = selectedTheme
    const { language, setLanguage } = useContext(LanguageContext)

    return (
        <div id="home" >
            <div className="home-content">
                <div className="home-title">
                    <h1>{i18n.text(language, i18n.MAP['home-name'])} </h1>
                    <h3> {i18n.text(language, i18n.MAP['home-junior'])}</h3>
                    <p>{i18n.text(language, i18n.MAP['home-about'])}
                    </p>

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
                </div>
                <div className='image-color'>
                 
                    <div className='home-image'>
                        <img src={Me4}  alt="my portfolio" style={{ boxShadow: boxShadow }} />
                    </div>
                    <div className="color-mode">
                        <MultiColor />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home


