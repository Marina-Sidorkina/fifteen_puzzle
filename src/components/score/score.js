import React from 'react';
import Timer from '../timer';
import Counter from '../counter';
import './score.css';

const Score = ({ counterValue, resetStatus, winner }) => {
  return (
    <div className="score">
      <Timer
        key={ resetStatus + 1 }
        resetStatus={ resetStatus }
        winner={ winner }
      />
      <Counter 
        value={ counterValue }
        resetStatus={ resetStatus }
      />
    </div>
  )
}

export default Score;
