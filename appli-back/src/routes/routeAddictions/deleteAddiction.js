



// src/routes/routeAddictions/deleteAddiction.js

const { Addiction } = require('../../db/sequelize');
  
module.exports = (app) => {
  app.delete('/api/routes/addictions/:id', (req, res) => {
    Addiction.findByPk(req.params.id).then(addiction => {
      const addictionDeleted = addiction;
      return Addiction.destroy({
        where: { id: addiction.id }
      })
      .then(_ => {
        const message = `L'addiction avec l'identifiant n°${addictionDeleted.id} a bien été supprimée.`;
        res.json({message, data: addictionDeleted });
      })
      .catch(error => {
        const message = `L'addiction n'a pas pu être supprimée. Réessaie dans un instant.`;
        res.status(500).json({ message, data: error });
      });
    }); 
  }); 
};

























