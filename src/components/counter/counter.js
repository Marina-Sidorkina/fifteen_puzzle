import React from 'react';
import './counter.css';

const Counter = ({ value, stopColor }) => {
  let cls = stopColor ? ('counter stopColor') : 'counter';

  return (
    <div className={ cls }>{ value }</div>
  )
}

export default Counter;