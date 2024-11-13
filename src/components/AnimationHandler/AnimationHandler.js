import React, { useEffect } from 'react';

function AnimationHandler({ words, turn, onTurnEnd, updateScore }) {
  useEffect(() => {
    if (words.length > 0) {
      const timer = setTimeout(() => {
        const word = words[words.length - 1];
        console.log(`Animating word: ${word.text}`);
        
        // After animation, update score and end turn
        updateScore(word.text.length); // Score example
        onTurnEnd();
      }, 1000); // Animation duration example

      return () => clearTimeout(timer);
    }
  }, [words, turn]);

  return null; // No visual rendering needed
}

export default AnimationHandler;
