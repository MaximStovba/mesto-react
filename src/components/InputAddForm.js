// InputAddForm.js

import React from 'react';

function InputAddForm() {
  return (
    <>
      <input type="text" name="place" placeholder="Название" id="place-input" className="popup__text popup__text_location_top popup__text_type_place" minLength="1" maxLength="30" required />
      <span className="popup__text-error popup__text-error_active" id="place-input-error">Вы пропустили это поле.</span>
      <input type="text" name="url" placeholder="Ссылка на картинку" id="url-input" className="popup__text popup__text_location_bottom popup__text_type_url" required pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$" />
      <span className="popup__text-error popup__text-error_active" id="url-input-error">Введите адрес сайта.</span>
    </>
  );
}

export default InputAddForm;
