import React, { Component } from 'react';
import Timer from '../timer';
import Counter from '../counter';
import './score.css';

export default class Score extends Component {
  constructor({ counterValue }) {
    super();
    this.counterValue = counterValue;
  }

  render() {
    return (
      <div className="score">
        <Timer />
        <Counter 
          value={ this.counterValue }
          key={ this.counterValue }
        />
      </div>
    )
  }
}