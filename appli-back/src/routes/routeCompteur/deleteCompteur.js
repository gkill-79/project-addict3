

// src/routes/routeCompteur/deleteCompteur.js

const { Compteur } = require('../../db/sequelize')

module.exports = (app) => {
  app.delete('/api/routes/compteur/:id', (req, res) => {
    Compteur.findByPk(req.params.id).then(compteur => {
      if(compteur === null) {
        const message = `Le compteur avec l'identifiant n°${req.params.id} n'a pas été trouvé. Réessaie avec un autre identifiant.`
        return res.status(404).json({ message })
      }
      return Compteur.destroy({
        where: { id: compteur.id }
      })
      .then(_ => {
        const message = `Le compteur avec l'identifiant n°${compteur.id} a bien été supprimé.`
        res.json({ message, data: compteur })
      })
    })
    .catch(error => {
      const message = `La suppression du compteur a causé une erreur. Réessaie dans un instant.`
      res.status(500).json({ message, data: error })
    });
  });
}



