// AddPlacePopup.js

import React from 'react';
import PopupWithForm from './PopupWithForm';
import InputAddForm from './InputAddForm';


function AddPlacePopup({isOpen, onClose, onAddPlace, submitBtnText}) {

  // рефы
  const placeRef = React.useRef();
  const urlRef = React.useRef();

  // Стейт, в котором содержится значение инпута
  // const [place, setPlace] = React.useState('');
  // const [url, setUrl] = React.useState('');

  // Обработчик изменения инпута обновляет стейт
  //function handleChangePlace(e) {
    // setPlace(e.target.value);
  //}

  // Обработчик изменения инпута обновляет стейт
  // function handleChangeUrl(e) {
    // setUrl(e.target.value);
  //}

  // Обработчик сабмита формы
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      place: placeRef.current.value,
      url: urlRef.current.value,
    });
    // сбрасываем все поля формы
    e.target.reset();
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      children={<InputAddForm
        placeRef={placeRef}
        urlRef={urlRef}
      //  handleChangePlace={handleChangePlace}
      //  handleChangeUrl={handleChangeUrl}
        />}
      btnText={submitBtnText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} />
  );
}

export default AddPlacePopup;
