const assert = require('assert');
const db = require('../src/model/Database');

describe('DBConnexion', function() {
   it('devrait créer une connexion à la base de données MySQL', function() {
      assert.strictEqual(typeof db, 'object');
   });

   it('devrait être capable d\'interroger la base de données', function(done) {
      db.query('SELECT 1', function(err, result) {
         assert.strictEqual(err, null);
         assert.strictEqual(result.length, 1);
         done();
      });
   });
});
