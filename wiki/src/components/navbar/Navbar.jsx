import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Wiki</div>
      <div className="navbar-center">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#" className="navbar-link">Accueil</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Catégorie</a>
          </li>
        </ul>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#" className="navbar-link">Connexion</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
