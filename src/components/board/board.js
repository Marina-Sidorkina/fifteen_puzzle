import React from 'react';
import Tile from '../tile';
import './board.css'

const Board = ({ coordinates, tiles, onClick }) => {

  const elements = tiles.map((tile, index) => {
    return (
      <li 
        key={ index }
        className='board-item'
        datax={coordinates[index].x}
        datay={coordinates[index].y}
      >
        <Tile
          data={ tile }
          onClick={ (value) => onClick(value, index) }
        />
      </li>
    );
  })
  
  return (
    <ul className="board">
      { elements }
    </ul>
  )
}

export default Board;