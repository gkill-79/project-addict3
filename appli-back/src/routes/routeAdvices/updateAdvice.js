




// src/routes/routeAdvices/updateAdvice.js

const { Advice } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')

module.exports = (app) => {
  app.put('/api/routes/advices/:id', (req, res) => {
    const id = req.params.id
    Advice.update(req.body, {
      where: { id: id }
        })
        .then(_ => {
        return Advice.findByPk(id).then(advice => {
                if(advice === null) {
                    const message = `L'avis avec l'identifiant n°${id} n'a pas été trouvé. Réessaie avec un autre identifiant.`;
                    return res.status(404).json({ message })
                }
                const message = `L'avis ${advice.name} a bien été modifié.`
                res.json({message, data: advice })
            })
            })
            .catch(error => {
                if(error instanceof ValidationError) {
                    return res.status(400).json({ message: error.message, data: error })
                }
                if(error instanceof UniqueConstraintError) {
                    return res.status(400).json({ message: error.message, data: error })
                }
                const message = `L'avis n'a pas pu être modifié. Réessaie dans un instant.`
                res.status(500).json({ message, data: error })
            })
        })
    }




















