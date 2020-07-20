// ImagePopup.js

import React from 'react';

function ImagePopup({ cardOpen, onClose, cardData }) {
  return (
    <section className={`popup popup_type_image ${cardOpen ? 'popup_opened' : ''}`}>
      <figure className="popup__form popup__img-container">
        <button type="button" className="popup__btn-close popup__btn-close_formtype_image" aria-label="Закрыть" onClick={onClose}></button>
        <img className="popup__big-image" src={cardData.link} alt={cardData.name} />
        <figcaption className="popup__figcaption">{cardData.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
