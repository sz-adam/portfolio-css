import { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

import emailjs from '@emailjs/browser';
import "../styles/Contact.css"
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const { textColor } = selectedTheme;
  const form = useRef();
  const [data, setData] = useState({ name: '', email: '', message: '' });

  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });

  };
  const handleResetInput = () => {
    setData({ name: '', email: '', message: '' });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (data.name || data.email || data.tel || data.message) {
      emailjs.sendForm(
        'service_pnbxbvc',
        'template_0j85ygy',
        form.current,
        '4llvCIQE2nHFX7Mjz')
        .then((result) => {
          console.log(result.text)
          console.log("massage.sent");
          setSuccess(true);  
          handleResetInput();
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }, (error) => {
          console.log(error.text);
        });
    }
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
            <a href="https://www.linkedin.com/in/%C3%A1d%C3%A1m-szab%C3%B3-06733527a/" style={{ color: textColor }}><BsLinkedin /><span>linkedin</span> </a>
          </div>

        </div>
        <div className="contact-form">

          <form onSubmit={sendEmail} ref={form}>
            <div className='error-succes'>
              {success && <div className="success">Az üzenetet sikeresen elküldtük!</div>}
            </div>
            <input type="text" value={data.name} onChange={handleChange} placeholder="Add meg a neved..." required id="name" name="name" />
            <input type="email" value={data.email} onChange={handleChange} placeholder="Add meg az email címed..." required name="email" id="email" />
            <textarea name="message" value={data.message} onChange={handleChange} placeholder="Írd be az üzenetet..." rows="10" id="message" required></textarea>

            <button type="submit" value="Send">Küldés</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;