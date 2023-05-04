import React, { createContext, useState, useEffect } from 'react';
import { CapacitorHttp } from '@capacitor/core';
import API from '../Model/Api';

// Crée le contexte d'authentification
const AuthContext = createContext();

function AuthContextProvider(props) {
	const [token, setToken] = useState(); // État pour stocker le token d'authentification
	const [username, setUsername] = useState(); // État pour stocker le nom d'utilisateur

	// Fonction pour rafraîchir le token
	function refreshToken(tokenParam, usernameParam) {
		if (tokenParam && tokenParam !== "Forbidden") {
			const options = {
				url: API.url + 'login/refresh/', // URL pour rafraîchir le token
				headers: {
					'Authorization': `Bearer ${tokenParam}`, // Ajoute le token dans l'en-tête de la requête
				},
			};
			CapacitorHttp.post(options)
				.then((response) => {
					const newToken = response.data; // Récupère le nouveau token de la réponse
					handleTokenChange(newToken, usernameParam); // Met à jour le token et le nom d'utilisateur
				})
				.catch(() => {
					handleTokenChange(null, null); // Gère les erreurs en mettant à jour le token et le nom d'utilisateur à null
				});
		}
	}

	// Génère l'évènement pour le rafraichissement du token
	const timeout = setInterval(() => {
		refreshToken(token, username);
	}, 60000);

	useEffect(() => {
		// Récupère les valeurs du token et du nom d'utilisateur dans le stockage local
		const storedToken = localStorage.getItem('token');
		const storedUsername = localStorage.getItem('username');
		setToken(storedToken); // Met à jour le token avec la valeur stockée
		setUsername(storedUsername); // Met à jour le nom d'utilisateur avec la valeur stockée

		// Configure un délai pour rafraîchir le token après 1 seconde
		const timeout = setTimeout(() => {
			refreshToken(storedToken, storedUsername);
		}, 1000);

		// Nettoie le délai lorsqu'un composant est démonté ou lorsque les dépendances changent
		return () => clearTimeout(timeout);
	}, []);

	// Fonction pour mettre à jour le token et le nom d'utilisateur
	const handleTokenChange = (newToken, newUsername) => {
		if (newToken && newToken !== "Forbidden") {
			setToken(newToken); // Met à jour le token avec la nouvelle valeur
			localStorage.setItem('token', newToken); // Stocke le nouveau token dans le stockage local
		} else {
			setToken(null); // Met à jour le token à null
			localStorage.removeItem('token'); // Supprime le token du stockage local
		}
		if (newUsername && newToken !== "Forbidden") {
			setUsername(newUsername); // Met à jour le nom d'utilisateur avec la nouvelle valeur
			localStorage.setItem('username', newUsername); // Stocke le nouveau nom d'utilisateur dans le stockage local
		} else {
			setUsername(null); // Met à jour le nom d'utilisateur à null
			localStorage.removeItem('username'); // Supprime le nom d'utilisateur du stockage local
		}
	};

	// Rend le contexte d'authentification disponible pour les composants enfants
	return (
		<AuthContext.Provider value={{ token, handleTokenChange, username }}>
			{props.children}
		</AuthContext.Provider>
	);
}

// Exporte le contexte d'authentification
export { AuthContext, AuthContextProvider };