import React from 'react';
import {AuthContext} from '../../Tools/AuthContextProvider';
import {useParams} from 'react-router-dom';
import {CapacitorHttp} from '@capacitor/core';

import API from '../../Model/Api';
import ArticleCard from '../articleCard/ArticleCard'


import {
	Container,
	Grid,
	Typography,
} from '@mui/material';

class ArticlesContent extends React.Component {
	state = {
		articles: [],
	};

	static contextType = AuthContext;

	componentDidMount() {
		const url = this.props.id ? 'article/categorie/'+this.props.id : `article`;
		CapacitorHttp.get({
			url: API.url + url,
			headers: {
				'Authorization': `Bearer ${this.context.token}`
			}
		}).then((res) => {
			const articles = res.data;
			this.setState({articles});
		});
	}

	handleUpdate = (event) => {
		console.log('update');
		this.componentDidMount();
	};

	render() {
		console.log(this.state.articles);
		return (
			<>
				<Container sx={{py: 8}} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{this.state.articles.length > 0 && this.state.articles.map((article) => (
							<Grid item key={article.titre} xs={12} sm={6} md={4}>
								<ArticleCard article={article} onUpdate={this.handleUpdate}/>
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


export default function Articles() {
	const {id} = useParams();
	return (<ArticlesContent id={id} />);
}
