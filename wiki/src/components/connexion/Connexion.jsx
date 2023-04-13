import React from 'react';
import './Connexion.css';

const Connexion = () => {
  return (
    <div className="connexion">
      <h1>Connexion</h1>
      <form className="connexion-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Connexion;
