const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// Définir des routes pour votre API
app.get('/api/projects', (req, res) => {
  // Logique pour récupérer les projets depuis la base de données
  const projects = [
    { id: 1, name: 'Projet 1', description: 'Description du projet 1' },
    { id: 2, name: 'Projet 2', description: 'Description du projet 2' }
  ];
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
