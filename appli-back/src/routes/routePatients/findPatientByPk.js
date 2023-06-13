

// src/routes/routePatients/findPatientByPk.js

const { Patient } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/routes/patients/:id', (req, res) => {
    Patient.findByPk(req.params.id)
      .then(patient => {
        if(patient === null) {
            const message = `Le patient avec l'identifiant n°${req.params.id} n'a pas été trouvé. Réessaie avec un autre identifiant.`;
            return res.status(404).json({ message })
        }
        const message = "Tu as trouvé le patient."
        res.json({ message, data: patient })
      })
      .catch(error => {
        const message = `La liste des patients n'a pas pu être trouvé. Réessaie dans un instant.`
        res.status(500).json({ message, data: error })
      })
  })
}
























