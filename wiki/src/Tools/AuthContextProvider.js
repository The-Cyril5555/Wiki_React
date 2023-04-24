import React, {createContext, useState, useEffect} from 'react';
import {CapacitorHttp} from '@capacitor/core';

import API from '../Model/Api';

const AuthContext = createContext();

function AuthContextProvider(props) {
   const [token, setToken] = useState();
   const [username, setUsername] = useState();

   // Rafraichissement du token
   function refreshToken(tokenParam, usernameParam) {
      if (tokenParam) {
         const options = {
            url: API.url + 'login/refresh/',
            headers: {
               'Authorization': `Bearer ${tokenParam}`,
            },
         };
         CapacitorHttp.post(options).then((response) => {
            const newToken = response.data;
            if (newToken) {
               handleTokenChange(newToken, usernameParam);
            } else {
               handleTokenChange(null, null);
            }
         }).catch((error) => {
            handleTokenChange(null, null);
         });
      }
   }

   // Génère l'évènement pour le rafraichissement du token
   const timeout = setInterval(() => {
      refreshToken(token, username);
   }, 60000);

   useEffect(() => {
      // récupère le localstorage
      const storedToken = localStorage.getItem('token');
      const storedUsername = localStorage.getItem('username');
      setToken(storedToken);
      setUsername(storedUsername);

      const timeout = setTimeout(() => {
         refreshToken(storedToken, storedUsername);
      }, 1000);

      return () => clearTimeout(timeout);
   }, []);

   const handleTokenChange = (newToken, newUsername) => {
      if (newToken) {
         setToken(newToken);
         localStorage.setItem('token', newToken);
      } else {
         setToken(null);
         localStorage.removeItem('token');
      }
      if (newUsername) {
         setUsername(newUsername);
         localStorage.setItem('username', newUsername);
      } else {
         setUsername(null);
         localStorage.removeItem('username');
      }
   };

   return (
      <AuthContext.Provider value={{token, handleTokenChange, username}}>
         {props.children}
      </AuthContext.Provider>
   );
}

export {AuthContext, AuthContextProvider};
