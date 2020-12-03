import React from 'react';
import './board.css'

const Board = ({ tiles }) => {

  const elements = tiles.map((tile, index) => {
    return (
      <li key={ index } className='board-item' id={ index + 1 }>
        <div style={{
          width: '65px',
          height: '65px',
          backgroundColor: '#98FF98',
          margin: 'auto',
          borderRadius: '5px'
        }}></div>
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