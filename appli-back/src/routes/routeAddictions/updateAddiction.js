



// src/routes/routeAddictions/updateAddiction.js

const { Addiction } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')

module.exports = (app) => {
  app.put('/api/routes/addictions/:id', (req, res) => {
    const id = req.params.id
    Addiction.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Addiction.findByPk(id).then(addiction => {
        if(addiction === null) {
          const message = `L'addiction avec l'identifiant n°${req.params.id} n'a pas été trouvée. Réessaie avec un autre identifiant.`;
          return res.status(404).json({ message })
        }
        const message = `L'addiction ${addiction.name} a bien été modifiée.`
        res.json({message, data: addiction })
      })
    })
    .catch(error => {
      if(error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error })
      }
      if(error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: error.message, data: error })
      }
      const message = `L'addiction n'a pas pu être modifiée. Réessaie dans un instant.`
      res.status(500).json({ message, data: error })
    })
  })
}





























