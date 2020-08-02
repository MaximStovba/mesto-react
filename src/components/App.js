// App.js

import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
// импортируем api
import { api } from '../utils/Api';
// импортируем объект контекста
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  // ------------- CARDS ----------------
  // Переменные состояния
  const [cards, setCards] = React.useState([]);

  // API-запрос >
  React.useEffect(() => {
    api.getInitialCards()
    .then((allCards) => {
      setCards(allCards);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }, []);

  // обработчик лайков и дизлайков
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }

  // обработчик удаления своей карточки
  function handleCardDelete(card) {
    api.deleteMyCard(card._id)
    .then((delCard) => {
      // Cоздаем копию массива, исключив из него удалённую карточку
      const newCards = cards.filter((c) => c._id !== card._id);
      console.log(delCard);
      // Обновляем стейт
      setCards(newCards);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }
// ------------- CARDS ----------------

  // переменные состояния попап
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(false);
  const [cardData, setCardData] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  // переменная состояния кнопки сабмита "сохранить"
  const [submitAddBtnText, setSubmitAddBtnText] = React.useState('Cохранить');
  // переменная состояния кнопки сабмита "создать"
  const [submitCreateBtnText, setSubmitCreateBtnText] = React.useState('Создать');
  // переменная состояния валидности полей ввода форм
  const [isAvatarValid, setIsAvatarValid] = React.useState(false); // аватар
  const [isNameValid, setIsNameValid] = React.useState(false); // имя пользователя
  const [isDescriptionValid, setIsDescriptionValid] = React.useState(false); // описание пользователя
  const [isPlaceValid, setIsPlaceValid] = React.useState(false);
  const [isUrlValid, setIsUrlValid] = React.useState(false);

  // переменная состояния кнопки сабмита
  const [isSbmtBtnActiv, setIsSbmtBtnActiv] = React.useState(false); // активность
  // переменная состояния validationMessage
  const [validationMessage, setValidationMessage] = React.useState('Введите данные');
  const [validNameMessage, setValidNameMessage] = React.useState('Введите данные');
  const [validDescriptionMessage, setValidDescriptionMessage] = React.useState('Введите данные');
  const [validPlaceMessage, setValidPlaceMessage] = React.useState('Введите данные');
  const [validUrlMessage, setValidUrlMessage] = React.useState('Введите данные');



  // получаем информацию о пользователе
  React.useEffect(() => {
    api.getUserInfo()
    .then((userInfo) => {
      setCurrentUser(userInfo);
    })
  }, []);

  // обработчик клика по изображению карточки
  function handleCardClick(card) {
    setSelectedCard(true);
    setCardData({
      link: card.link,
      name: card.name,
    });
  }

  // обработчик открытия попапа "редактирования профиля"
  function handleEditProfileClick() {
    // открываем попап
    setIsEditProfilePopupOpen(true);
    // скрываем ошибки валидации при открытии
    setIsNameValid(true);
    setIsDescriptionValid(true);
    // делаем кнопку сабмита активной при открытии
    setIsSbmtBtnActiv(true);
  }

  // обработчик открытия попапа "добавления новой карточки"
  function handleAddPlaceClick() {
    // открываем попап
    setIsAddPlacePopupOpen(true);
    // скрываем ошибки валидации при открытии
    setIsPlaceValid(true);
    setIsUrlValid(true);
    // делаем кнопку сабмита неактивной при открытии
    setIsSbmtBtnActiv(false);
  }

  // обработчик открытия попапа "смены аватара"
  function handleEditAvatarClick() {
    // открываем попап
    setIsEditAvatarPopupOpen(true);
    // скрываем ошибки валидации при открытии
    setIsAvatarValid(true);
    // делаем кнопку сабмита неактивной
    setIsSbmtBtnActiv(false);
  }

  // обработчик закрытия всех попапов
  function closeAllPopups(e) {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  // обработчик обновления информации о пользователе
  function handleUpdateUser(formData) {
    // меняем название кнопки сабмита перед началом загрузки
    // добавляем надпись "Сохранение..."
    setSubmitAddBtnText('Cохранение...');
    // сохранение данных профиля на сервере
    api.patchUserInfo(formData)
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
      .finally(() => {
        // меняем название кнопки сабмита при завершении загрузки
        setSubmitAddBtnText('Cохранить');
      });
    closeAllPopups();
  }

  // обработчик смены аватара пользователя
  function handleUpdateAvatar(avatarUrl) {
    // меняем название кнопки сабмита перед началом загрузки
    // добавляем надпись "Сохранение..."
    setSubmitAddBtnText('Cохранение...');
    api.patchAvatar(avatarUrl)
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
      .finally(() => {
        // меняем название кнопки сабмита при завершении загрузки
        setSubmitAddBtnText('Cохранить');
      });
    closeAllPopups();
  }

  // ------------- валидация полей ввода форм -------------------
  // Обработчик изменения инпута "аватара"
  function handleChangeAvatarInput(e) {
    if (e.target.validity.valid) {
      setIsAvatarValid(true);
      setIsSbmtBtnActiv(true);
    } else {
      setIsAvatarValid(false);
      setIsSbmtBtnActiv(false);
      setValidationMessage(e.target.validationMessage);
    }
  }
  // Обработчик изменения инпута "имени пользователя"
  function handleChangeProfileName(e) {
    if (e.target.validity.valid) {
      setIsNameValid(true);
      setIsSbmtBtnActiv(true);
    } else {
      setIsNameValid(false);
      setIsSbmtBtnActiv(false);
      setValidNameMessage(e.target.validationMessage);
    }
  }
  // Обработчик изменения инпута "описания пользователя"
  function handleChangeProfileDescription(e) {
    if (e.target.validity.valid) {
      setIsDescriptionValid(true);
      setIsSbmtBtnActiv(true);
    } else {
      setIsDescriptionValid(false);
      setIsSbmtBtnActiv(false);
      setValidDescriptionMessage(e.target.validationMessage);
    }
  }
  // Обработчик изменения инпута "места"
  function handleChangePlace(e) {
    if (e.target.validity.valid) {
      setIsPlaceValid(true);
      setIsSbmtBtnActiv(true);
    } else {
      setIsPlaceValid(false);
      setIsSbmtBtnActiv(false);
      setValidPlaceMessage(e.target.validationMessage);
    }
  }
  // Обработчик изменения инпута "ссылки"
  function handleChangeUrl(e) {
    if (e.target.validity.valid) {
      setIsUrlValid(true);
      setIsSbmtBtnActiv(true);
    } else {
      setIsUrlValid(false);
      setIsSbmtBtnActiv(false);
      setValidUrlMessage(e.target.validationMessage);
    }
  }
  // ------------- валидация полей ввода форм -------------------

  // обработчик добавления новой карточки
  function handleAddPlace(formData) {
    // меняем название кнопки сабмита перед началом загрузки
    // добавляем надпись "Сохранение..."
    setSubmitCreateBtnText('Cохранение...');
    api.postNewCard(formData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
      .finally(() => {
        // меняем название кнопки сабмита при завершении загрузки
        setSubmitCreateBtnText('Создать');
      });
    closeAllPopups();
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        submitBtnText={submitAddBtnText}
        isSbmtBtnActiv={isSbmtBtnActiv}
        handleChangeProfileName={handleChangeProfileName}
        handleChangeProfileDescription={handleChangeProfileDescription}
        isNameValid={isNameValid}
        isDescriptionValid={isDescriptionValid}
        validNameMessage={validNameMessage}
        validDescriptionMessage={validDescriptionMessage}
        />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        submitBtnText={submitAddBtnText}
        handleChangeAvatarInput={handleChangeAvatarInput}
        isValid={isAvatarValid}
        isSbmtBtnActiv={isSbmtBtnActiv}
        validationMessage={validationMessage}
        />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlace}
        submitBtnText={submitCreateBtnText}
        isSbmtBtnActiv={isSbmtBtnActiv}
        handleChangePlace={handleChangePlace}
        handleChangeUrl={handleChangeUrl}
        isPlaceValid={isPlaceValid}
        isUrlValid={isUrlValid}
        validPlaceMessage={validPlaceMessage}
        validUrlMessage={validUrlMessage}
        />
      <PopupWithForm
        name="del"
        title="Вы уверены?"
        children=""
        btnText="Да"
        />
      <ImagePopup
        cardOpen={selectedCard}
        onClose={closeAllPopups}
        cardData={cardData}
        />
      <Footer />
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
