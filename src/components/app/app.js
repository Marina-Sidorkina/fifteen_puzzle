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
      tiles: [16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    };
  }

  render() {
    return (
      <div className="fifteen-puzzle">
        <Board
          tiles={ this.state.tiles }
        />
      </div>
    );
  }
}
