// EditProfilePopup.js

import React from 'react';
import PopupWithForm from './PopupWithForm';
import InputEditForm from './InputEditForm';

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm name="edit" title="Редактировать профиль" children={<InputEditForm />} btnText="Сохранить" isOpen={isOpen} onClose={onClose} />
  );
}

export default EditProfilePopup;
