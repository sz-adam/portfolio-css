import { AiOutlineMail } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import "../styles/Contact.css"
import { useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from "../context/LanguageContext";
import AnimatedMotion from '../framerMotion/AnimatedMotion';

const i18n = require('../utils/i18n')

const Contact = (props) => {
  const { selectedTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext)
  const { textColor } = selectedTheme;
  
  return (
    <div id="contact" >
      <div className="contact-header">
        <AnimatedMotion animationName="textAnimation" >
          <h2>{i18n.text(language, i18n.MAP['contact-contact'])}</h2>
        </AnimatedMotion>

      </div>
     
      <div className="contact-details">
      <AnimatedMotion animationName="contactLinksAnimation" >
        <div className="social-links">
          <div className="social-link" >
            <a href="https://github.com/sz-adam?tab=repositories" style={{ color: textColor }}><BsGithub /><span>Github</span> </a>

          </div>
          <div className="social-link">
            <a><AiOutlineMail /> <span>szaboadam255@gmail.com </span> </a>
          </div>
          <div className="social-link">
            <a href="https://www.linkedin.com/in/%C3%A1d%C3%A1m-szab%C3%B3-06733527a/" style={{ color: textColor }}><BsLinkedin /><span>linkedin</span> </a>
          </div>

        </div>
        </AnimatedMotion>
      
        
      
      </div>
    </div>
  );
};

export default Contact;