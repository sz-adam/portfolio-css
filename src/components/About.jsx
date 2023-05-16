import React from 'react';
import '../styles/About.css';
import me2 from "../images/me2.png"

const About = () => {
  return (
    <div className="about" id="about">
      <h2>Bemutatkozás</h2>
      <div className="content">
        <div className="img-container">
          <img className='about-img' src={me2} alt="" />
        </div>
        <div className='about-title'>
          <p >
            "Üdvözlöm! Front-end fejlesztői bootcamp-et végeztem 2023-ban, 
            melyen elsajátítottam a legújabb fejlesztési trendeket és eszközöket. 
            Korábban más területen dolgoztam, 
            de a programozás iránti lelkesedésem miatt döntöttem úgy, 
            hogy továbbképezzem magamat és fejlesszem a készségeimet.
             Munkáim során megtanultam a csapatmunka fontosságát, 
             és mindig törekszem a legjobb hatékonyság elérésére, 
             ugyanakkor ha szükséges precízen tudok egyedül is dolgozni. 
             Mindig nyitott vagyok az új kihívásokra, mert ezekből tudok a 
             legtöbbet tanulni és fejlődni. Webfejlesztés mellett érdekel a 
             mobil alkalmazások fejlesztése is, különösen az Ionic és a React Native fejlesztési keretek. Szeretném elsajátítani őket is."
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
