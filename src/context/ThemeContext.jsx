import {useState, useEffect, createContext } from "react";
import theme from '../components/Theme';

export const ThemeContext = createContext(null);


export const ThemeProvider = ({ children }) => {
    // Az aktuális színt a state-ben tároljuk, kezdetben a localStorage-ban mentett értéket vagy alapértelmezetten a 'white' értéket használjuk
    const [color, setColor] = useState(() => {
        const savedColor = localStorage.getItem('color')
        return savedColor ? savedColor : 'white'
    })

    // A szín változásakor frissítjük a localStorage-ban tárolt értéket
    useEffect(() => {
        localStorage.setItem('color', color)
    }, [color])

    // A szín megváltoztatására szolgáló függvény
    const changedColor = (newColor) => {
        setColor(newColor)
    }

    // A kiválasztott témát a `theme` objektumból az aktuális szín alapján kiválasztjuk
    const selectedTheme = theme[color];

    // A ThemeContext.Provider komponenssel rendelkező kontextust biztosítjuk a 
    //gyermekek számára, és az értéke a szín, a szín megváltoztatására 
    //szolgáló függvény és a kiválasztott téma
    return (
        <ThemeContext.Provider value={{ color, changedColor, selectedTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider