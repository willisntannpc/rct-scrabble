import React, { useState } from 'react';
import Board from './components/Board';
import TileRack from './components/TileRack';
import AnimationHandler from './components/AnimationHandler';
import ScoreTable from './components/ScoreTable';

function App() {
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [turn, setTurn] = useState(1); // Alternates between Player 1 and Player 2
  const [words, setWords] = useState([]); // List of words to animate

  const updateScore = (points) => {
    setScore((prev) => ({
      ...prev,
      [`player${turn}`]: prev[`player${turn}`] + points,
    }));
  };

  const handleTurnEnd = () => {
    setTurn(turn === 1 ? 2 : 1); // Toggle between players
  };

  return (
    <div className="App">
      <ScoreTable score={score} />
      <Board words={words} />
      <TileRack turn={turn} setWords={setWords} />
      <AnimationHandler
        words={words}
        turn={turn}
        onTurnEnd={handleTurnEnd}
        updateScore={updateScore}
      />
    </div>
  );
}

export default App;
