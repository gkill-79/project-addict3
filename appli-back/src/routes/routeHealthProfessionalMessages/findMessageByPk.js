







// src/routes/routeHealthProfessionalMessages/findMessageByPk.js

const { HealthProfessionalMessage } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/routes/healthProfessionalMessages/:id', (req, res) => {
    const id = req.params.id
    HealthProfessionalMessage.findByPk(id)
      .then(message => {
        if(message === null) {
          const errorMessage = `Le message avec l'id ${id} n'existe pas. Réessayez avec un autre id.`
          return res.status(404).json({ message: errorMessage })
        }
        res.json({ message: "Message trouvé.", data: message })
      })
      .catch(error => {
        const errorMessage = `Le serveur ne répond pas. Réessayez plus tard.`
        res.status(500).json({ message: errorMessage, data: error })
      })
  })
}























