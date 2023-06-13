



// src/models/patients.js

module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('patients', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Le nom doit être renseigné.' },
        notEmpty: { msg: 'Le nom doit être renseigné.' },
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Le nom doit être renseigné.' },
        notEmpty: { msg: 'Le nom doit être renseigné.' },
      }
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Le mot de passe doit être renseigné.' },
          len: {
            args: [6, 50],
            msg: 'Le mot de passe doit contenir entre 6 et 50 caractères.',
          },
        },
    },
      
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { msg: 'L\'email doit être une adresse e-mail valide.' },
          notNull: { msg: 'L\'email doit être renseigné.' },
        }
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, 
  {  
    createdAt: 'created',
    updatedAt: false
  });


  Patients.associate = function(models) {
    Patients.hasMany(models.Addiction, { foreignKey: 'patient_id', sourceKey: 'id' });
  };
  
  
  
  return Patients;
}

























