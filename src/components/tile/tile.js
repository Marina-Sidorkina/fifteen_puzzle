import React from 'react';
import './tile.css';

const Tile = ({ data, emptyCellValue, stopIndicator }) => {
  let value = data === emptyCellValue ? '' : data;
  let classList = data === emptyCellValue ? 'tile zero' : 'tile';

  classList = stopIndicator && 
    (data !== emptyCellValue) ? 
    ('stopIndicator ' + classList) : classList;

  return (
    <div className={ classList }>
      { value }
    </div>
  );
}

export default Tile;