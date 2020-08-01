// App.js

import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
// import InputAvatarForm from './InputAvatarForm';
// import InputAddForm from './InputAddForm';
// import InputEditForm from './InputEditForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
// импортируем api
import { api } from '../utils/Api';
// импортируем объект контекста
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  // ------------- CARDS ----------------
  // Переменные состояния >
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

  // отмечаем лайки и дизлайки >
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

  // удаление своей карточки >
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

  // переменные состояния
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(false);
  const [cardData, setCardData] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

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
    setIsEditProfilePopupOpen(true);
  }
  // обработчик открытия попапа "добавления новой карточки"
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  // обработчик открытия попапа "смены аватара"
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  // обработчик закрытия всех попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }
  // обработчик обновления информации пользователя
  function handleUpdateUser(formData) {
    api.patchUserInfo(formData)
    .then((userInfo) => {
      setCurrentUser(userInfo);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
    closeAllPopups();
  }

  // обработчик смены аватара пользователя
  function handleUpdateAvatar(avatarUrl) {
    api.patchAvatar(avatarUrl)
    .then((userInfo) => {
      setCurrentUser(userInfo);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
    closeAllPopups();
  }

  // обработчик добавления новой карточки
  function handleAddPlace(formData) {
    api.postNewCard(formData)
    .then((newCard) => {
      // newCard
      setCards([...cards, newCard]);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
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
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace} />

      <PopupWithForm name="del" title="Вы уверены?" children="" btnText="Да" />
      <ImagePopup cardOpen={selectedCard} onClose={closeAllPopups} cardData={cardData} />
      <Footer />
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
