import React, { useContext, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Navbar.css'
import { LanguageContext } from '../context/LanguageContext'
import enflag from '../images/flag/uk-flag.gif'
import huflag from '../images/flag/hu-flag.gif'
import gmflag from '../images/flag/gm-flag.gif'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { selectedTheme } = useContext(ThemeContext)
  const { navbarcolor, bodybackgroundColor, textColor, navbarTextcolor } = selectedTheme
  const { language, setLanguage } = useContext(LanguageContext)

  const i18n = require('../utils/i18n')

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (
    <div className="navbar" style={{ backgroundColor: navbarcolor }}>
      <div className="logo">
        <p>Adam</p>
      </div>

      <div className='flag'>
        <img src={enflag} alt=""
          onClick={() => { setLanguage('en') }}
          width={40}
          height={25}
        />
        <img src={huflag} alt=""
          onClick={() => { setLanguage('hu') }}
          width={40}
          height={25}
        />
        <img src={gmflag} alt=""
          onClick={() => { setLanguage('de') }}
          width={40}
          height={25}
        />
      </div>


      <ul className={`nav-menu ${isOpen ? "active" : ""}`} style={isOpen ? { backgroundColor: bodybackgroundColor } : {}}>
        <li className="flag-mobile">

          <img src={enflag} alt=""
            onClick={() => { setLanguage('en') }}
            width={40}
            height={25}
          />
          <img src={huflag} alt=""
            onClick={() => { setLanguage('hu') }}
            width={40}
            height={25}
          />
          <img src={gmflag} alt=""
            onClick={() => { setLanguage('de') }}
            width={40}
            height={25}
          />

        </li>

        <li className="nav-item" onClick={handleLinkClick}>
          <a style={{ color: navbarTextcolor }} href="#home">{i18n.text(language, i18n.MAP['navbar-home'])} </a>
        </li>
        <li className="nav-item" onClick={handleLinkClick}>
          <a style={{ color: navbarTextcolor }} href="#portfolio">{i18n.text(language, i18n.MAP['navbar-portfolio'])}</a>
        </li>
        <li className="nav-item" onClick={handleLinkClick}>
          <a style={{ color: navbarTextcolor }} href="#skills">{i18n.text(language, i18n.MAP['navbar-skills'])}</a>
        </li>
        <li className="nav-item" onClick={handleLinkClick}>
          <a style={{ color: navbarTextcolor }} href="#contact">{i18n.text(language, i18n.MAP['navbar-contact'])}</a>
        </li>

      </ul>
      <div className="hamburger" onClick={handleMenuClick}>
        {isOpen ? (
          <FaTimes size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </div>
    </div>
  );
};
export default Navbar




