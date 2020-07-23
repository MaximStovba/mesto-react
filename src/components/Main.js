// Main.js

import React from 'react';
import Card from './Card';
import { api } from '../utils/Api';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
}) {

  // Переменные состояния
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  // API-запрос
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userInfo, allCards]) => {
      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      setUserAvatar(userInfo.avatar);
      setCards(allCards.map(item => ({
        id: item._id,
        name: item.name,
        link: item.link,
        likes: item.likes.length,
        })));
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userAvatar} alt={userName} className="profile__avatar" />
          <div className="profile__avatar-overlay">
            <button type="button" className="profile__patchavatar-btn" aria-label="Редактировать" onClick={onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>
      <section className="card-container">
        {
          cards.map(item => <Card key={item.id} card={item} onCardClick={onCardClick} />)
        }
      </section>
    </main>
  );
}

export default Main;

