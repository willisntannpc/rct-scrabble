import React from 'react';

function Board({ words }) {
  return (
    <div className="board">
      {Array(15).fill(0).map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array(15).fill(0).map((_, colIndex) => (
            <div className="cell" key={colIndex}>
              {/* Placeholder for word/tiles to animate here */}
              {words.find(word => word.row === rowIndex && word.col === colIndex)?.text || ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
