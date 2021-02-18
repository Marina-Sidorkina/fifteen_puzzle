import React, { Component } from 'react';
import Board from '../board';
import LaunchButton from '../launch-button';
import Score from '../score';
import Popup from '../popup';
import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      winner: false,
      gamesCount: 0,
      movesCount: 0,
      stopIndicator: true
    };

    this.checkWinner = this.checkWinner.bind(this);
    this.addMove = this.addMove.bind(this);
    this.onNewGameStart = this.onNewGameStart.bind(this);

  }

  checkWinner(value) {
    if(value && !this.state.winner && this.state.gamesCount) {
      this.setState({ winner: true });
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

  onNewGameStart() {
    this.setState(({ gamesCount }) => {
      const newValue = gamesCount + 1;
      return {
        movesCount: 0,
        gamesCount: newValue,
        stopIndicator: false
      }
    });
  }

  render() {
    return (
      <div className="fifteen-puzzle">
        {this.state.winner
          ? <Popup />
          : <Board
              key={ this.state.gamesCount }
              shuffle={ this.state.gamesCount }
              checkWinner={ this.checkWinner }
              onTileMove={ this.addMove }
              stopIndicator={ this.state.stopIndicator }
            />
        }
        <LaunchButton
          onClick={ this.onNewGameStart }
        />
        <Score
          counterValue={ this.state.movesCount }
          gamesCount={ this.state.gamesCount }
          stopIndicator={ this.state.stopIndicator }
        />
      </div>
    );
  }
}
