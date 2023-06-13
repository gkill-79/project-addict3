





// src/routes/routeAdvices/deleteAdvice.js

const { Advice } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/routes/advices/:id', (req, res) => {
    Advice.findByPk(req.params.id)
      .then(advice => {
        if(advice === null) {
            const message = `L'avis avec l'identifiant n°${req.params.id} n'a pas été trouvé. Réessaie avec un autre identifiant.`;
            return res.status(404).json({ message })
        }
        const message = "Tu as trouvé l'avis."
        res.json({ message, data: advice })
      })
      .catch(error => {
        const message = `La liste des avis n'a pas pu être trouvé. Réessaie dans un instant.`
        res.status(500).json({ message, data: error })
      })
  })
}  























