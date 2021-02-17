import React, { Component } from 'react';
import './timer.css';

export default class Timer extends Component {
  constructor({ start }) {
    super();

    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0
    }

    this.start = start;
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState(({ seconds, minutes, hours }) => {
      //console.log('Секунды: ' + seconds + ' Минуты: ' + minutes);
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
    return (
      <div className="timer">
        <span>{ this.state.seconds }</span>
        <span></span>
        <span></span>
      </div>
    )
  }
}
