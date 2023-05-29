import React from 'react';
import {Navigate} from 'react-router-dom';
import {CapacitorHttp} from '@capacitor/core';

import API from '../../Model/Api';
import {AuthContext} from '../../Tools/AuthContextProvider';

import {
	Alert,
	AlertTitle,
	Avatar,
	Box,
	Button,
	Container,
	CssBaseline,
	TextField,
	Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default class Connexion extends React.Component {
	static contextType = AuthContext;

	state = {
		error: null,
		redirect: false,
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const loginPayload = {
			username: data.get('username'),
			password: data.get('password'),
		};
		const options = {
			url: API.url + 'login/',
			headers: {'Content-Type': 'application/json'},
			data: loginPayload,
		};
		CapacitorHttp.post(options).then((response) => {
			if(response.status == 403){
				this.setState({error: '403'})
				return;
			}
			// get token from response
			const token = response.data;
			// set JWT token to local
			this.context.handleTokenChange(token, loginPayload.username);
			// redirect user to home page
			this.setState({redirect: true});
		}).catch((err) => this.setState({error: err + ''}));
	};

	render() {
		if (this.state.redirect) {
			return <Navigate to="/" />;
		}
		return (<>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
              Sign in
					</Typography>
					<Box component="form" onSubmit={this.handleSubmit} noValidate sx={{mt: 1}}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{mt: 3, mb: 2}}
						>
                			Sign In
						</Button>
						{this.state.error && (
							<Alert severity="error">
								<AlertTitle>Nom d&apos;utilisateur ou mot de passe invalide</AlertTitle>
							</Alert>
						)}
					</Box>
				</Box>
			</Container>
		</>);
	}
}
