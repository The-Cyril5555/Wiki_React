import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Accueil from './components/accueil/Accueil';
import Categorie from './components/categorie/Categorie';
import Connexion from './components/connexion/Connexion';
import Article from './components/article/Article';
import Articles from './components/articles/Articles';
import NoPage from './components/noPage/NoPage';
import MesArticles from './components/mesArticles/MesArticles';
import NouvelArticle from './components/nouvelArticle/NouvelArticle';

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
					<Route path='/categorie/:id' element={<Articles />}/>
					<Route path='/mesArticles' element={<MesArticles />} />
					<Route path='/nouvelArticle' element={<NouvelArticle />} />
					<Route path='/article/:id/edit' element={<NouvelArticle />} />
					{/* <Route path='/categorie/:id' element={<ListeArticles />}/> */}
					<Route path="*" element={<NoPage />} />
				</Routes>
			</header>
			<Footer/>
		</div>
	);
}

export default App;
