// Importation des modules nécessaires
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('../model/JwtToken');

// Importation du modèle UtilisateurDAO
const UtilisateurDAO = require('../model/UtilisateurDAO');

// Route pour l'authentification d'un utilisateur
router.post('/', (req, res) => {
   // Récupération de l'utilisateur par son nom d'utilisateur
   UtilisateurDAO.getByUsername(req.body.username, (err, user) =>{
      // Si l'utilisateur n'existe pas, renvoie une erreur 403
      if (user == null || user.length == 0) {
         return res.sendStatus(403);
      }
      // Comparaison du mot de passe fourni avec celui enregistré en base de données
      bcrypt.compare(req.body.password, user[0].password, function(err, result) {
         if (err) {
            return res.sendStatus(403);
         } else {
            // Génération d'un token JWT et renvoi au client
            const token = jwt.generate({username: user[0].username, id: user[0].id});
            return res.json(token);
         }
      });
   });
});

// Route pour l'enregistrement d'un nouvel utilisateur
router.post('/register', (req, res) => {
   // Création d'un objet utilisateur avec les données fournies
   const newUser = {
      username: req.body.username,
      password: req.body.password,
   };
   const saltRounds = 10;
   jwt.verify(req, function(err, user) {
      if (user.role === 'admin') {
         // Hashage du mot de passe avant enregistrement en base de données
         bcrypt.hash(user.password, saltRounds, function(err, hash) {
            if (err) {
               return res.sendStatus(500);
            } else {
               user.password = hash;
               // Ajout de l'utilisateur en base de données
               UtilisateurDAO.add(newUser, (err, result) => {
                  if (err) {
                     return res.sendStatus(500);
                  } else {
                     return res.sendStatus(201);
                  }
               });
            }
         });
      }
   });
});

router.post('/refresh', function(req, res) {
   jwt.verify(req, function(err, user) {
      if (err) {
         return res.sendStatus(403);
      } else {
         const token = jwt.generate({username: user.username, id: user.id});
         return res.json(token);
      }
   });
});

// Exportation du routeur
module.exports = router;
