import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  return (
  <>
  <div className="page">
    <Header />
    <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      isEditProfilePopupOpen={isEditProfilePopupOpen}
      isAddPlacePopupOpen={isAddPlacePopupOpen}
      isEditAvatarPopupOpen={isEditAvatarPopupOpen}
    />
    <Footer />
  </div>
  <template id="card">
    <div className="card">
      <img className="card__image" alt="" />
      <h2 className="card__title">Заголовок карточки</h2>
      <p className="card__num-like">0</p>
      <button type="submit" className="card__like" aria-label="Лайкнуть"></button>
      <button type="submit" className="card__trash" aria-label="Удалить"></button>
    </div>
  </template>
  </>
  );
}

export default App;
