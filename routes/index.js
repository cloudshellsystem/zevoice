const express = require('express');
const router = express.Router();
const path = require('path');

// Route pour la page d'accueil
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); // Ajustez le chemin
});

// Route pour la page de contact
router.get('/contact', (req, res) => {
    res.send('Page de contact'); // Remplacez par le contenu réel de la page de contact
});

// Ajoutez d'autres routes ici si nécessaire
module.exports = router;
