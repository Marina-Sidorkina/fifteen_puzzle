import React from 'react';
import './tile.css';

const Tile = ({ data, emptyCellValue, resetStatus }) => {
  let value = data === emptyCellValue ? '' : data;
  let classList = data === emptyCellValue ? 'tile zero' : 'tile';

  classList = (resetStatus === 0) && 
    data !== emptyCellValue ? 
    ('stopIndicator ' + classList) : classList;

  return (
    <div className={ classList }>
      { value }
    </div>
  );
}

export default Tile;
