import React, { Component } from 'react';
import Board from '../board';
import LaunchButton from '../launch-button';

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
        <LaunchButton />
      </div>
    );
  }
}
