// ImagePopup.js

import React from 'react';

function ImagePopup() {
  return (
    <section className="popup popup_type_image">
      <figure className="popup__form popup__img-container">
        <button type="button" className="popup__btn-close popup__btn-close_formtype_image" aria-label="Закрыть"></button>
        <img className="popup__big-image" alt="" />
        <figcaption className="popup__figcaption"></figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
