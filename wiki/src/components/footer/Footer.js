import React, { useState } from "react";

import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Wiki</h2>
          <p>
            Site wiki
          </p>
        </div>

        <div className="footer-section links">
          <h2>Liens utiles</h2>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/categorie">Catégorie</a></li>
            <li><a href="/connexion">Connexion</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Cyril BIZOUARN | Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;
