import React from 'react';
import './tile.css';

const Tile = ({ data, emptyCellValue, stopColor }) => {
  let value = data === emptyCellValue ? '' : data;
  let classList = data === emptyCellValue ? 'tile zero' : 'tile';

  classList = stopColor && 
    (data !== emptyCellValue) ? 
    ('stopColor ' + classList) : classList;

  return (
    <div className={ classList }>
      { value }
    </div>
  );
}

export default Tile;