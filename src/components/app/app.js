import React, { Component } from 'react';
import Board from '../board';
import LaunchButton from '../launch-button';
import Score from '../score';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      winner: false,
      launchNewGame: false,
      timer: true,
      movesCount: 0
    };

    this.checkWinner = this.checkWinner.bind(this);
    this.addMove = this.addMove.bind(this);
    this.onLaunchStatusChange = this.onLaunchStatusChange.bind(this);

  }

  componentDidUpdate(_, prevState) {
    if(prevState.launchNewGame && 
        prevState.movesCount === this.state.movesCount) {
      this.onLaunchStatusChange();
    }
  }

  checkWinner(value) {
    if(value && !this.state.winner) {
      this.setState({ winner: true });
      alert('WINNER');
    }
  }

  addMove() {
    this.setState(({ movesCount }) => {
      const newValue = movesCount + 1;
      return {
        movesCount: newValue
      }
    });
  }

  onLaunchStatusChange() {
    this.setState(({ launchNewGame }) => {
      const newValue = !launchNewGame;
      return {
        launchNewGame: newValue
      }
    });
  }

  render() {
    return (
      <div className="fifteen-puzzle">
        <Board
          checkWinner={ this.checkWinner }
          shuffle={ this.state.launchNewGame }
          key={ this.state.launchNewGame }
          onTileMove={ this.addMove }
        />
        <LaunchButton
          onClick={ this.onLaunchStatusChange }
        />
        <Score
          counterValue={ this.state.movesCount }
          timer={ this.state.timer }
        />
      </div>
    );
  }
}
