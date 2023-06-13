

// app.js

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('./src/db/sequelize');
const adviceModel = require('./src/models/adviceModel');
const healthProfessionalMessagesModel = require('./src/models/healthProfessionalMessagesModel');

const app = express();
const port = process.env.PORT || 3300;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


Sequelize.initDb();

// Routes de l'API
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API de l\'application de lutte contre les addictions !');
});


app.post('/api/routes/compteur', (req, res) => {
  console.log("create-counter: req",req.body)
  res.send("compteur creer");
});

app.post('/api/routes/advices', (req, res) => {
  console.log("create-advices: req",req.body)
  res.send("advices creer");
});

app.delete('/api/routes/advices', (req, res) => {
  console.log("delete-advices: req",req.body)
  res.send("advices delete");
});


app.post('/api/routes/addictions', (req, res) => {
  console.log("post-addictions: req",req.body)
  res.send("addictions creer");
});

















app.get('/api/routes/adviceModel', async (req, res) => {
  try {
    const advice = await adviceModel.getAll();
    res.json({ data: advice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des conseils.' });
  }
});

app.get('/api/routes/healthProfessionalMessagesModel', async (req, res) => {
  try {
    const messages = await healthProfessionalMessagesModel.getAll();
    res.json({ data: messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des messages des professionnels de santé.' });
  }
});


// Routes pour HealthProfessionalMessages
require('./src/routes/routeHealthProfessionalMessages/createMessage')(app);
require('./src/routes/routeHealthProfessionalMessages/updateMessage')(app);
require('./src/routes/routeHealthProfessionalMessages/deleteMessage')(app);
require('./src/routes/routeHealthProfessionalMessages/findMessageByPk')(app);
require('./src/routes/routeHealthProfessionalMessages/findAllMessages')(app);

// Routes pour Users
require('./src/routes/routePatients/findAllPatient')(app);
require('./src/routes/routePatients/findPatientByPk')(app);
require('./src/routes/routePatients/updatePatient')(app);
require('./src/routes/routePatients/deletePatient')(app);

// Routes pour Compteur
require('./src/routes/routeCompteur/createCompteur')(app);
require('./src/routes/routeCompteur/updateCompteur')(app);
require('./src/routes/routeCompteur/deleteCompteur')(app);

// Routes pour Advices
require('./src/routes/routeAdvices/createAdvice')(app);
require('./src/routes/routeAdvices/updateAdvice')(app);
require('./src/routes/routeAdvices/deleteAdvice')(app);
require('./src/routes/routeAdvices/findAdviceByPk')(app);
require('./src/routes/routeAdvices/findAllAdvices')(app); 

// Routes pour Addictions
require('./src/routes/routeAddictions/createAddiction')(app);
require('./src/routes/routeAddictions/updateAddiction')(app);
require('./src/routes/routeAddictions/deleteAddiction')(app);
require('./src/routes/routeAddictions/findAddictionByPk')(app);
require('./src/routes/routeAddictions/findAllAddictions')(app); 

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});

require('module').Module._cache = {};


































