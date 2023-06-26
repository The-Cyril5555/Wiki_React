/**
 * Importation des modules
 */
const express = require('express');
const router = express.Router();
const jwt = require('../model/JwtToken');
const Article = require('../model/Article');

/**
 * Importation des DAO
 */
const ArticleDAO = require('../model/ArticleDAO');
const UtilisateurDAO = require('../model/UtilisateurDAO');

router.post('/', function(req, res) {
   jwt.verify(req, function(err, user) {
      if (err) {
         // On affiche les erreurs s'il y'en a
         res.sendStatus(err.status || 500);
      } else {
         UtilisateurDAO.getByUsername(user.username, (err1, userObj) => {
            if (err1) {
               // On affiche les erreurs s'il y'en a
               res.status(err1.status || 500);
               res.send(err1);
            } else {
               req.body.auteur_id = userObj[0].id;
               ArticleDAO.add(req.body, (err2, article) => {
                  ArticleDAO.setCategorie(article?.insertId, req.body.categories, (err3, data) => {});
                  if (err2) {
                     // On affiche les erreurs s'il y'en a
                     res.sendStatus(err2.status || 500);
                  } else {
                     res.send(article);
                  }
               });
            }
         });
      }
   });
});


router.put('/:id', function(req, res) {
   jwt.verify(req, function(err, user) {
      if (err) {
         res.sendStatus(err.status || 500);
      } else {
         UtilisateurDAO.getByUsername(user.username, (err1, userObj) => {
            if (err1) {
               res.status(err.status || 500);
               res.send(err);
            } else {
               ArticleDAO.getById(req.params.id, function(err, article) {
                  if (article.length > 0) {
                     const articleObj = Article.fromObject(article[0]);
                     if (articleObj.canEdit(user)) {
                        req.body.auteur_id = userObj[0].id;
                        ArticleDAO.update(req.params.id, req.body, (err2, article) => {
                           ArticleDAO.setCategorie(req.params.id, req.body.categories, (err3, data) => { });
                           if (err2) {
                              res.sendStatus(err.status || 500);
                           } else {
                              res.send(article);
                           }
                        });
                     } else {
                        res.sendStatus(500);
                     }
                  } else {
                     res.sendStatus(500);
                  }
               });
            }
         });
      }
   });
});

/**
 * Lors d'une requête GET sur l'endpoint
 */
router.get('/auteur/:id', function(req, res) {
   jwt.verify(req, function(err, user) {
      ArticleDAO.getByAuteur(req.params.id, function(err, rows) {
         if (err) {
            // On affiche les erreurs s'il y'en a
            res.sendStatus(err.status || 500);
         } else {
            const retRows = rows.map(function(row) {
               row = Article.fromObject(row);
               row.editable = row.canEdit(user);
               return row;
            });

            res.json(retRows);
         }
      });
   });
});


router.get('/categorie/:id', function(req, res) {
   jwt.verify(req, function(err, user) {
      ArticleDAO.getByCategoryId(req.params.id, function(err, rows) {
         if (err) {
            // On affiche les erreurs s'il y'en a
            res.sendStatus(err.status || 500);
         } else {
            const retRows = rows.map(function(row) {
               row = Article.fromObject(row);
               row.editable = row.canEdit(user);
               return row;
            });

            res.json(retRows);
         }
      });
   });
});

router.get('/:id', function(req, res) {
   jwt.verify(req, function(err, user) {
      ArticleDAO.getById(req.params.id, function(err, rows) {
         if (err) {
            // On affiche les erreurs s'il y'en a
            res.sendStatus(err.status || 500);
         } else {
            const retRows = rows.map(function(row) {
               row = Article.fromObject(row);
               row.editable = row.canEdit(user);
               return row;
            });

            res.json(retRows);
         }
      });
   });
});

router.delete('/:id', function(req, res) {
   jwt.verify(req, function(err, user) {
      if (err) {
         res.sendStatus(err.status || 500);
      } else {
         ArticleDAO.getById(req.params.id, function(err, article) {
            if (article.length > 0) {
               const articleObj = Article.fromObject(article[0]);
               if (articleObj.canEdit(user)) {
                  ArticleDAO.delete(req.params.id, function(err, row) {
                     if (err) {
                        // On affiche les erreurs s'il y'en a
                        res.sendStatus(err.status || 500);
                     } else {
                        res.json(row);
                     }
                  });
               } else {
                  res.sendStatus(500);
               }
            } else {
               res.sendStatus(500);
            }
         });
      }
   });
});

router.get('/', function(req, res) {
   jwt.verify(req, function(err, user) {
      ArticleDAO.getAll(function(err, rows) {
         if (err) {
            // On affiche les erreurs s'il y'en a
            res.sendStatus(err.status || 500);
         } else {
            const retRows = rows.map(function(row) {
               row = Article.fromObject(row);
               row.editable = row.canEdit(user);
               return row;
            });

            res.json(retRows);
         }
      });
   });
});

module.exports = router;
