// App.js

import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import InputAvatarForm from './InputAvatarForm';
import InputAddForm from './InputAddForm';
// import InputEditForm from './InputEditForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
// импортируем api
import { api } from '../utils/Api';
// импортируем объект контекста
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
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
      />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <PopupWithForm name="add" title="Новое место" children={<InputAddForm />} btnText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <PopupWithForm name="del" title="Вы уверены?" children="" btnText="Да" />
      <PopupWithForm name="avatar" title="Обновить аватар" children={<InputAvatarForm />} btnText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <ImagePopup cardOpen={selectedCard} onClose={closeAllPopups} cardData={cardData} />
      <Footer />
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
