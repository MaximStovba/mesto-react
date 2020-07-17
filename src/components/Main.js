// Main.js

import React from 'react';

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
      <section className="popup popup_type_edit">
        <form name="edit-profile" method="POST" action="#" className="popup__form popup__container popup__container_formtype_edit" noValidate>
          <h2 className="popup__title">Редактировать профиль</h2>
          <input type="text" name="name" placeholder="Имя" id="name-input" className="popup__text popup__text_location_top popup__text_type_name" minLength="2" maxLength="40" required pattern="[А-Яа-яA-Za-z -]{1,}" />
          <span className="popup__text-error" id="name-input-error">Введите данные.</span>
          <input type="text" name="about" placeholder="О себе" id="about-input" className="popup__text popup__text_location_bottom popup__text_type_about" minLength="2" maxLength="200" required />
          <span className="popup__text-error" id="about-input-error">Введите данные.</span>
          <button type="submit" className="popup__submit popup__btn popup__btn_action_save">Сохранить</button>
          <button type="button" className="popup__btn-close popup__btn-close_formtype_edit" aria-label="Закрыть"></button>
        </form>
      </section>
      <section className="popup popup_type_add">
        <form name="add-item" method="POST" action="#" className="popup__form popup__container popup__container_formtype_add" noValidate>
          <h2 className="popup__title">Новое место</h2>
          <input type="text" name="place" placeholder="Название" id="place-input" className="popup__text popup__text_location_top popup__text_type_place" minLength="1" maxLength="30" required />
          <span className="popup__text-error popup__text-error_active" id="place-input-error">Вы пропустили это поле.</span>
          <input type="text" name="url" placeholder="Ссылка на картинку" id="url-input" className="popup__text popup__text_location_bottom popup__text_type_url" required pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$" />
          <span className="popup__text-error popup__text-error_active" id="url-input-error">Введите адрес сайта.</span>
          <button type="submit" className="popup__submit popup__btn popup__btn_action_create">Создать</button>
          <button type="button" className="popup__btn-close popup__btn-close_formtype_add" aria-label="Закрыть"></button>
        </form>
      </section>
      <section className="popup popup_type_del">
        <form name="del-item" method="POST" action="#" className="popup__form popup__container popup__container_formtype_del" noValidate>
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="submit" className="popup__submit popup__btn popup__btn_action_del">Да</button>
          <button type="button" className="popup__btn-close popup__btn-close_formtype_del" aria-label="Закрыть"></button>
        </form>
      </section>
      <section className="popup popup_type_avatar">
        <form name="patch-avatar" method="POST" action="#" className="popup__form popup__container popup__container_formtype_avatar" noValidate>
          <h2 className="popup__title">Обновить аватар</h2>
          <input type="text" name="url" placeholder="Ссылка на картинку" id="url-input" className="popup__text popup__text_location_center popup__text_type_avatar-url" required pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$" />
          <span className="popup__text-error popup__text-error_active" id="url-input-error">Введите адрес изображения.</span>
          <button type="submit" className="popup__submit popup__btn popup__btn_action_patch">Сохранить</button>
          <button type="button" className="popup__btn-close popup__btn-close_formtype_patch" aria-label="Закрыть"></button>
        </form>
      </section>
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

