import React from 'react';
import {AuthContext} from '../../Tools/AuthContextProvider';
import {Navigate, useParams} from 'react-router-dom';

import {
	Box,
	Paper,
	Button,
	Container,
	Grid,
	Select,
	MenuItem,
	TextField,
} from '@mui/material';
import {CapacitorHttp} from '@capacitor/core';

import API from '../../Model/Api';

class NouvelArticleContent extends React.Component {
	state = {
		id: null,
		titre: '',
		informations: '',
		image: '',
		categories: [],
		categoriesOut: [],
	};

	static contextType = AuthContext;

	componentDidMount() {
		if (this.props.id) {
			CapacitorHttp.get({url: API.url + 'article/'+ this.props.id}).then((res) => {
				const articles = res.data;
				console.log(articles.length > 0);
				if (articles.length > 0) {
					const article = articles[0];
					this.setState({
						id: article.id,
						titre: article.titre,
						image: article.image,
						informations: article.informations,
					});
				}
			});
		}
		CapacitorHttp.get({url: API.url + 'categorie/'})
			.then((res) => {
				const categories = res.data;
				this.setState({categories: categories});
				const ids = categories.map((item) => item.id);
				this.setState({categoriesOut: ids});
			});
	}

	handleTitreChange = (event) => {
		this.setState({titre: event.target.value});
	};

	handleImageChange = (event) => {
		this.setState({image: event.target.value});
	};

	handleInformationsChange = (event) => {
		this.setState({informations: event.target.value});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const payload = {
			titre: this.state.titre,
			image: this.state.image,
			informations: this.state.informations,
			categories: this.state.categoriesOut,
		};
		if (this.props.id) {
			const options = {
				url: API.url + `article/${this.props.id}`,
				headers: {
					'Authorization': `Bearer ${this.context.token}`,
					'Content-Type': 'application/json',
				},
				data: payload,
			};
			CapacitorHttp.put(options).then((response) => {
				// redirect user to home page
				this.setState({redirect: true});
			}).catch((err) => this.setState({error: err + ''}));
		} else {
			const options = {
				url: API.url + 'article/',
				headers: {
					'Authorization': `Bearer ${this.context.token}`,
					'Content-Type': 'application/json',
				},
				data: payload,
			};
			CapacitorHttp.post(options).then((response) => {
				// redirect user to home page
				this.setState({redirect: true});
			}).catch((err) => this.setState({error: err + ''}));
		}
	};

	handleCategorieChange = (event) => {
		this.setState({categoriesOut: event.target.value});
	};

	render() {
		if (this.state.redirect) {
			return (<Navigate to="/mypost" />);
		}
		return (
			<>
				<Container maxWidth="md">
					<Box sx={{py: 8, textAlign: 'left'}}>
						<Paper elevation={3} sx={{p: 4}}>
							<form onSubmit={this.handleSubmit}>
								<Grid spacing={4}>
									<Select
										id="multiple-select"
										multiple
										value={this.state.categoriesOut}
										onChange={this.handleCategorieChange}
									>
										{this.state.categories.map((categorie) => (
											<MenuItem value={categorie.id}>{categorie.nom}</MenuItem>
										))}
									</Select>
									<br /><br />
									<TextField
										label="Titre"
										value={this.state.titre}
										onChange={this.handleTitreChange}
										fullWidth
									/>
									<br /><br />
									<TextField
										label="Image"
										value={this.state.image}
										onChange={this.handleImageChange}
										fullWidth
									/>
									<br /><br />
									<TextField
										label="Contenu"
										value={this.state.informations}
										onChange={this.handleInformationsChange}
										multiline
										rows={4}
										fullWidth
									/>
									<br />
									<br />
									<Button type="submit" variant="contained">
										{this.state.id ? 'Modier' : 'Créer'}
									</Button>
								</Grid>
							</form>
						</Paper>
					</Box>
				</Container>
			</>
		);
	}
}

export default function NouvelArticle() {
	const {id} = useParams();
	return (<NouvelArticleContent id={id} />);
}