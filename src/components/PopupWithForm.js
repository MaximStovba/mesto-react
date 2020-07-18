// PopupWithForm.js

import React from 'react';

function PopupWithForm({ name, title, children, btnText }) {
  return (
    <section className={`popup popup_type_${name}`}>
      <form name={name} method="POST" action="#" className={`popup__form popup__container popup__container_formtype_${name}`} noValidate>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className={`popup__submit popup__btn popup__btn_action_${name}`}>{btnText}</button>
        <button type="button" className={`popup__btn-close popup__btn-close_formtype_${name}`} aria-label="Закрыть"></button>
      </form>
    </section>
  );
}

export default PopupWithForm;
