import React from 'react';
import Timer from '../timer';
import Counter from '../counter';
import './score.css';

const Score = ({ counterValue, timer, gamesCount, stopColor }) => {
  return (
    <div className="score">
      <Timer
        key={ gamesCount + 1 }
        control={ gamesCount }
        stopColor={ stopColor }
      />
      <Counter 
        value={ counterValue }
        stopColor={ stopColor }
      />
    </div>
  )
}

export default Score;