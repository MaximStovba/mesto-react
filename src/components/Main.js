// Main.js

import React from 'react';
import Card from './Card';
import { api } from '../utils/Api';
// импортируем объект контекста
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  }) {

  // Переменные состояния
  const [cards, setCards] = React.useState([]);

  // API-запрос
  React.useEffect(() => {
    api.getInitialCards()
    .then((allCards) => {
      setCards(allCards.map(item => ({
        id: item._id,
        name: item.name,
        link: item.link,
        likes: item.likes,
        numLikes: item.likes.length,
        })));
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }, []);

  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={currentUser.avatar} alt={currentUser.name} className="profile__avatar" />
          <div className="profile__avatar-overlay">
            <button type="button" className="profile__patchavatar-btn" aria-label="Редактировать" onClick={onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__subtitle">{currentUser.about}</p>
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

