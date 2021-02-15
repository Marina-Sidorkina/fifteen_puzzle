import React from 'react';
import Timer from '../timer';
import Counter from '../counter';
import './score.css';

const Score = ({ counterValue }) => {
  return (
    <div className="score">
      <Timer />
      <Counter 
        value={ counterValue }
        key={ counterValue }
      />
    </div>
  )
}

export default Score;