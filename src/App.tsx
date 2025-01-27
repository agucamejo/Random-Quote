import React, { useState, useEffect } from 'react';
import './App.css';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface Quote {
  slip: {
    slip_id: string;
    advice: string;
  }
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
    const response = await fetch("https://api.adviceslip.com/advice");
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
      slip:{
        slip_id: "", 
        advice: "Oops... Something went wrong", 
      }
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
    slip: {
      slip_id: "",
      advice: ""
    }
  });

  const [bgColor, setBgColor] = useState<string>('#ffffff'); // Estado para el color de fondo
  const [loading, setLoading] = useState<boolean>(false); // Estado para controlar la carga

  useEffect(() => {
    updateQuote(setQuote, setBgColor, setLoading); 
  }, []); 

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote.slip.advice}`)}`;

  return (
    <div className='background' style={{ backgroundColor: bgColor }}>
      {loading ? (
        <Loader />
      ) : (
        <div id="quote-box">
          <div className='quote-content'>
            <h2 id="text">
              <FaQuoteLeft size="30" style={{ marginRight: "10px", color: bgColor }}/>
                {quote.slip.advice}
              <FaQuoteRight size="30" style={{ marginLeft: "10px", color: bgColor }}/>
            </h2>
            <h4 id="author">Anonymous author</h4>
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
