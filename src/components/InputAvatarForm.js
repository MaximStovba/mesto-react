// InputAvatarForm.js

import React from 'react';

function InputAvatarForm({
  avatarRef,
  isValid,
  validationMessage,
  handleChangeAvatarInput,
  }) {

  return (
    <>
      <input
        ref={avatarRef}
        onChange={handleChangeAvatarInput}
        type="text"
        name="url"
        placeholder="Ссылка на картинку"
        id="url-input"
        className="popup__text popup__text_location_center popup__text_type_avatar-url"
        required
        pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$"
        />
      <span
        className={`popup__text-error ${isValid ? '' : 'popup__text-error_active'}`}
        id="url-input-error">{validationMessage}</span>
    </>
  );
}

export default InputAvatarForm;
