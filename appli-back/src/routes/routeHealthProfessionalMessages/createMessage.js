



// src/routes/routeHealthProfessionalMessages/createMessage.js

const { HealthProfessionalMessage } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.post('/api/routes/healthProfessionalMessages', (req, res) => {
    HealthProfessionalMessage.create(req.body)
      .then(createdMessage => {
        const message = `Le message a bien été crée.`
        res.json({ message, data: createdMessage })
      })
      .catch(error => {
        if(error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        if(error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Le message n'a pas pu être crée. Réessayez dans un instant.`
        res.status(500).json({ message, data: error })
      })
  })
}



























