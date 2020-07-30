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
      setCards(allCards);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }, []);

  // отмечаем лайки и дизлайки
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
    });
  }

  // удаление своей карточки
  function handleCardDelete(card) {
    api.deleteMyCard(card._id)
    .then((delCard) => {
      // Cоздаем копию массива, исключив из него удалённую карточку
      const newCards = cards.filter((c) => c._id !== card._id);
      console.log(delCard);
      // Обновляем стейт
      setCards(newCards);
    });
  }

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
          cards.map(item => <Card key={item._id} card={item} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />)
        }
      </section>
    </main>
  );
}

export default Main;

