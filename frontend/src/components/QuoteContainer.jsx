import { useState, useEffect, useRef } from 'react';
import HomePage from '../pages/HomePage';
import NewQuoteButton from './NewQuoteButton';
import TwitterButton from './TwitterButton';

const QuoteContainer = ({ changeColor, backgroundColor }) => {
  const [randomQuote, setRandomQuote] = useState({});
  const [randomColor, setRandomColor] = useState("");
  const quoteFetched = useRef(false);

  const twitterUrlStart = "https://x.com/intent/post?hashtags=quotes&related=freecodecamp&text="
  const twitterUrlEnd = `"${randomQuote.quote}" ${randomQuote.author}`
  
  const fetchRandomQuote = () => {
    fetch("http://localhost:5000/api/quotes/random", {mode: 'cors'})
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setRandomQuote(data);
    })
  }
  
  useEffect(() => {
    if (quoteFetched.current) return;
    quoteFetched.current = true;
    fetchRandomQuote();
  }, []);

  return (
    <div id="quote-box"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "250px",
        width: "500px",
        margin: "0",
        padding: "0",
        borderRadius: "15px",
        fontFamily: "sans-serif",
        backgroundColor: "white" 
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 5,
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <p
        id="text"
        style={{
           display: "flex",
           fontSize: "28px",
           marginLeft: "12px",
           marginRight: "12px",
           color: backgroundColor,
           transition: 'color 0.5s ease-in-out',
           marginTop: "35px"
        }}>{randomQuote.quote}</p>
      </div>
      <div style={{display: "flex", justifyContent: "flex-end", flexDirection: "row"}}>
        <p
          id="author"
          style={{
            display: "flex",
            fontSize: "15px",
            fontStyle: "italic",
            width: "auto",
            textAlign: "right",
            marginRight: "40px",
            color: backgroundColor,
            transition: 'color 0.5s ease-in-out',
          }}
        >~ {randomQuote.author}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 5,
          width: "100%",
          paddingLeft: "30",
          paddingRight: "30",
        }}
      >
        <a id="tweet-quote" href={`twitter.com/intent/tweet/${twitterUrlEnd}`} target="_blank" rel="noopener noreferrer"><TwitterButton buttonColor={backgroundColor} /></a>
        <NewQuoteButton backgroundColor={backgroundColor} onButtonClick={() => {fetchRandomQuote(); changeColor();}}/>
      </div>
    </div>
  )
}

export default QuoteContainer;
