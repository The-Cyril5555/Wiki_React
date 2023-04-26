import React from 'react';
import {Grid, Container, Box} from '@mui/material';
import {CapacitorHttp} from '@capacitor/core';
import './Accueil.css';


import ArticleCard from '../articleCard/ArticleCard';
import CategorieCard from '../categorieCard/CategorieCard';
import API from '../../Model/Api';


export default class Home extends React.Component {
	state = {
		articles: [],
		categories: [],
	};

   

	componentDidMount() {
		// Sélectionner 2 articles et catégories aléatoires
		CapacitorHttp.get({url: API.url + 'article'})
			.then((res) => {
				let articles = res.data;
				articles = articles.sort(() => 0.5 - Math.random()).slice(0, 2);
				this.setState({articles: articles});
			});
		CapacitorHttp.get({url: API.url + 'categorie'})
			.then((res) => {
				let categories = res.data;
				categories = categories.sort(() => 0.5 - Math.random()).slice(0, 2);
				this.setState({categories: categories});
			});
	}

	render() {
		return (
         
			<Container>
				<Box>
					<div className="accueil-header">
						<h1>Bienvenue sur le wiki</h1>
						<p>Page d&apos;accueil</p>
					</div>
					{/* <div className="accueil-content">
               <h2>À propos de nous</h2>
               <p>
                  Nous sommes une entreprise spécialisée dans la création de solutions innovantes. Notre équipe d'experts travaille sans relâche pour développer et mettre en œuvre des produits et services qui répondent aux besoins de nos clients.
               </p>
               <h2>Nos services</h2>
               <p>
                  Notre gamme de services comprend le développement de logiciels, la conception de sites Web, le marketing numérique, la gestion de projets et bien plus encore. Nous nous efforçons de fournir des solutions de qualité supérieure qui offrent une valeur ajoutée à nos clients.
               </p>
            </div> */}
					<Grid spacing={2} sx={{textAlign: 'left'}}>

						<Container sx={{py: 2}} maxWidth="md">
							<Grid container spacing={4}>
								{this.state.articles.map((article) => (
									<Grid item key={article.titre} xs={12} sm={6}>
										<ArticleCard article={article} />
									</Grid>
								))}
							</Grid>
						</Container>

						<Container sx={{py: 4}} maxWidth="md">
							<Grid container spacing={4}>
								{this.state.categories.map((categorie) => (
									<Grid item key={categorie.titre} xs={12} sm={6}>
										<CategorieCard categorie={categorie} />
									</Grid>
								))}
							</Grid>
						</Container>
					</Grid>
				</Box>
			</Container>
		);
	}
};