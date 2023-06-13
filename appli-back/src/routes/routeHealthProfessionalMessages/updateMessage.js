







// src/routes/routeHealthProfessionalMessages/updateMessage.js

const { HealthProfessionalMessage } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')

module.exports = (app) => {
  app.put('/api/routes/healthProfessionalMessages/:id', (req, res) => {
    const id = req.params.id
    HealthProfessionalMessage.update(req.body, {
      where: { id: id }
        })
        .then(_ => {
        return HealthProfessionalMessage.findByPk(id).then(updatedMessage => {
                if(updatedMessage === null) {
                    const message = `Le message avec l'identifiant n°${id} n'a pas été trouvé. Réessaie avec un autre identifiant.`;
                    return res.status(404).json({ message })
                }
                const message = `Le message a bien été modifié.`
                res.json({message, data: updatedMessage })
            })
            })
            .catch(error => {
                if(error instanceof ValidationError) {
                    return res.status(400).json({ message: error.message, data: error })
                }
                if(error instanceof UniqueConstraintError) {
                    return res.status(400).json({ message: error.message, data: error })
                }
                const message = `Le message n'a pas pu être modifié. Réessayez dans un instant.`
                res.status(500).json({ message, data: error })
            })
        })
    }

























