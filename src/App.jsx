import React, { useState, useEffect } from 'react';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(() => {
    const savedGameState = sessionStorage.getItem('isGameStarted');
    return savedGameState ? JSON.parse(savedGameState) : false;  // If value exists, use it, otherwise default to false
  });

  // Function to toggle the game state and save it in localStorage
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => {
      const newState = !prev;
      sessionStorage.setItem('isGameStarted', JSON.stringify(newState)); // Save the state to localStorage
      return newState;
    });
  };

  return (
    <>
      {
        isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />
      }
    </>
  );
};

export default App;
