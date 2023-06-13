
// src/routes/routeCompteur/readCompteur.js

const { Compteur } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/routes/compteur/:id', (req, res) => {
    Compteur.findByPk(req.params.id)
      .then(compteur => {
        if(compteur === null) {
          const message = `Le compteur n'a pas été trouvé. Réessaie avec un autre identifiant.`
          return res.status(404).json({ message })
        }
        const message = `Le compteur a bien été trouvé.`
        res.json({message, data: compteur })
      })
      .catch(error => {
        const message = `La recherche du compteur a causé une erreur. Réessaie dans un instant.`
        res.status(500).json({ message, data: error })
      })
  })
}
