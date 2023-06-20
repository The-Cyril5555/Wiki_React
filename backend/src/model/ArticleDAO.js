// Importation du module permettant de se connecter à la base de données
const db = require('./Database.js');

// Définition de la classe ArticleDAO
class ArticleDAO {
   // Méthode pour récupérer tous les articles
   getAll(callback) {
      db.query(
         'SELECT * FROM article',
         callback,
      );
   };

   // Méthode pour récupérer un article par son ID
   getById(key, callback) {
      db.query('SELECT article.id as id, user.username as auteur, article.auteur_id, article.titre, article.image, article.informations FROM article LEFT JOIN user ON user.id = article.auteur_id WHERE article.id = ?', [key], callback);
   };

   // Méthode pour récupérer tous les articles d'une catégorie spécifique
   getByCategoryId(key, callback) {
      db.query('SELECT article.id as id, user.username as auteur, article.auteur_id, article.titre, article.image, article.informations FROM article INNER JOIN article_categorie ON article.Id = article_id LEFT JOIN user ON user.id = article.auteur_id WHERE article_categorie.categorie_id = ?', [key], callback);
   };

   // Méthode pour récupérer tous les articles d'un auteur spécifique
   getByAuteur(key, callback) {
      db.query('SELECT article.id as id, user.username as auteur, article.auteur_id, article.titre, article.image, article.informations FROM article INNER JOIN user ON user.id = article.auteur_id WHERE user.username = ?', [key], callback);
   };

   // Définition de la méthode 'add'
   add(article, callback) {
      // Exécute une requête SQL
      db.query(
         // Requête d'insertion SQL
         'INSERT INTO article (auteur_id, titre, image, informations) VALUES (?, ?, ?, ?)',
         // Remplace les '?' par ces valeurs
         [article.auteur_id, article.titre, article.image, article.informations],
         // Appelle 'callback' après l'insertion
         callback,
      );
   };

   // Méthode pour mettre à jour un article
   update(id, article, callback) {
      db.query(
         'UPDATE article SET auteur_id = ?, titre = ?, image = ?, informations = ? WHERE id = ?',
         [article.auteur_id, article.titre, article.image, article.informations, id],
         callback,
      );
   };

   // Méthode pour définir les catégories d'un article
   setCategorie(articleId, categories, callback) {
      db.query(
         'DELETE FROM article_categorie WHERE article_id = ?',
         [articleId],
         function(error) {
            if (error) {
               callback(error);
            } else {
               categories?.forEach((categorieId) => {
                  db.query(
                     'INSERT INTO `article_categorie` (`article_id`, `categorie_id`) VALUES (?, ?)',
                     [articleId, categorieId],
                     callback,
                  );
               });
            }
         },
      );
   };

   // Méthode pour supprimer un article
   delete(key, callback) {
      db.query(
         'DELETE FROM article WHERE id = ?',
         [key],
         callback,
      );
   };
};

const categorieDAO = new ArticleDAO();

module.exports = categorieDAO;
