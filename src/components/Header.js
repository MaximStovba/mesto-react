// Header.js

import React from 'react';
import logo from '../images/header__logo.svg';

function Header() {
  return (
    <header class="header">
      <img src={logo} alt="Логотип" class="header__logo" />
    </header>
  );
}

export default Header;
