import React from 'react';
import {CapacitorHttp} from '@capacitor/core';
import {Container, Grid, Typography} from '@mui/material';

import API from '../../Model/Api';
import {AuthContext} from '../../Tools/AuthContextProvider';
import ArticleCard from '../../components/articleCard/ArticleCard';

export default class MesArticles extends React.Component {
	state = {
		articles: [],
	};

	static contextType = AuthContext;

	componentDidMount() {
		const username = localStorage.getItem('username');
		if (username) {
			CapacitorHttp.get({
				url: API.url + 'article/auteur/' + username,
				headers: {
					'Authorization': `Bearer ${this.context.token}`
				}
			}).then((res) => {
				const articles = res.data;
				this.setState({articles});
			});
		}
	}

	handleUpdate = (event) => {
		this.componentDidMount();
	};

	render() {
		return (
			<>
				<br/>
				<Typography variant='h4' component='h2' sx={{color: 'white'}}>Mes articles</Typography>
				<Container sx={{py: 2}} maxWidth="md">
					<Grid container spacing={4}>
						{this.state.articles.map((article) => (
							<Grid item key={article.titre} xs={12} sm={6} md={4}>
								<ArticleCard article={article} onUpdate={this.handleUpdate} />
							</Grid>
						))}
						{!this.state.articles || this.state.articles.length == 0 &&(
							<Grid item>
								<Typography variant='h5'>Aucun article trouvée</Typography>
							</Grid>
						)}
					</Grid>
				</Container>
			</>
		);
	}
}