import React from 'react';
import { BrowserRouter, Routes ,Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Accueil from './components/accueil/Accueil';
import Categorie from './components/categorie/Categorie';
import Connexion from './components/connexion/Connexion';
import Article from './components/article/Article';
import NoPage from './components/noPage/NoPage';
import Articles from './components/articles/Articles';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Accueil />}/>
          <Route path='/categorie' element={<Categorie />}/>
          <Route path='/connexion' element={<Connexion />}/>
          <Route path='/article/:id' element={<Article />}/>
          <Route path='/articles' element={<Articles />}/>
          <Route path='/categorie/:id' element={<Articles />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
