import React, { Component } from 'react';
import Board from '../board';
import LaunchButton from '../launch-button';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      winner: false,
      launchNewGame: false
    };

    this.checkWinner = this.checkWinner.bind(this);
    this.onLaunchStatusChange = this.onLaunchStatusChange.bind(this);

  }

  componentDidUpdate(_, prevState) {
    if(prevState.launchNewGame) {
      this.onLaunchStatusChange();
    }
  }

  onLaunchStatusChange() {
    this.setState(({ launchNewGame }) => {
      const newValue = !launchNewGame;
      return {
        launchNewGame: newValue
      }
    });
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
          shuffle={ this.state.launchNewGame }
          key={ this.state.launchNewGame }
        />
        <LaunchButton
          onClick={ this.onLaunchStatusChange }
        />
      </div>
    );
  }
}
