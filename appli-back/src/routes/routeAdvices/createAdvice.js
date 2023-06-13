


// src/routes/routeAdvices/createAdvice.js

const { Advice } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.post('/api/routes/advices', (req, res) => {
    Advice.create(req.body)
      .then(advice => {
        const message = `L'avis ${req.body.name} a bien été crée.`
        res.json({ message, data: advice })
      })
      .catch(error => {
        if(error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        if(error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        const message = `L'avis n'a pas pu être crée. Réessaie dans un instant.`
        res.status(500).json({ message, data: error })
      })
  })
}


























