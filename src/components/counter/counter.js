import React from 'react';
import './counter.css';

const Counter = ({ value }) => {
  return (
    <div className="counter">{ value }</div>
  )
}

export default Counter;