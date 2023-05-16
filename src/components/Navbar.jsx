import React, { useContext, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { selectedTheme } = useContext(ThemeContext)
  const { navbarcolor, bodybackgroundColor, textColor } = selectedTheme

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
      <ul className={`nav-menu ${isOpen ? "active" : ""}`} style={isOpen ? { backgroundColor: bodybackgroundColor } : {}}>
        <li className="nav-item" onClick={handleLinkClick}>
          <a style={{ color: textColor }} href="#home" >Főoldal</a>
        </li>
        <li className="nav-item" onClick={handleLinkClick}>
          <a style={{ color: textColor }} href="#portfolio">Munkáim</a>
        </li>
        <li className="nav-item" onClick={handleLinkClick}>
          <a style={{ color: textColor }} href="#skills">Készségek</a>
        </li>
        <li className="nav-item" onClick={handleLinkClick}>
          <a style={{ color: textColor }} href="#contact">Kapcsolat</a>
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




