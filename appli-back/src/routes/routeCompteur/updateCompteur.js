// src/routes/routeCompteur/updateCompteur.js

const { Compteur } = require('../../db/sequelize')

module.exports = (app) => {
  app.put('/api/routes/compteur/:id', (req, res) => {
    const id = req.params.id
    Compteur.findByPk(id)
    .then(compteur => {
      if(compteur === null) {
        const message = `Le compteur avec l'identifiant n°${req.params.id} n'a pas été trouvé. Réessaie avec un autre identifiant.`
        return res.status(404).json({ message })
      }
      
      Compteur.update(req.body, {
        where: { id: id }
      })
      .then(_ => {
        const message = `Le compteur a bien été modifié.`
        res.json({message, data: compteur })
      })
      .catch(error => {
        const message = `Le compteur n'a pas pu être modifié. Réessaie dans un instant.`
        res.status(500).json({ message, data: error })
      })
    })
    .catch(error => {
      const message = `Le compteur n'a pas pu être trouvé. Réessaie dans un instant.`
      res.status(500).json({ message, data: error })
    })
  })
}
