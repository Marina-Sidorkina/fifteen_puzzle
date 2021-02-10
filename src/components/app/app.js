import React, { Component } from 'react';
import Board from '../board';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      winner: false
    };

    this.checkWinner = this.checkWinner.bind(this);

  }

  checkWinner(value) {
    if(value && !this.state.winner) {
      this.setState({ winner: true });
      alert('WINNER');
    }
  }

  render() {
    return (
      <div className="fifteen-puzzle">
        <Board
          checkWinner={ this.checkWinner }
        />
      </div>
    );
  }
}
