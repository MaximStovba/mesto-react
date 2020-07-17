// Main.js

import React from 'react';

function Main() {
  return (
    <main class="content">
      <section class="profile">
        <div class="profile__avatar-container">
          <img src="./images/profile__avatar.jpg" alt="Жак-Ив Кусто" class="profile__avatar" />
          <div class="profile__avatar-overlay">
            <button type="button" class="profile__patchavatar-btn" aria-label="Редактировать"></button>
          </div>
        </div>
        <div class="profile__profile-info">
          <h1 class="profile__title">Жак-Ив Кусто</h1>
          <button type="button" class="profile__edit-button" aria-label="Редактировать"></button>
          <p class="profile__subtitle">Исследователь океана</p>
        </div>
        <button type="button" class="profile__add-button" aria-label="Добавить"></button>
      </section>
      <section class="card-container">
        {
        // Заполняется JS 
        }
      </section>
      <section class="popup popup_type_edit">
        <form name="edit-profile" method="POST" action="#" class="popup__form popup__container popup__container_formtype_edit" novalidate>
          <h2 class="popup__title">Редактировать профиль</h2>
          <input type="text" name="name" placeholder="Имя" id="name-input" class="popup__text popup__text_location_top popup__text_type_name" minlength="2" maxlength="40" required pattern="[А-Яа-яA-Za-z -]{1,}" />
          <span class="popup__text-error" id="name-input-error">Введите данные.</span>
          <input type="text" name="about" placeholder="О себе" id="about-input" class="popup__text popup__text_location_bottom popup__text_type_about" minlength="2" maxlength="200" required />
          <span class="popup__text-error" id="about-input-error">Введите данные.</span>
          <button type="submit" class="popup__submit popup__btn popup__btn_action_save">Сохранить</button>
          <button type="button" class="popup__btn-close popup__btn-close_formtype_edit" aria-label="Закрыть"></button>
        </form>
      </section>
      <section class="popup popup_type_add">
        <form name="add-item" method="POST" action="#" class="popup__form popup__container popup__container_formtype_add" novalidate>
          <h2 class="popup__title">Новое место</h2>
          <input type="text" name="place" placeholder="Название" id="place-input" class="popup__text popup__text_location_top popup__text_type_place" minlength="1" maxlength="30" required />
          <span class="popup__text-error popup__text-error_active" id="place-input-error">Вы пропустили это поле.</span>
          <input type="text" name="url" placeholder="Ссылка на картинку" id="url-input" class="popup__text popup__text_location_bottom popup__text_type_url" required pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$" />
          <span class="popup__text-error popup__text-error_active" id="url-input-error">Введите адрес сайта.</span>
          <button type="submit" class="popup__submit popup__btn popup__btn_action_create">Создать</button>
          <button type="button" class="popup__btn-close popup__btn-close_formtype_add" aria-label="Закрыть"></button>
        </form>
      </section>
      <section class="popup popup_type_del">
        <form name="del-item" method="POST" action="#" class="popup__form popup__container popup__container_formtype_del" novalidate>
          <h2 class="popup__title">Вы уверены?</h2>
          <button type="submit" class="popup__submit popup__btn popup__btn_action_del">Да</button>
          <button type="button" class="popup__btn-close popup__btn-close_formtype_del" aria-label="Закрыть"></button>
        </form>
      </section>
      <section class="popup popup_type_avatar">
        <form name="patch-avatar" method="POST" action="#" class="popup__form popup__container popup__container_formtype_avatar" novalidate>
          <h2 class="popup__title">Обновить аватар</h2>
          <input type="text" name="url" placeholder="Ссылка на картинку" id="url-input" class="popup__text popup__text_location_center popup__text_type_avatar-url" required pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$" />
          <span class="popup__text-error popup__text-error_active" id="url-input-error">Введите адрес изображения.</span>
          <button type="submit" class="popup__submit popup__btn popup__btn_action_patch">Сохранить</button>
          <button type="button" class="popup__btn-close popup__btn-close_formtype_patch" aria-label="Закрыть"></button>
        </form>
      </section>
      <section class="popup popup_type_image">
        <figure class="popup__form popup__img-container">
          <button type="button" class="popup__btn-close popup__btn-close_formtype_image" aria-label="Закрыть"></button>
          <img class="popup__big-image" />
          <figcaption class="popup__figcaption"></figcaption>
        </figure>
      </section>
    </main>
  );
}

export default Main;