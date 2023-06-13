






// src/routes/routeHealthProfessionalMessages/findAllMessages.js

const { HealthProfessionalMessage } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')

module.exports = (app) => {
  app.get('/api/routes/healthProfessionalMessages', (req, res) => {
    HealthProfessionalMessage.findAll()
      .then(messages => {
        if (messages.length === 0) {
          const message = `La liste des messages est vide.`
          return res.status(404).json({ message })
        }
        res.json({ message: "Liste des messages récupérée.", data: messages })
      })
      .catch(error => {
        const message = `Le serveur ne répond pas. Réessayez plus tard.`
        res.status(500).json({ message, data: error })
      })
  })
}
























