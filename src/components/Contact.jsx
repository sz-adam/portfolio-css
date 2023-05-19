import { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

import emailjs from '@emailjs/browser';
import "../styles/Contact.css"
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {

  const { selectedTheme } = useContext(ThemeContext);
  const { textColor } = selectedTheme;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fy1aexn', 'template_yc74vmd', form.current, '4llvCIQE2nHFX7Mjz')
      .then((result) => {
        console.log(result.text)
        console.log("massage.sent");
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div id="contact" >
  <div className="contact-header">
  <h2>Kérlek lépj velem kapcsolatba</h2>

  </div>

  <div className="contact-details">
    <div className="social-links">
      <div className="social-link" >
        <a href="https://github.com/sz-adam?tab=repositories" style={{ color: textColor }}><BsGithub /><span>Github</span> </a>
  
      </div>
      <div className="social-link">
        <a><AiOutlineMail /> <span>szaboadam255@gmail.com</span> </a>     
      </div>
      <div className="social-link">
        <a href="/" style={{ color: textColor }}><BsLinkedin /><span>linkedin</span> </a>  
      </div>
     
    </div>

    <div className="contact-form">
  <form onSubmit={sendEmail} ref={form}>
    <input type="text" name="from_name" placeholder="Add meg a neved..." />
    <input type="email" name="from_email" placeholder="Add meg az email címed..." />
    <textarea name="message" placeholder="Írd be az üzenetet..." rows="10"></textarea>
    
    <button type="submit" value="Send">Küldés</button>
  </form>
</div>
  </div>
</div>
  );
};

export default Contact;