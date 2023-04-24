/**
 * Importation des modules
 */
const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const cors = require('cors');
require('dotenv').config();

/**
 * Importation des routes
 */
const article = require('./routes/Article');
const categorie = require('./routes/Categorie');
const login = require('./routes/Login');

/**
 * Création de l'application Express
 */
const app = express();

// Options d'Express
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Configuration du middleware CORS pour permettre les requêtes depuis n'importe quelle origine
const corsOptions = {
   origin: '*',
   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Configuration du middleware pour gérer les fichiers uploadés
app.use(fileUpload({
   createParentPath: true,
   useTempFiles: true,
   tempFileDir: __dirname + '/private/tmp/',
}));

/**
 * Définition des routes
 */
app.use('/article', article);
app.use('/categorie', categorie);
app.use('/login', login);

// Configuration de l'authentification pour les fichiers du répertoire privé (./private)
function authenticateToken(req, res, next) {
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];
   if (token == null) return res.sendStatus(401);
   jwt.verify(token, config.secret, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
   });
}

// Middleware pour gérer les fichiers public
app.use('/public', express.static(path.join(__dirname, '/public')));

// Middleware pour gérer les erreurs 404
app.use(function(req, res, next) {
   res.status(404).send('404');
});

// Middleware pour gérer les erreurs génériques
app.use(function(err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};
   // render the error page
   res.sendStatus(err.status || 500);
});

// Route de test pour vérifier si le serveur est en ligne
app.use('/', (req, res) => {
   res.sendStatus(200);
});

// Lancement du serveur
const port = process.env.API_PORT || 4000;
app.listen(port, () => {
   console.log(`🚀 App running on port 127.0.0.0:${port}`);
});
