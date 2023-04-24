const db = require('./Database.js');

class UtilisateurDAO {
   getAll(callback) {
      db.query('SELECT * FROM user', callback);
   }

   getById(key, callback) {
      db.query('SELECT * FROM user WHERE id = ?', [key], callback);
   }

   getByUsername(key, callback) {
      db.query('SELECT * FROM user WHERE username = ?', [key], callback);
   }

   add(user, callback) {
      const {username, password} = user;
      db.query('INSERT INTO user (username, password) VALUES (?, ?)', [username, password], callback);
   }

   deleteByUsername(key, callback) {
      db.query('DELETE FROM user WHERE username = ?', [key], callback);
   }

   deleteById(key, callback) {
      db.query('DELETE FROM user WHERE id = ?', [key], callback);
   }
}

module.exports = new UtilisateurDAO();
