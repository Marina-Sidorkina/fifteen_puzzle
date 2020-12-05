import React from 'react';
import './tile.css'

const Tile = ({ data, onClick }) => {
  const value = data === 16 ? '' : data;
  const classList = data === 16 ? 'tile zero' : 'tile';

  return (
    <div className={ classList } onClick={ () => onClick(value) }>
      { value }
    </div>
  ); 
}

export default Tile;