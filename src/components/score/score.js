import React from 'react';
import Timer from '../timer';
import Counter from '../counter';
import './score.css';

const Score = ({ counterValue }) => {
  return (
    <div className="score">
      <Timer
        start={ true }
      />
      <Counter 
        value={ counterValue }
        key={ counterValue }
      />
    </div>
  )
}

export default Score;