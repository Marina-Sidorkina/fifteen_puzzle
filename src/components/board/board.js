import React from 'react';
import Tile from '../tile';
import './board.css'

const Board = ({ tiles }) => {

  const elements = tiles.map((tile, index) => {
    return (
      <li key={ index } className='board-item'>
        <Tile
          data={ tile }
          index={ index + 1 }
          onClick={ () => console.log(index) }
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