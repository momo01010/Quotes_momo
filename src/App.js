import {useState} from "react";
import data from "./Quotes.json";
import './App.css';

function App() {
  const randomPosition = (max) => {
      return Math.floor(Math.random() * max.length );
  };

  const backColors = [

  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#8DFF33",
  "#33FFEB",
  "#FFC75F",
  "#F9F871"
  ]

  // ? Initial State
  const [quote, setQuote] = useState(data.quotes[randomPosition(data.quotes)])
  const [currentColor, setCurrentColor] = useState(backColors[randomPosition(backColors)])

  const handlerChangeQuote = () => {
    setQuote(data.quotes[randomPosition(data.quotes)])
    setCurrentColor(backColors[randomPosition(backColors)])
  }



  return (
      <div className="App">
          <header className="App-header" style={{backgroundColor : currentColor}} >
            <h3>{quote.quote}</h3>
            <p>{quote.author}</p>
            <button onClick={handlerChangeQuote} >Next</button>
          </header>
      </div>
  );
}

export default App;