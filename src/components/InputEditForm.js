// InputEditForm.js

import React from 'react';

function InputEditForm({
  name,
  description,
  handleChangeName,
  handleChangeDescription,
  isNameValid,
  isDescriptionValid,
  validNameMessage,
  validDescriptionMessage,
  }) {

  return (
    <>
      <input
        type="text"
        defaultValue={name}
        onChange={handleChangeName}
        name="name"
        placeholder="Имя"
        id="name-input"
        className="popup__text popup__text_location_top popup__text_type_name"
        minLength="2"
        maxLength="40"
        required pattern="[А-Яа-яA-Za-z -]{1,}"
        />
      <span
        //className="popup__text-error"
        className={`popup__text-error ${isNameValid ? '' : 'popup__text-error_active'}`}
        id="name-input-error">{validNameMessage}</span>
      <input
        type="text"
        defaultValue={description}
        onChange={handleChangeDescription}
        name="about"
        placeholder="О себе"
        id="about-input"
        className="popup__text popup__text_location_bottom popup__text_type_about"
        minLength="2"
        maxLength="200"
        required
        />
      <span
        //className="popup__text-error"
        className={`popup__text-error ${isDescriptionValid ? '' : 'popup__text-error_active'}`}
        id="about-input-error">{validDescriptionMessage}</span>
    </>
  );
}

export default InputEditForm;
