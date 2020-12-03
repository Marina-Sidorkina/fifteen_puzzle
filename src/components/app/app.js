import React, { Component } from 'react';
import Board from '../board';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      tiles: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
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
