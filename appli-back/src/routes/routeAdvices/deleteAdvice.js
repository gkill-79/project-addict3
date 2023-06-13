



// src/routes/routeAdvices/deleteAdvice.js

const { Advice } = require('../../db/sequelize')

module.exports = (app) => {
  app.delete('/api/routes/advices/:id', (req, res) => {
    const id = req.params.id

    Advice.findByPk(id)
      .then(advice => {
        if (advice === null) {
          const message = `L'avis avec l'id ${id} n'existe pas. Réessayez avec un autre id.`
          return res.status(404).json({ message })
        }

        return Advice.destroy({ where: { id: advice.id } })
          .then(_ => {
            const message = `L'avis avec l'id ${id} a bien été supprimé.`
            return res.json({ message, data: { id } })
          })
      })
      .catch(error => {
        const message = `Le serveur ne répond pas. Réessayez plus tard.`
        res.status(500).json({ message, data: error })
      })
  })
}




















