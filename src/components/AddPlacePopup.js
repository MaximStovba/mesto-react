// AddPlacePopup.js

import React from 'react';
import PopupWithForm from './PopupWithForm';
import InputAddForm from './InputAddForm';


function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  // Стейт, в котором содержится значение инпута
  const [place, setPlace] = React.useState('');
  const [url, setUrl] = React.useState('');

  // Обработчик изменения инпута обновляет стейт
  function handleChangePlace(e) {
    setPlace(e.target.value);
  }

  // Обработчик изменения инпута обновляет стейт
  function handleChangeUrl(e) {
    setUrl(e.target.value);
  }

  // Обработчик сабмита формы
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      place: place,
      url: url,
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      children={<InputAddForm place={place} url={url} handleChangePlace={handleChangePlace} handleChangeUrl={handleChangeUrl} />}
      btnText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} />
  );
}

export default AddPlacePopup;
