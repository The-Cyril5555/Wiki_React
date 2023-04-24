// Importation du module jsonwebtoken
const jwt = require('jsonwebtoken');

// Définition de la classe JwtToken avec deux méthodes : generate() et verify()
class JwtToken {
   // Méthode pour générer un token JWT en utilisant le nom d'utilisateur passé en argument
   generate = (username) => {
      try {
         return jwt.sign(username, process.env.API_SECRET, {expiresIn: '180s'});
      } catch (error) {
         return null;
      }
   };

   // Méthode pour vérifier un token JWT dans la requête passée en argument
   verify = (req, callback) => {
      // Récupération de l'en-tête d'autorisation et du token
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];

      // Si un token est présent dans l'en-tête d'autorisation, on tente de le vérifier avec la clé secrète de l'API
      if (token) {
         try {
            const user = jwt.verify(token, process.env.API_SECRET);
            callback(null, user);
         } catch (error) {
            callback('Invalid token', null);
         }
      }
   };
}

// Exportation d'une instance de la classe JwtToken
module.exports = new JwtToken();
