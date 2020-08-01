// EditAvatarPopup.js

import React from 'react';
import PopupWithForm from './PopupWithForm';
import InputAvatarForm from './InputAvatarForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, submitBtnText}) {
  // реф
  const avatarRef = React.useRef();

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
      children={<InputAvatarForm avatarRef={avatarRef} />}
      btnText={submitBtnText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} />
  );
}

export default EditAvatarPopup;
