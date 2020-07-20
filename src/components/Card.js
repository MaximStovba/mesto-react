// Card.js

import React from 'react';

function Card({ card }) {
  return (
    <div className="card">
      <img className="card__image" src={card.link} alt={card.name} />
      <h2 className="card__title">{card.name}</h2>
      <p className="card__num-like">{card.likes}</p>
      <button type="submit" className="card__like" aria-label="Лайкнуть"></button>
      <button type="submit" className="card__trash" aria-label="Удалить"></button>
    </div>
  );
}

export default Card;
