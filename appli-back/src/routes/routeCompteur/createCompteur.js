


// src/routes/routeCompteur/createCompteur.js
const { Compteur } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.post('/api/routes/compteur', (req, res) => {
    Compteur.create(req.body)
      .then(compteur => {
        const message = `Le compteur a bien été crée.`
        res.json({ message, data: compteur })
      })
      .catch(error => {
        const message = `Le compteur n'a pas pu être crée. Réessaie dans un instant.`
        res.status(500).json({ message, data: error })
      })
  })
}



