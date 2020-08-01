// EditProfilePopup.js

import React from 'react';
import PopupWithForm from './PopupWithForm';
import InputEditForm from './InputEditForm';
// импортируем объект контекста
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditProfilePopup({
    isOpen,
    onClose,
    onUpdateUser,
    submitBtnText,
    isNameValid,
    isDescriptionValid,
    validNameMessage,
    validDescriptionMessage,
    handleChangeProfileName,
    handleChangeProfileDescription,
    isSbmtBtnActiv,
    submitBtnRef,
    }) {

    // Стейт, в котором содержится значение инпута
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    // Обработчик изменения инпута обновляет стейт
    function handleChangeName(e) {
      setName(e.target.value);
      handleChangeProfileName(e);
    }

    // Обработчик изменения инпута обновляет стейт
    function handleChangeDescription(e) {
      setDescription(e.target.value);
      handleChangeProfileDescription(e);
    }

    // Подписываемся на контекст CurrentUserContext
    const currentUser = React.useContext(CurrentUserContext);

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }, [currentUser, onClose]);

    // Обработчик сабмита формы
    function handleSubmit(e) {
      // Запрещаем браузеру переходить по адресу формы
      e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
      onUpdateUser({
        name: name,
        about: description,
      });
    }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      children={<InputEditForm
        name={name}
        description={description}
        handleChangeName={handleChangeName}
        handleChangeDescription={handleChangeDescription}
        isNameValid={isNameValid}
        isDescriptionValid={isDescriptionValid}
        validNameMessage={validNameMessage}
        validDescriptionMessage={validDescriptionMessage}
        />}
      btnText={submitBtnText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSbmtBtnActiv={isSbmtBtnActiv}
      submitBtnRef={submitBtnRef} />
  );
}

export default EditProfilePopup;
