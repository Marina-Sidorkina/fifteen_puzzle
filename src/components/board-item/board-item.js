import React from 'react';
import Tile from '../tile';
import './board-item.css';

const BoardItem = ({ index, tileValue, onClick, emptyCellValue }) => {

  return (
    <li
      key={ index }
      className='board-item'
      onClick={ () => onClick(tileValue, index) }
    >
      <Tile
        data={ tileValue }
        emptyCellValue={ emptyCellValue }
      />
    </li>
  ); 
}

export default BoardItem;