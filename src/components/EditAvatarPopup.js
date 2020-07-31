// EditAvatarPopup.js

import React from 'react';
import PopupWithForm from './PopupWithForm';
import InputAvatarForm from './InputAvatarForm';
// импортируем объект контекста
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditAvatarPopup({isOpen, onClose}) {
  // Подписываемся на контекст CurrentUserContext
  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      children={<InputAvatarForm />}
      btnText="Сохранить"
      isOpen={isOpen}
      onClose={onClose} />
  );
}

export default EditAvatarPopup;
