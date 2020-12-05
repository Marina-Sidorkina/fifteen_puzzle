import React from 'react';
import Tile from '../tile';
import './board.css'

const Board = ({ coordinates, tiles, onClick }) => {
  const elements = tiles.map((tile, index) => {
    return (
      <li key={ index } className='board-item'>
        <Tile
          data={ tile }
          onClick={ (value) => onClick(value, index, coordinates[index]) }
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