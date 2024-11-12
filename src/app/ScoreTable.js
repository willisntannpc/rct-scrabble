import React from 'react';

function ScoreTable({ score }) {
  return (
    <div className="score-table">
      <h2>Score Table</h2>
      <p>Player 1: {score.player1}</p>
      <p>Player 2: {score.player2}</p>
    </div>
  );
}

export default ScoreTable;
