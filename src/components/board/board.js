import React, { Component } from 'react';
import BoardItem from '../board-item';
import './board.css'

export default class Board extends Component {
  constructor({checkWinner}) {
    super();

    this.state = {
      cellCoordinates: [
        {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0},
        {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1},
        {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2},
        {x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}
      ],
      tileValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    };

    this.onCellClick = this.onCellClick.bind(this);
  }

  componentDidUpdate() {
    const check = this.state.tileValues
      .every((tile, index) => tile === (index + 1));

    if(check) {
      this.props.checkWinner(true);
    };
  }
  
  checkMoveAbility(tileCellId, emptyCellId) {
    const emptyCellCoords = this.state.cellCoordinates[emptyCellId];
    const tileCellCoords = this.state.cellCoordinates[tileCellId];

    if(emptyCellCoords.y === tileCellCoords.y &&
      Math.abs(emptyCellCoords.x - tileCellCoords.x) === 1) {
        return true;
    }

    if(emptyCellCoords.x === tileCellCoords.x &&
      Math.abs(emptyCellCoords.y - tileCellCoords.y) === 1) {
        return true;
    }

    return false;
  }

  replaceTiles(emptyCellId, tileCellId, tileValue) {
    this.setState(({ tileValues }) => {
      const newArray = tileValues.slice();
      newArray.splice(emptyCellId, 1, tileValue);
      newArray.splice(tileCellId, 1, 16);

      return {
        tileValues: newArray
      }
    });
  }

  onCellClick(tileValue, index) {
    const emptyCellId = this.state.tileValues.indexOf(16);
    const moveAbility = this.checkMoveAbility(index, emptyCellId);

    if(moveAbility) {
      this.replaceTiles(emptyCellId, index, tileValue);
    }
  }

  createCells() {
    return this.state.tileValues.map((tileValue, index) => {
      return (
        <BoardItem
          key={index}
          index={ index }
          tileValue={ tileValue }
          onClick={ this.onCellClick }
        />
      );
    });
  }

  render() {
    const elements = this.createCells();

    return (
      <ul className="board">
        { elements }
      </ul>
    )
  }
}
