import React, { Component } from 'react';
import './counter.css';

export default class Counter extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="counter">0</div>
    )
  }
}