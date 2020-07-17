import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
  <>
  <div class="page">
    <Header />
    <Main />
    <Footer />
  </div>
  <template id="card">
    <div class="card">
      <img class="card__image" />
      <h2 class="card__title"></h2>
      <p class="card__num-like">0</p>
      <button type="submit" class="card__like" aria-label="Лайкнуть"></button>
      <button type="submit" class="card__trash" aria-label="Удалить"></button>
    </div>
  </template>
  </>
  );
}

export default App;
