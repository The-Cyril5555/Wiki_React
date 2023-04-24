// Importation des modules nécessaires
const express = require('express');
const router = express.Router();

// Importation du modèle CategorieDAO
const CategorieDAO = require('../model/CategorieDAO');

// Route pour récupérer toutes les catégories
router.get('/', function(req, res) {
   // Récupération de toutes les catégories en base de données
   CategorieDAO.getAll(function(err, row) {
      if (err) {
         // En cas d'erreur, renvoie une erreur 500
         res.sendStatus(err.status || 500);
      } else {
         // Sinon, renvoie les données au format JSON
         res.json(row);
      }
   });
});

// Route pour récupérer une catégorie par son id
router.get('/:id', function(req, res) {
   // Récupération de la catégorie en base de données par son id
   CategorieDAO.getById(req.params.id, function(err, row) {
      if (err) {
         // En cas d'erreur, renvoie une erreur 500
         res.sendStatus(err.status || 500);
      } else {
         // Sinon, renvoie les données au format JSON
         res.json(row);
      }
   });
});

// Route pour supprimer une catégorie par son id
router.delete('/private/:id', function(req, res) {
   jwt.verify(req, function(err, user) {
      if (user.username == 'admin') {
         // Suppression de la catégorie en base de données par son id
         CategorieDAO.deletetById(req.params.id, function(err, row) {
            if (err) {
               // En cas d'erreur, renvoie une erreur 500
               res.sendStatus(err.status || 500);
            } else {
               // Sinon, renvoie un code de succès 200
               res.sendStatus(200);
            }
         });
      } else {
         res.sendStatus(200);
      }
   });
});

// Exportation du routeur
module.exports = router;
