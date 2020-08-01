// PopupWithForm.js

import React from 'react';

function PopupWithForm({ name, title, children, btnText, isOpen, onClose, onSubmit, isSbmtBtnActiv, submitBtnRef }) {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <form name={name} method="POST" onSubmit={onSubmit} action="#" className={`popup__form popup__container popup__container_formtype_${name}`} noValidate>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button ref={submitBtnRef} type="submit" className={`popup__submit popup__btn popup__btn_action_${name} ${isSbmtBtnActiv ? '' : 'popup__btn_disabled'}`}>{btnText}</button>
        <button type="button" className={`popup__btn-close popup__btn-close_formtype_${name}`} aria-label="Закрыть" onClick={onClose}></button>
      </form>
    </section>
  );
}

export default PopupWithForm;
