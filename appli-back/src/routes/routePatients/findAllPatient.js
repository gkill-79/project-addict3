



// src/routes/routePatients/findAllPatient.js


const { Patient } = require('../../db/sequelize');
const { Op } = require('sequelize');

module.exports = (app) => {
  app.get('/api/routes/patients', (req, res) => { // Suppression de l'argument auth
    if (req.query.name) {
      const name = req.query.name;
      const limit = req.query.limit || 5;

      if (name.length < 3) {
        const message = `Le nom du patient doit contenir au moins 3 caractères.`;
        return res.status(400).json({ message });
      }

      return Patient.findAndCountAll({
        where: {
          name: {
            [Op.like]: `%${name}%`
          }
        },
        order: ['name'],
        limit: limit
      })
        .then(({ count, rows }) => {
          const message = `La liste des ${count} patients a bien été trouvée.`;
          res.json({ message, data: rows });
        })
        .catch((error) => {
          const message = `La liste des patients n'a pas pu être trouvée. Réessaie dans un instant.`;
          res.status(500).json({ message, data: error });
        });
    } else {
      Patient.findAll()
        .then((patients) => {
          const message = 'La liste des patients a bien été trouvée.';
          res.json({ message, data: products });
        })
        .catch((error) => {
          const message = `Le patients n'a pas pu être trouvée. Réessaie dans un instant.`;
          res.status(500).json({ message, data: error });
        });
    }
  });
};














