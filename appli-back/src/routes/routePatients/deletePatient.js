


// src/routes/routePatients/deletePatient.js

const { Patient } = require('../../db/sequelize');
  
module.exports = (app) => {
  app.delete('/api/routes/patients/:id', (req, res) => {
    Patient.findByPk(req.params.id).then(patient => {
      const patientDeleted = patient;
      return Patient.destroy({
        where: { id: patient.id }
      })
      .then(_ => {
        const message = `Le patient avec l'identifiant n°${patientDeleted.id} a bien été supprimé.`;
        res.json({message, data: patientDeleted });
      })
      .catch(error => {
        const message = `La liste des patients n'a pas pu être toper. Réessaie dans un instant avant que ton Dealer ne fout le camps.`;
        res.status(500).json({ message, data: error });
      });
    }); 
  }); 
}; 




















