const assert = require('assert');
const jwt = require('jsonwebtoken');
const JwtToken = require('../src/model/JwtToken');
require('dotenv').config();

describe('JwtToken', function() {
   describe('#generate()', function() {
      it('devrait générer un jeton JWT', function() {
         const userobj = {username: 'testuser'};
         const token = JwtToken.generate(userobj);

         assert.strictEqual(typeof token, 'string');

         const decodedToken = jwt.decode(token, process.env.API_SECRET);
         assert.strictEqual(decodedToken.username, userobj.username);
      });

      it('devrait ne pas générer un jeton JWT (cas d\'erreur objet null)', function() {
         const token = JwtToken.generate(null);
         assert.notStrictEqual(typeof token, 'string');
         assert.equal(token, null);
      });
   });

   describe('#verify()', function() {
      it('devrait vérifier un jeton JWT valide', function(done) {
         const userobj = {username: 'testuser'};
         const token = jwt.sign(userobj, process.env.API_SECRET, {expiresIn: '1800s'});
         const req = {
            headers: {
               'authorization': 'Bearer ' + token,
            },
         };

         JwtToken.verify(req, function(err, user) {
            assert.equal(err, null);
            assert.strictEqual(user.username, userobj.username);
            done();
         });
      });

      it('devrait renvoyer une erreur pour un jeton JWT invalide', function(done) {
         const invalidToken = 'invalidtoken';

         const req = {
            headers: {
               'authorization': 'Bearer ' + invalidToken,
            },
         };

         JwtToken.verify(req, function(err, user) {
            assert.strictEqual(err, 'Invalid token');
            assert.strictEqual(user, null);
            done();
         });
      });
   });
});
