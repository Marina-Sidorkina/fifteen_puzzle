import React from 'react';
import './counter.css';

const Counter = ({ value, stopIndicator }) => {
  let cls = stopIndicator ? ('counter stopIndicator') : 'counter';

  return (
    <div className={ cls }>{ value }</div>
  )
}

export default Counter;