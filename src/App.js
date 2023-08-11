
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Loading from './components/Loading'
import { LanguageContext, LanguageContextDefaults } from './context/LanguageContext';

function App() {
  const [loading, setLoading] = useState(true);
  const { selectedTheme } = useContext(ThemeContext)
  const { bodybackgroundColor, textColor } = selectedTheme
  const [language, setLanguage] = useState(LanguageContextDefaults.value);

  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {

    if (localStorage.getItem("language") !== null) {
      setLanguage(localStorage.getItem("language"));
    }
    setInitialized(true);
  },[])

  if (initialized) {
    localStorage.setItem("language", language);
  }



  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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
    </LanguageContext.Provider>
  );

}

export default App;
