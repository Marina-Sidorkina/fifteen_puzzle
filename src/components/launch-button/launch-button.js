import React from 'react';
import './launch-button.css';

const LaunchButton = ({ onClick }) => {
  return (
    <button className="launch-button" onClick={ onClick }>
      <span className="launch-button__text">Начать игру</span>
    </button>
  );
}

export default LaunchButton;
