




// src/routes/routeAddictions/findAllAddictions.js

const { Addiction } = require('../../db/sequelize');
const { Op } = require('sequelize');

module.exports = (app) => {
  app.get('/api/routes/addictions', (req, res) => {
    if (req.query.name) {
      const name = req.query.name;
      const limit = req.query.limit || 5;

      if (name.length < 3) {
        const message = `Le nom de l'addiction doit contenir au moins 3 caractères.`;
        return res.status(400).json({ message });
      }

      return Addiction.findAndCountAll({
        where: {
          name: {
            [Op.like]: `%${name}%`
          }
        },
        order: ['name'],
        limit: limit
      })
        .then(({ count, rows }) => {
          const message = `La liste des ${count} addictions a bien été trouvée.`;
          res.json({ message, data: rows });
        })
        .catch((error) => {
          const message = `La liste des addictions n'a pas pu être trouvée. Réessaie dans un instant.`;
          res.status(500).json({ message, data: error });
        });
    } else {
      Addiction.findAll()
        .then((addictions) => {
          const message = 'La liste des addictions a bien été trouvée.';
          res.json({ message, data: addictions });
        })
        .catch((error) => {
          const message = `La liste des addictions n'a pas pu être trouvée. Réessaie dans un instant.`;
          res.status(500).json({ message, data: error });
        });
    }
  });
};





















