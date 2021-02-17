import React, { Component } from 'react';
import './timer.css';

export default class Timer extends Component {
  constructor() {
    super();

    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0
    }

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState(({ seconds, minutes, hours }) => {
      let scs;
      let mns;
      let hrs;

      scs = (seconds + 1 === 60) ? 0 : seconds + 1;
      mns = (seconds + 1 === 60) ? minutes + 1 : minutes;
      hrs = (mns === 60) ? hours + 1 : hours;
      mns = (mns === 60) ? 0 : mns;

      return {
        seconds: scs,
        minutes: mns,
        hours: hrs
      }

    });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let scs = this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds;
    let mns = this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes;
    let hrs = this.state.hours < 10 ? '0' + this.state.hours : this.state.hours;

    return (
      <div className="timer">
        <span>{ hrs + ':'}</span>
        <span>{ mns + ':'}</span>
        <span>{ scs }</span>
      </div>
    )
  }
}
