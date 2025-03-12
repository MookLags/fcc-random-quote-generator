import QuoteContainer from '../components/QuoteContainer';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [randomColor, setRandomColor] = useState("");

  const colorArray = [
    "#a4b6dd",
    "#d09292",
    "#c094cc",
    "#a2d0c0",
    "#c37892",
    "#a77cbf",
    "#f57a9c",
    "#f99f66",
    "#ffd758",
    "#a6d472",
    "#31b5d1"
  ]

  const getRandomColor = () => {
    let randomIndex = Math.floor(Math.random() * colorArray.length);
    let randomColor = colorArray[randomIndex];
    setRandomColor(randomColor);
  }

  useEffect(() => {
    getRandomColor();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        left: "0",
        top: "0",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: randomColor,
        transition: 'background-color 0.5s ease-in-out'
      }}
    >
      <QuoteContainer changeColor={getRandomColor} backgroundColor={randomColor} />
    </div>
  )
}

export default HomePage;
