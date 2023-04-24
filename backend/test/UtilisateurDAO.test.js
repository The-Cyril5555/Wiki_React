const assert = require('assert');
const db = require('../src/model/Database');
const utilisateurDAO = require('../src/model/UtilisateurDAO');

// Stocker les données avant le test
let utilisateurData = [];
before((done) => {
   db.query('SELECT * FROM user', (err, result) => {
      if (err) throw err;
      utilisateurData = result;
      done();
   });
});

// Les tests pour la classe UtilisateurDAO
describe('UtilisateurDAO', () => {
   describe('#getAll()', () => {
      it('devrait retourner tous les utilisateurs de la base de données', (done) => {
         utilisateurDAO.getAll((err, result) => {
            if (err) throw err;
            assert.strictEqual(result.length, utilisateurData.length);
            done();
         });
      });
   });

   describe('#getById()', () => {
      it('devrait retourner un utilisateur avec l\'ID spécifié', (done) => {
         const id = 1; // ID du premier utilisateur
         utilisateurDAO.getById(id, (err, result) => {
            if (err) throw err;
            assert.strictEqual(result[0].id, id);
            done();
         });
      });
   });


   describe('#add()', () => {
      it('devrait ajouter un nouvel utilisateur dans la base de données', (done) => {
         const newUser = {username: 'testuser', password: 'password123'};
         utilisateurDAO.add(newUser, (err, result) => {
            if (err) throw err;
            assert.strictEqual(result.affectedRows, 1);
            insertId = result.insertId;
            done();
         });
      });
   });

   describe('#getByUsername()', () => {
      it('devrait retourner un utilisateur avec le nom d\'utilisateur spécifié', (done) => {
         const username = 'testuser'; // nom d'utilisateur du premier utilisateur
         utilisateurDAO.getByUsername(username, (err, result) => {
            if (err) throw err;
            assert.strictEqual(result[0].username, username);
            done();
         });
      });
   });

   describe('#deleteByUsername()', () => {
      it('devrait supprimer un utilisateur de la base de données par nom d\'utilisateur', (done) => {
         const username = 'testuser'; // nom d'utilisateur du premier utilisateur
         utilisateurDAO.deleteByUsername(username, (err, result) => {
            if (err) throw err;
            assert.strictEqual(result.affectedRows, 1);
            done();
         });
      });
   });

   describe('#deleteById()', () => {
      it('devrait supprimer un utilisateur de la base de données par ID', (done) => {
         const newUser = {username: 'testuser', password: 'password123'};
         utilisateurDAO.add(newUser, (err, result) => {
            if (err) throw err;
            assert.strictEqual(result.affectedRows, 1);
            utilisateurDAO.deleteById(result.insertId, (err, result) => {
               if (err) throw err;
               assert.strictEqual(result.affectedRows, 1);
               done();
            });
         });
      });
   });
});
