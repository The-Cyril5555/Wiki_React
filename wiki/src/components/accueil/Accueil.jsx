import React from 'react';
import './Accueil.css';

const Accueil = () => {
  return (
    <div className="accueil">
      <div className="accueil-header">
        <h1>Bienvenue sur notre site</h1>
        <p>Ceci est la page d'accueil de notre merveilleux site.</p>
      </div>
      <div className="accueil-content">
        <h2>À propos de nous</h2>
        <p>
          Nous sommes une entreprise spécialisée dans la création de solutions innovantes. Notre équipe d'experts travaille sans relâche pour développer et mettre en œuvre des produits et services qui répondent aux besoins de nos clients.
        </p>
        <h2>Nos services</h2>
        <p>
          Notre gamme de services comprend le développement de logiciels, la conception de sites Web, le marketing numérique, la gestion de projets et bien plus encore. Nous nous efforçons de fournir des solutions de qualité supérieure qui offrent une valeur ajoutée à nos clients.
        </p>
      </div>
    </div>
  );
}

export default Accueil;
