// InputEditForm.js

import React from 'react';

function InputEditForm() {
  // Стейт, в котором содержится значение инпута
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    setName(e.target.value);
  }
   // Обработчик изменения инпута обновляет стейт
   function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChangeName} name="name" placeholder="Имя" id="name-input" className="popup__text popup__text_location_top popup__text_type_name" minLength="2" maxLength="40" required pattern="[А-Яа-яA-Za-z -]{1,}" />
      <span className="popup__text-error" id="name-input-error">Введите данные.</span>
      <input type="text" value={description} onChange={handleChangeDescription} name="about" placeholder="О себе" id="about-input" className="popup__text popup__text_location_bottom popup__text_type_about" minLength="2" maxLength="200" required />
      <span className="popup__text-error" id="about-input-error">Введите данные.</span>
    </>
  );
}

export default InputEditForm;
