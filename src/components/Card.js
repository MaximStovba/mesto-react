// Card.js

import React from 'react';
// импортируем объект контекста
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `card__trash ${isOwn ? '' : 'card__trash_hidden'}`
  );
  // Создаём переменную, которую зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_active' : ''}`
  );

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
      <h2 className="card__title">{card.name}</h2>
      <p className="card__num-like">{card.likes.length}</p>
      <button type="submit" className={cardLikeButtonClassName} aria-label="Лайкнуть" onClick={handleLikeClick}></button>
      <button type="submit" className={cardDeleteButtonClassName} aria-label="Удалить" onClick={handleDeleteClick}></button>
    </div>
  );
}

export default Card;
