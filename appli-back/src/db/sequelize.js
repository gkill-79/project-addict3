


// src/db/sequelize.js

const { Sequelize, DataTypes } = require('sequelize');
const PatientModel = require('../models/patients');
const AddictionsModel = require('../models/addictions');
const UserModel = require('../models/users');
const CounterModel = require('../models/counter');
const AdviceModel = require('../models/adviceModel');
const users = require('./mock-users');

const sequelize = new Sequelize('the_rabbit_hold2', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false,
});

const Patient = PatientModel(sequelize, DataTypes);
const Addiction = AddictionsModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);
const Counter = CounterModel(sequelize, DataTypes);
const Advice = AdviceModel(sequelize, DataTypes);

const models = {
  Patient,
  Addiction,
  User,
  Counter,
  Advice
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

// Patients.associate = function(models) {
//   Patients.hasMany(models.Addiction, { foreignKey: 'patient_id', sourceKey: 'id' });
// };

const initDb = () => {
  return sequelize.sync({ force: true }).then(() => {
    console.log("La table 'addictions' a bien été créée dans la base de données.");
    users.forEach((user) => {
      User.create({
        username: user.username,
        password: user.password,
        email: user.email,
        created: new Date(),
      }).then((createdUser) => console.log(createdUser.toJSON()));
    });
    console.log('La base de donnée a bien été initialisée !!!');
  });
};

module.exports = {
  initDb,
  ...models,
  sequelize  // Exporting sequelize might be useful in certain situations
};





























