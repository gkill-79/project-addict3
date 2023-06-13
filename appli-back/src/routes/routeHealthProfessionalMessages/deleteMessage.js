








// src/routes/routeHealthProfessionalMessages/deleteMessage.js

const { HealthProfessionalMessage } = require('../../db/sequelize')

module.exports = (app) => {
  app.delete('/api/routes/healthProfessionalMessages/:id', (req, res) => {
    const id = req.params.id

    HealthProfessionalMessage.findByPk(id)
      .then(message => {
        if (message === null) {
          const message = `Le message avec l'id ${id} n'existe pas. Réessayez avec un autre id.`
          return res.status(404).json({ message })
        }

        return HealthProfessionalMessage.destroy({ where: { id: message.id } })
          .then(_ => {
            const message = `Le message avec l'id ${id} a bien été supprimé.`
            return res.json({ message, data: { id } })
          })
      })
      .catch(error => {
        const message = `Le serveur ne répond pas. Réessayez plus tard.`
        res.status(500).json({ message, data: error })
      })
  })
}




















