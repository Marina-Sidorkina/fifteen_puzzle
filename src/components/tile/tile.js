import React from 'react';
import './tile.css';

const Tile = ({ data, emptyCellValue }) => {
  const value = data === emptyCellValue ? '' : data;
  const classList = data === emptyCellValue ? 'tile zero' : 'tile';

  return (
    <div className={ classList }>
      { value }
    </div>
  );
}

export default Tile;