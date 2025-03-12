import { useState, useEffect } from 'react';

const NewQuoteButton = ({ backgroundColor, onButtonClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button id="new-quote"
       onClick={onButtonClick} 
         style={{
          width: "100px",
          height: "35px",
          marginRight: "40px",
          marginBottom: "35px",
          color: "white",
          backgroundColor: backgroundColor,
          transition: 'background-color 0.5s ease-in-out',
          border: "none",
          borderRadius: "5px",
          filter: isHovered ? "brightness(1.1)" : "brightness(1)",
          cursor: isHovered ? "pointer" : "normal"
        }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
     >New Quote</button>
  )
}

export default NewQuoteButton;
