import './App.css';
import GuessNumber from './components/GuessNumber';
import GameConfig from './components/GameConfig';
import React, { useState } from 'react';

function App() {

  const getRandomicNumber = (config) => {
    return Math.floor(Math.random() * (config.upper - config.lower + 1) + config.lower)
  }

  const [config, setConfig] = useState({lower:1, upper:10})
  const [randomicNumber, setRandomicNumber] = useState(getRandomicNumber(config));

  const handleClickReset = () =>{ 
    setRandomicNumber(getRandomicNumber(config));
  }
  
    const change = (e) => {
      setConfig(previous=> 
        ({...previous, [e.target.name]: e.target.value})
      )
    }

  return (
    <>
      <GuessNumber config={config} change={change} randomicNumber={randomicNumber}></GuessNumber>
      <GameConfig config={config} change={change}></GameConfig>
      <button name='reset' onClick={handleClickReset}>Reset</button>

    </>
  );

}

export default App;
