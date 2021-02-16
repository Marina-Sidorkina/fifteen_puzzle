import React, { Component } from 'react';
import './timer.css';

export default class Timer extends Component {
  constructor({ start }) {
    super();

    this.state = {
      seconds: 0,
      secondsTimer: null,
      minutes: 0,
      minutesTimer: null,
      hours: 0,
      hoursTimer: null
    }

    this.start = start;

  }

  startTimer() {
    if(this.start) {
      const secondsTimer = setInterval(() => {

        this.setState(({ seconds }) => {
          const newValue = seconds++;
          return { seconds: newValue }
        });

      }, 1000);

      this.setState({ secondsTimer });
      this.start = false;
    }
  }

  render() {
    return (
      <div className="timer">
        <span>{ this.state.hours + ':' }</span>
        <span>{ this.state.minutes + ':' }</span>
        <span>{ this.state.seconds }</span>
      </div>
    )
  }
}