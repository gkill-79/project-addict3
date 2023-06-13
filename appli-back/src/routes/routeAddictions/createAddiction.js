


// src/routes/routeAddictions/createAddiction.js

const { Addiction } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.post('/api/routes/addictions', (req, res) => {
    Addiction.create(req.body)
      .then(addiction => {
        const message = `L'addiction ${req.body.name} a bien été créée.`
        res.json({ message, data: addiction })
      })
      .catch(error => {
        if(error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        if(error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        const message = `L'addiction n'a pas pu être créée. Réessaie dans un instant.`
        res.status(500).json({ message, data: error })
      })
  })
}
























