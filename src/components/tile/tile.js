import React from 'react';
import './tile.css'

const Tile = ({ data, index, onClick }) => {
  const value = data === 0 ? '' : data;
  const classList = data === 0 ? 'tile zero' : 'tile';

  return (
    <div 
      className={ classList }
      id={ index }
      onClick={ onClick }
    >
      { value }
    </div>
  ); 
}

export default Tile;