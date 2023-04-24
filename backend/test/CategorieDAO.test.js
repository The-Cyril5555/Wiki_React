const assert = require('assert');
const db = require('../src/model/Database');
const CategorieDAO = require('../src/model/CategorieDAO');

// Stocker les données avant le test
let categorieData = [];
const categorieDataTmp = [
   {id: 1, nom: 'test 1', image: ''},
   {id: 2, nom: 'test 2', image: './logo512.png'},
];
before((done) => {
   db.query('SELECT * FROM categorie', (err, result) => {
      if (err) throw err;
      categorieData = result;
      db.query('DELETE FROM categorie', (err, result) => {
         const queries = categorieDataTmp.map((categorie) => {
            return new Promise((resolve, reject) => {
               db.query('INSERT INTO categorie (id, nom, image) VALUES (?, ?, ?)', [categorie.id, categorie.nom, categorie.image], (err, result) => {
                  if (err) reject(err);
                  resolve(result);
               });
            });
         });
         Promise.all(queries)
            .then(() => done())
            .catch((err) => done(err));
      });
   });
});

// Restaurer les données après le test
after((done) => {
   db.query('DELETE FROM categorie', (err, result) => {
      const queries = categorieData.map((categorie) => {
         return new Promise((resolve, reject) => {
            db.query('INSERT INTO categorie (id, nom, image) VALUES (?, ?, ?)', [categorie.id, categorie.nom, categorie.image], (err, result) => {
               if (err) reject(err);
               resolve(result);
            });
         });
      });
      Promise.all(queries)
         .then(() => done())
         .catch((err) => done(err));
   });
});

// Les tests pour la classe CategorieDAO
describe('CategorieDAO', () => {
   describe('#getAll()', () => {
      it('devrait retourner toutes les catégories de la base de données', (done) => {
         CategorieDAO.getAll((err, result) => {
            if (err) throw err;
            assert.strictEqual(result.lenght, categorieDataTmp.lenght);
            assert.deepStrictEqual(result, categorieDataTmp);
            done();
         });
      });
   });

   describe('#getById()', () => {
      it('devrait retourner une catégorie avec l\'ID spécifié', (done) => {
         const id = 1; // ID de la première catégorie
         CategorieDAO.getById(id, (err, result) => {
            if (err) throw err;
            assert.strictEqual(result[0].id, id);
            assert.deepStrictEqual(result[0], categorieDataTmp[0]);
            done();
         });
      });
   });

   describe('#add()', () => {
      it('devrait ajouter une nouvelle catégorie dans la base de données', (done) => {
         const nom = 'Test Catégorie';
         const image = 'test-image.jpg';
         CategorieDAO.add(nom, image, (err, result) => {
            if (err) throw err;
            // console.log(result);
            assert.strictEqual(result.affectedRows, 1);
            done();
         });
      });
   });

   describe('#update()', () => {
      it('devrait mettre à jour une catégorie existante dans la base de données', (done) => {
         const id = 1; // ID de la première catégorie
         const nom = 'Nouveau nom';
         const image = 'nouvelle-image.jpg';
         CategorieDAO.update(id, nom, image, (err, result) => {
            if (err) throw err;
            assert.strictEqual(result.affectedRows, 1);
            done();
         });
      });
   });

   describe('#deleteById()', () => {
      it('devrait supprimer une catégorie de la base de données', (done) => {
         const id = 1; // ID de la première catégorie
         CategorieDAO.deleteById(id, (err, result) => {
            if (err) throw err;
            assert.strictEqual(result.affectedRows, 1);
            done();
         });
      });
   });
});
