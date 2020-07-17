import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
  <>
  <div className="page">
    <Header />
    <Main />
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
