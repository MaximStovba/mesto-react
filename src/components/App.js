import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  // переменные состояния
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [cardData, setCardData] = React.useState({});

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

  return (
  <>
  <div className="page">
    <Header />
    <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
      onClose={closeAllPopups}
      isEditProfilePopupOpen={isEditProfilePopupOpen}
      isAddPlacePopupOpen={isAddPlacePopupOpen}
      isEditAvatarPopupOpen={isEditAvatarPopupOpen}
      selectedCard={selectedCard}
      cardData={cardData}
    />
    <Footer />
  </div>
  </>
  );
}

export default App;
