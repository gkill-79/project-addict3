




// src/routes/routeAddictions/findAddictionByPk.js

const { Addiction } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/routes/addictions/:id', (req, res) => {
    Addiction.findByPk(req.params.id)
      .then(addiction => {
        if(addiction === null) {
            const message = `L'addiction avec l'identifiant n°${req.params.id} n'a pas été trouvée. Réessaie avec un autre identifiant.`;
            return res.status(404).json({ message })
        }
        const message = "L'addiction a été trouvée."
        res.json({ message, data: addiction })
      })
      .catch(error => {
        const message = `L'addiction n'a pas pu être trouvée. Réessaie dans un instant.`
        res.status(500).json({ message, data: error })
      })
  })
}


























