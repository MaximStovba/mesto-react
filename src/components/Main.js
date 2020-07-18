// Main.js

import React from 'react';
import PopupWithForm from './PopupWithForm';
import InputAvatarForm from './InputAvatarForm';
import InputAddForm from './InputAddForm';
import InputEditForm from './InputEditForm';

function Main() {

  React.useEffect(() => {
    function handleEditProfileClick() {
      document.querySelector('.popup_type_edit').classList.add('popup_opened');
    }
    function handleAddPlaceClick() {
      document.querySelector('.popup_type_add').classList.add('popup_opened');
    }
    function handleEditAvatarClick() {
      document.querySelector('.popup_type_avatar').classList.add('popup_opened');
    }
    // слушатель открытия формы редактирования профиля
    document.querySelector('.profile__edit-button').addEventListener('click', handleEditProfileClick);
    // слушатель открытия формы добавления карточки
    document.querySelector('.profile__add-button').addEventListener('click', handleAddPlaceClick);
    // слушатель открытия формы смены аватара
    document.querySelector('.profile__patchavatar-btn').addEventListener('click', handleEditAvatarClick);
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src="./images/profile__avatar.jpg" alt="Жак-Ив Кусто" className="profile__avatar" />
          <div className="profile__avatar-overlay">
            <button type="button"
              className="profile__patchavatar-btn"
              aria-label="Редактировать">
            </button>
          </div>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button type="button"
            className="profile__edit-button"
            aria-label="Редактировать">
          </button>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button type="button"
          className="profile__add-button"
          aria-label="Добавить">
        </button>
      </section>
      <section className="card-container">
        {
        // Заполняется JS
        }
      </section>
      
      <PopupWithForm name="edit" title="Редактировать профиль" children={<InputEditForm />} btnText="Сохранить" />
      <PopupWithForm name="add" title="Новое место" children={<InputAddForm />} btnText="Создать" />
      <PopupWithForm name="del" title="Вы уверены?" children="" btnText="Да" />
      <PopupWithForm name="avatar" title="Обновить аватар" children={<InputAvatarForm />} btnText="Сохранить" />

      <section className="popup popup_type_image">
        <figure className="popup__form popup__img-container">
          <button type="button" className="popup__btn-close popup__btn-close_formtype_image" aria-label="Закрыть"></button>
          <img className="popup__big-image" alt="" />
          <figcaption className="popup__figcaption"></figcaption>
        </figure>
      </section>
    </main>
  );
}

export default Main;

