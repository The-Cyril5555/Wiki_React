import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Votre logo</h2>
          <p>
            Votre texte descriptif ici.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Liens utiles</h2>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} VotreNom | Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;
