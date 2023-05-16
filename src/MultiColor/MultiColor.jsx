import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import '../styles/Multicolor.css'


const MultiColor = () => {

    const { changedColor} = useContext(ThemeContext)

 
    const colorOptions = [
        { color: 'black', className: 'color-black' },
        { color: 'blue', className: 'color-blue' },
        { color: 'green', className: 'color-green' },
        { color: 'white', className: 'color-white' },
      ];
    return (
        <div className="multicolor">
      {colorOptions.map((option) => (
        <div className="theme-sec" key={option.color}>
          <div
            className={option.className}
            onClick={() => changedColor(option.color)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default MultiColor


