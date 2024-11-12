import React, { useState } from 'react';

function TileRack({ turn, setWords }) {
  const [rack, setRack] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G']);

  const placeWord = () => {
    // Example word placement (should be interactive in a complete version)
    const word = { text: 'WORD', row: 7, col: 7, player: turn };
    setWords(prev => [...prev, word]);
  };

  return (
    <div className="tile-rack">
      <h2>Player {turn}'s Rack</h2>
      {rack.map((tile, index) => (
        <span key={index} className="tile">
          {tile}
        </span>
      ))}
      <button onClick={placeWord}>Place Word</button>
    </div>
  );
}

export default TileRack;
