import React from 'react';
import Timer from '../timer';
import Counter from '../counter';
import './score.css';

const Score = ({ counterValue, timer, gamesCount, stopIndicator, winner }) => {
  return (
    <div className="score">
      <Timer
        key={ gamesCount + 1 }
        control={ gamesCount }
        stopIndicator={ stopIndicator }
        winner={ winner }
      />
      <Counter 
        value={ counterValue }
        stopIndicator={ stopIndicator }
      />
    </div>
  )
}

export default Score;