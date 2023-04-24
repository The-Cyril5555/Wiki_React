const db = require('./Database.js');

class CategorieDAO {
   getAll = (callback) => {
      db.query('SELECT * FROM categorie', callback);
   };

   getById = (id, callback) => {
      db.query('SELECT * FROM categorie WHERE id = ?', [id], callback);
   };

   deleteById = (id, callback) => {
      db.query('DELETE FROM categorie WHERE id = ?', [id], callback);
   };

   add = (nom, image, callback) => {
      db.query('INSERT INTO categorie (nom, image) VALUES (?, ?)', [nom, image], callback);
   };

   update = (id, nom, image, callback) => {
      db.query('UPDATE categorie SET nom = ?, image = ? WHERE id = ?', [nom, image, id], callback);
   };
}

const categorieDAO = new CategorieDAO();

module.exports = categorieDAO;
