import {useState, useEffect, createContext } from "react";
import theme from '../components/Theme';

export const ThemeContext = createContext(null);


export const ThemeProvider = ({ children }) => {
   //localStorage='white'
    const [color, setColor] = useState(() => {
        const savedColor = localStorage.getItem('color')
        return savedColor ? savedColor : 'white'
    })

    // localStorage update
    useEffect(() => {
        localStorage.setItem('color', color)
    }, [color])

   
    const changedColor = (newColor) => {
        setColor(newColor)
    }

   
    const selectedTheme = theme[color];
    return (
        <ThemeContext.Provider value={{ color, changedColor, selectedTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider