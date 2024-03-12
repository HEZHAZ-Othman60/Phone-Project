import React, { useState } from 'react';
import './App.css';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header>
      <div className="container header-flex">
        <h1>Logo</h1>
        <nav>
          <ul id="menu-list" style={{ display: isMenuVisible ? 'block' : 'none' }}>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Produits</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button id="menu-toggle" onClick={toggleMenu}>Menu</button>
      </div>
    </header>
  );
};

export default Navbar;
