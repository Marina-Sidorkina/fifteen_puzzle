import React, { Component } from 'react';
import Board from '../board';
import LaunchButton from '../launch-button';
import Score from '../score';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      winner: false,
      gamesCount: 0,
      movesCount: 0,
      stopColor: true
    };

    this.checkWinner = this.checkWinner.bind(this);
    this.addMove = this.addMove.bind(this);
    this.onLaunchStatusChange = this.onLaunchStatusChange.bind(this);

  }

  checkWinner(value) {
    if(value && !this.state.winner) {
      this.setState({ winner: true });
      alert('WINNER');
    }
  }

  addMove() {
    if(this.state.gamesCount !== 0) {
      this.setState(({ movesCount }) => {
        const newValue = movesCount + 1;
        return {
          movesCount: newValue
        }
      });
    }
  }

  onLaunchStatusChange() {
    this.setState(({ gamesCount }) => {
      const newValue = gamesCount + 1;
      return {
        movesCount: 0,
        gamesCount: newValue,
        stopColor: false
      }
    });
  }

  render() {
    return (
      <div className="fifteen-puzzle">
        <Board
          checkWinner={ this.checkWinner }
          shuffle={ this.state.gamesCount }
          key={ this.state.gamesCount }
          onTileMove={ this.addMove }
          stopColor={ this.state.stopColor }
        />
        <LaunchButton
          onClick={ this.onLaunchStatusChange }
        />
        <Score
          counterValue={ this.state.movesCount }
          gamesCount={ this.state.gamesCount }
          stopColor={ this.state.stopColor }
        />
      </div>
    );
  }
}
