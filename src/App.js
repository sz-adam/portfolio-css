
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { useEffect, useState } from 'react'
import { useContext } from 'react';

import { ThemeContext } from './context/ThemeContext';
import Loading from './components/Loading'
function App() {
  const [loading, setLoading] = useState(true);
  const { selectedTheme } = useContext(ThemeContext)
  const { bodybackgroundColor, textColor } = selectedTheme



//Loading részt befejezni !!!!!


  //useEffect(() => {
    // Hosszabb folyamat vagy adatlekérés után
  //  setLoading(false); // Befejezi a betöltést
 // }, []);
 useEffect(() => {
  // Simuláljuk a betöltést egy késleltetett idő után
  setTimeout(() => {
    setLoading(false);
  }, 1000); // 3 másodperc után állítja át a betöltési állapotot
}, []);
  return (
    <div style={{ backgroundColor: bodybackgroundColor, color: textColor }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Home />
          <Portfolio />
          <Skills />
          <Contact />
        </>
      )}
    </div>
  );

}

export default App;
