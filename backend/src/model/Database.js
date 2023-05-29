/**
 * DBConnexion.js
 * Ce fichier gère la connexion à la base de données MySQL contenant les fichiers, dossiers et mots-clés.
 * Si la base de données n'existe pas, elle est automatiquement créée.
 */

// Importation du module MySQL
const mysql = require('mysql2');
require('dotenv').config();

// Création de la connexion à la base de données
const db = mysql.createConnection({
   'host': process.env.MYSQL_HOST,
   'user': process.env.MYSQL_USER,
   'password': process.env.MYSQL_PASSWORD,
   'database': process.env.MYSQL_DATABASE,
   'port': process.env.MYSQL_PORT,
});

// Exportation de la connexion à la base de données
module.exports = db;
