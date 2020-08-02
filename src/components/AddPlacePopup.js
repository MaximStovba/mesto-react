// AddPlacePopup.js

import React from 'react';
import PopupWithForm from './PopupWithForm';
import InputAddForm from './InputAddForm';


function AddPlacePopup({
    isOpen,
    onClose,
    onAddPlace,
    submitBtnText,
    handleChangePlace,
    handleChangeUrl,
    isPlaceValid,
    isUrlValid,
    validPlaceMessage,
    validUrlMessage,
    isSbmtBtnActiv,
    }) {

  // рефы инпутов
  const placeRef = React.useRef();
  const urlRef = React.useRef();

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
        handleChangePlace={handleChangePlace}
        handleChangeUrl={handleChangeUrl}
        isPlaceValid={isPlaceValid}
        isUrlValid={isUrlValid}
        validPlaceMessage={validPlaceMessage}
        validUrlMessage={validUrlMessage}
        />}
      btnText={submitBtnText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSbmtBtnActiv={isSbmtBtnActiv}
      />
  );
}

export default AddPlacePopup;
