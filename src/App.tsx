import React, { useState, useEffect } from 'react';
import './App.css';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface Quote {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  length: number;
}

const getRandomColor = () => {
  const h = Math.floor(Math.random() * 360); // Tonos de color aleatorios (0-360)
  const s = Math.floor(Math.random() * 25) + 70; // Saturación entre 70 y 95
  const l = Math.floor(Math.random() * 25) + 65; // Luminosidad entre 65 y 90
  return `hsl(${h}, ${s}%, ${l}%)`; // Devolver color en formato HSL
};


const updateQuote = async (setQuote: React.Dispatch<React.SetStateAction<Quote>>, setBgColor: React.Dispatch<React.SetStateAction<string>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  setLoading(true); // Iniciar la carga
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error(`Failed to fetch quote. Status code: ${response.status}`);
    }
    const data: Quote = await response.json();
    setQuote(data);
    const newColor = getRandomColor();
    setBgColor(newColor);
  } catch (error) {
    console.error(error);
    setQuote({ 
      _id: "", 
      tags: [], 
      content: "Oops... Something went wrong", 
      author: "", 
      length: 0 
    });
  } finally {
    setLoading(false); // Finalizar la carga
  }
};

const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
);

const App: React.FC = () => {
  const [quote, setQuote] = useState<Quote>({
    _id: "",
    tags: [],
    content: "",
    author: "",
    length: 0
  });

  const [bgColor, setBgColor] = useState<string>('#ffffff'); // Estado para el color de fondo
  const [loading, setLoading] = useState<boolean>(false); // Estado para controlar la carga

  useEffect(() => {
    updateQuote(setQuote, setBgColor, setLoading); 
  }, []); 

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote.content} - ${quote.author}`)}`;

  return (
    <div className='background' style={{ backgroundColor: bgColor }}>
      {loading ? ( // Mostrar el loader si loading es true
        <Loader />
      ) : (
        <div id="quote-box">
          <div className='quote-content'>
            <h2 id="text">
              <FaQuoteLeft size="30" style={{ marginRight: "10px", color: bgColor }}/>
                {quote.content}
              <FaQuoteRight size="30" style={{ marginLeft: "10px", color: bgColor }}/></h2>
            <h4 id="author">- {quote.author}</h4>
            <div id="button-container">
              <button id="new-quote" style={{ backgroundColor: bgColor, color: 'rgba(1, 1, 1, 0.87)' }} onClick={() => updateQuote(setQuote, setBgColor, setLoading)}>Change Quote</button>
              <a id="tweet-quote" style={{ backgroundColor: bgColor, color: 'rgba(1, 1, 1, 0.87)'}} href={tweetUrl} target="_blank" rel="noopener noreferrer" title='Tweet quote'><FaTwitter/></a>
            </div>
            <p>by aguuxdev</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
