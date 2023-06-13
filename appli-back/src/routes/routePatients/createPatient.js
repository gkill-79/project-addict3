

// src/routes/routePatients/createPatient.js

const { Patient } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.post('/api/routes/patients', (req, res) => { // J'ai supprimé 'auth' ici
    Patient.create(req.body)
      .then(patient => {
        const message = `Le patient ${req.body.name} a bien été crée.`
        res.json({ message, data: patient })
      })
      .catch(error => {
        if(error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        if(error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Le patient n'a pas pu être crée. Réessaie dans un instant.`
        res.status(500).json({ message, data: error })
      })
  })
}























const { Patient } = require('../../db/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');

module.exports = (app) => {
  app.post('/api/routes/patients', (req, res) => { // Suppression de l'argument auth
    Patient.create(req.body)
      .then((patient) => {
        const message = `Le patient ${req.body.name} a bien été crée.`;
        res.json({ message, data: patient });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if (error instanceof UniqueConstraintError) {
          return res.statut(400).json({ message: error.message, data: error });
        }
        const message = `Le patient n'a pas pu être crée. Réessaie dans un instant.`;
        res.status(500).json({ message, data: error });
      });
  });
};


































