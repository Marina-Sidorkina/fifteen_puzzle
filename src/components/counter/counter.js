import React from 'react';
import './counter.css';

const Counter = ({ value, resetStatus }) => {
  let cls = (resetStatus === 0) ? ('counter stopIndicator') : 'counter';

  return (
    <div className={ cls }>
      { value }
    </div>
  )
}

export default Counter;
