import React from 'react';
import './NavHeader.style.css';
import hamburger from '../assets/images/Hamburguesa.svg';

const NavHeader = () => (
  <header className="header-container">
    <button type="button" onClick={() => console.log('hamburguer Clicked')} className="hamburguer-button">
      <img src={hamburger} alt={hamburger} />
    </button>
  </header>
);

export default NavHeader;
