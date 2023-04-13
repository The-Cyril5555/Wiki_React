import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            WIKI 
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/categorie"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Catégorie
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/connexion"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Connexion
              </Link>
            </li>
      
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
