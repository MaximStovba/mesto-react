// EditAvatarPopup.js

import React from 'react';
import PopupWithForm from './PopupWithForm';
import InputAvatarForm from './InputAvatarForm';

function EditAvatarPopup({
    isOpen,
    onClose,
    onUpdateAvatar,
    submitBtnText,
    isValid,
    validationMessage,
    handleChangeAvatarInput}) {

  // реф инпута url аватара
  const avatarRef = React.useRef();

  // обработчик сабмита формы
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    // сбрасываем все поля формы
    e.target.reset();
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      children={<InputAvatarForm
        avatarRef={avatarRef}
        handleChangeAvatarInput={handleChangeAvatarInput}
        isValid={isValid}
        validationMessage={validationMessage}
        />}
      btnText={submitBtnText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid} />
  );
}

export default EditAvatarPopup;
