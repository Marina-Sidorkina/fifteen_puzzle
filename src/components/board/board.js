import React, { Component } from 'react';
import BoardItem from '../board-item';
import './board.css'

export default class Board extends Component {
  constructor({ checkWinner, shuffle }) {
    super();

    this.state = {
      tileValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    };

    this.cellCoordinates = [
      {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0},
      {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1},
      {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2},
      {x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}
    ];

    this.checkWinner = checkWinner;
    this.shuffle = shuffle;
    this.emptyCellValue = 16;
    this.onCellClick = this.onCellClick.bind(this);
  }

  componentDidMount() {
    if(this.shuffle) {
      this.shuffleTiles();
    }
  }

  componentDidUpdate() {
    const check = this.state.tileValues
      .every((tile, index) => tile === (index + 1));

    if(check) {
      this.checkWinner(true);
    };
  }

  shuffleTiles() {
    this.setState(({ tileValues }) => {
      let array = tileValues.slice();

      for(let i = 0; i < array.length; i++) {
        let start = 0;
        let index = Board.generateRandomNumber(start, i);
        let first = array[i];
        let second = array[index];

        array.splice(i, 1, second);
        array.splice(index, 1, first);   
      }

      return {
        tileValues: array
      }
    });
  }
  
  checkMoveAbility(tileCellId, emptyCellId) {
    const emptyCellCoords = this.cellCoordinates[emptyCellId];
    const tileCellCoords = this.cellCoordinates[tileCellId];

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
          emptyCellValue={ this.emptyCellValue }
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

  static generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };
}
