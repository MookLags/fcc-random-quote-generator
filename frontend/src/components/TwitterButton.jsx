import { useState, useEffect } from 'react';
import TwitterIcon from './TwitterIcon';

const TwitterButton = ({ buttonColor, onButtonClick }) => {
  const [isHovered, setIsHovered] = useState(false);
   return (
    <button
       onClick={onButtonClick} 
         style={{
          width: "35px",
          height: "35px",
          marginLeft: "40px",
          marginBottom: "35px",
          padding: "5px",
          color: "white",
          backgroundColor: buttonColor,
          transition: "background-color 0.5s ease-in-out",
          border: "none",
          borderRadius: "5px",
          filter: isHovered ? "brightness(1.1)" : "brightness(1)",
          cursor: isHovered ? "pointer" : "normal"
        }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
     ><TwitterIcon /></button>
  )
}

export default TwitterButton;
