import React, { Component } from 'react';
import Board from '../board';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      coordinates: [
        {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0},
        {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1},
        {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2},
        {x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}
      ],
      tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    };

    this.onTileClick = this.onTileClick.bind(this);
  }

  replaceTiles(emptyTileId, movedTileId, movedTileValue) {
    this.setState(({ tiles }) => {
      const newArray = tiles.slice();

      newArray.splice(emptyTileId, 1, movedTileValue);
      newArray.splice(movedTileId, 1, 16);

      return {
        tiles: newArray
      }
    });
  }

  onTileClick(value, index) {
    const emptyTileId = this.state.tiles.indexOf(16);
    const emptyTileCoords = this.state.coordinates[emptyTileId];
    const movedTileCoords = this.state.coordinates[index];

    if(movedTileCoords.y === emptyTileCoords.y && Math.abs(emptyTileCoords.x - movedTileCoords.x) === 1) {

      this.replaceTiles(emptyTileId, index, value)

    } else if(movedTileCoords.x === emptyTileCoords.x && Math.abs(emptyTileCoords.y - movedTileCoords.y) === 1) {

      this.replaceTiles(emptyTileId, index, value)

    }
  }

  render() {
    return (
      <div className="fifteen-puzzle">
        <Board
          tiles={ this.state.tiles }
          coordinates={ this.state.coordinates }
          onClick={this.onTileClick}
        />
      </div>
    );
  }
}
