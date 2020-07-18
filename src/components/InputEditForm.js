// InputEditForm.js

import React from 'react';

function InputEditForm() {
  return (
    <>
      <input type="text" name="name" placeholder="Имя" id="name-input" className="popup__text popup__text_location_top popup__text_type_name" minLength="2" maxLength="40" required pattern="[А-Яа-яA-Za-z -]{1,}" />
      <span className="popup__text-error" id="name-input-error">Введите данные.</span>
      <input type="text" name="about" placeholder="О себе" id="about-input" className="popup__text popup__text_location_bottom popup__text_type_about" minLength="2" maxLength="200" required />
      <span className="popup__text-error" id="about-input-error">Введите данные.</span>
    </>
  );
}

export default InputEditForm;
