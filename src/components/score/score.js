import React, { Component } from 'react';
import Timer from '../timer';
import './score.css';

export default class Score extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="score">
        <Timer />
      </div>
    )
  }
}