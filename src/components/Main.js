// Main.js

import React from 'react';
import PopupWithForm from './PopupWithForm';
import InputAvatarForm from './InputAvatarForm';
import InputAddForm from './InputAddForm';
import InputEditForm from './InputEditForm';
import ImagePopup from './ImagePopup';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onClose,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
  isEditAvatarPopupOpen,
}) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src="./images/profile__avatar.jpg" alt="Жак-Ив Кусто" className="profile__avatar" />
          <div className="profile__avatar-overlay">
            <button type="button" className="profile__patchavatar-btn" aria-label="Редактировать" onClick={onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>
      <section className="card-container">
        {
        // Заполняется JS
        }
      </section>

      <PopupWithForm name="edit" title="Редактировать профиль" children={<InputEditForm />} btnText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={onClose} />
      <PopupWithForm name="add" title="Новое место" children={<InputAddForm />} btnText="Создать" isOpen={isAddPlacePopupOpen} onClose={onClose} />
      <PopupWithForm name="del" title="Вы уверены?" children="" btnText="Да" />
      <PopupWithForm name="avatar" title="Обновить аватар" children={<InputAvatarForm />} btnText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={onClose} />
      <ImagePopup />

    </main>
  );
}

export default Main;

