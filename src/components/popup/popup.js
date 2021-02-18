import React from 'react';
import './popup.css';

const Popup = () => {
  return (
    <div className="popup">
      <div className="popup__content">
        <button className="popup__button" type="button" title="Close modal"></button>
        <span className="popup__text">Ура!!!</span>
        <span className="popup__text">Ура!!!</span>
        <span className="popup__text">Ура!!!</span>
      </div>
    </div>
  )
}

export default Popup;