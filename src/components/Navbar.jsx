import React, { useContext, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Navbar.css'
import { LanguageContext } from '../context/LanguageContext'
import Flag from './Flag'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { selectedTheme } = useContext(ThemeContext)
  const { navbarcolor, bodybackgroundColor, navbarTextcolor } = selectedTheme
  const { language, setLanguage } = useContext(LanguageContext)

  const i18n = require('../utils/i18n')

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (
    <div className='navbar-container' >
      <div className="navbar" style={{ backgroundColor: bodybackgroundColor }}>
        <div className="logo">
          <p>Adam</p>
        </div>

        <div className='flag'>
          <Flag />
        </div>


        <ul className={`nav-menu ${isOpen ? "active" : ""}`} style={isOpen ? { backgroundColor: bodybackgroundColor } : {}}>
          <li className="flag-mobile">
            <Flag />
          </li>

          <li className="nav-item" >
            <Link  smooth={true} duration={500} style={{ color: navbarTextcolor }} to="home" onClick={handleLinkClick}>{i18n.text(language, i18n.MAP['navbar-home'])}  </Link>
          </li>
          <li className="nav-item" >
            <Link smooth={true} duration={500} style={{ color: navbarTextcolor }} to="portfolio" onClick={handleLinkClick}>{i18n.text(language, i18n.MAP['navbar-portfolio'])}</Link>
          </li>
          <li className="nav-item" >
            <Link smooth={true} duration={500} style={{ color: navbarTextcolor }} to="skills" onClick={handleLinkClick}>{i18n.text(language, i18n.MAP['navbar-skills'])}</Link>
          </li>
          <li className="nav-item" >
            <Link smooth={true} duration={500} style={{ color: navbarTextcolor }} to="contact" onClick={handleLinkClick}>{i18n.text(language, i18n.MAP['navbar-contact'])}</Link>
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
    </div>
  );
};
export default Navbar




