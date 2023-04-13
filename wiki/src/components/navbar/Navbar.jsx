import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Wiki</div>
      <div className="navbar-center">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Accueil</Link>
          </li>
          <li className="navbar-item">
            <Link to="/categorie" className="navbar-link">Catégorie</Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/connexion" className="navbar-link">Connexion</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
