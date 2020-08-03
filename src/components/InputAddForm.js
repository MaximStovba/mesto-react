// InputAddForm.js

import React from 'react';

function InputAddForm({
  placeRef,
  urlRef,
  handleChangePlace,
  handleChangeUrl,
  isPlaceValid,
  isUrlValid,
  validPlaceMessage,
  validUrlMessage,
  }) {
  return (
    <>
      <input ref={placeRef} type="text"
        onChange={handleChangePlace}
        name="place"
        placeholder="Название"
        id="place-input"
        className="popup__text popup__text_location_top popup__text_type_place"
        minLength="2"
        maxLength="30"
        required
        />
      <span
        //className="popup__text-error popup__text-error_active"
        className={`popup__text-error ${isPlaceValid ? '' : 'popup__text-error_active'}`}
        id="place-input-error">{validPlaceMessage}</span>
      <input ref={urlRef} type="text"
        onChange={handleChangeUrl}
        name="url"
        placeholder="Ссылка на картинку"
        id="url-input"
        className="popup__text popup__text_location_bottom popup__text_type_url"
        required
        pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$"
        />
      <span
        //className="popup__text-error popup__text-error_active"
        className={`popup__text-error ${isUrlValid ? '' : 'popup__text-error_active'}`}
        id="url-input-error">{validUrlMessage}</span>
    </>
  );
}

export default InputAddForm;
