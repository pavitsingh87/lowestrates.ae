// components/Header.js
import React, { useState } from 'react';
import Link from 'next/link';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="js menu-open">
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@100..900&display=swap" rel="stylesheet" />

      <header className="site-header">
        <a className="logo" href="/" rel="home">
          <span className="ftext">LowestRates.</span>
          <span className="btext">ae</span>
        </a>
        <a role="button" className="menu-icon" onClick={toggleMenu}>
          <span>Menu</span>
        </a>
        <nav className={isMenuOpen ? "open" : ''}>
 
          <a role="button" className="close-menu" onClick={toggleMenu}>Close menu</a>
          <a className="logo" href="/" rel="home"> LowestRates.ca logo </a>
          <div className="main-menu">
            <ul className="menu primary-menu">
              <li className="leaf active-trail">
                <a href="/mortgage" className="active-trail active">Mortgage</a>
              </li>
              <li className="leaf">
                <a href="/creditcards">Credit Cards</a>
              </li>
              <li className="leaf">
                <a href="/resource-centre">Resource Centre</a>
              </li>
              <li className="leaf">
                <a href="/blog">Blog</a>
              </li>  
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
