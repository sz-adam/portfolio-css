import React from 'react'
import Me4 from "../images/me4.png"
import { RiArrowRightSLine } from "react-icons/ri"
import "../styles/Home.css"
import oneletrajz from "../images/Önéletrajz.pdf"
import MultiColor from '../MultiColor/MultiColor'

import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';



const Home = () => {


    const { selectedTheme } = useContext(ThemeContext)
    const { boxShadow } = selectedTheme
    return (
        <div id="home" >
            <div className="home-content">
                <div className="home-title">
                    <h1>Szia Szabó Ádámnak hívnak </h1>
                    <h3> és egy Junior FrontEnd fejlesztő vagyok</h3>
                    <p>A programozás világa mindig is vonzott,
                        és szakmai fejlődésem érdekében nemcsak autodidakta
                        módon tanultam, hanem 2022-ben beiratkoztam egy bootcampre is.
                        Azóta sikerült megtalálnom azt a területet, amely különösen izgalmasnak és
                        kihívásokkal telinek tűnik számomra. Szeretem az új technológiákat és mindig
                        nyitott vagyok az újabb és újabb lehetőségekre, melyek további fejlődést
                        jelentenek számomra. Azon fáradozom, hogy folyamatosan bővítsem és mélyítsem
                        szakmai tudásomat, valamint fejlesszem a készségeimet,
                        hogy még eredményesebben és hatékonyabban tudjak dolgozni a területen.
                    </p>

                    <div className='home-button'>
                        <a href="#portfolio" className='home-a' >
                            Portfolio
                            <span><RiArrowRightSLine size={25} /></span>
                        </a>
                        <a href={oneletrajz} download className='home-a'>
                            Töltsd le a CV-t
                            <span><RiArrowRightSLine size={25} /></span>
                        </a>
                    </div>
                </div>
                <div className='image-color'>
                 
                    <div className='home-image'>
                        <img src={Me4} alt="my portfolio" style={{ boxShadow: boxShadow }} />
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


