// InputAvatarForm.js

import React from 'react';

function InputAvatarForm() {
  return (
    <>
    <input type="text" name="url" placeholder="Ссылка на картинку" id="url-input" className="popup__text popup__text_location_center popup__text_type_avatar-url" required pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$" />
    <span className="popup__text-error popup__text-error_active" id="url-input-error">Введите адрес изображения.</span>
    </>
  );
}

export default InputAvatarForm;
