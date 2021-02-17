import React from 'react';
import Timer from '../timer';
import Counter from '../counter';
import './score.css';

const Score = ({ counterValue, timer, launchNewGame }) => {
  return (
    <div className="score">
      <Timer
        key={ launchNewGame }
      />
      <Counter 
        value={ counterValue }
        key={ counterValue }
      />
    </div>
  )
}

export default Score;