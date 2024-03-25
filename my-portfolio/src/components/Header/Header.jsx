import React, { useState } from 'react';
import './index.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="logo">
        <img className="logo-img" src="data:image/png;base64,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" alt="PORTFOLIO" />
        <p>Portfólio</p>
      </div>
      <nav className={`navbar ${showMenu ? 'active' : ''}`}>
        <ul>
          <li><a href="profile-container">Home</a></li>
          <li><a href="selection-section">Skills</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`fas ${showMenu ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </header>
  );
}

export default Header;
