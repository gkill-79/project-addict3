

// src/models/addictions.js

module.exports = (sequelize, DataTypes) => {
  const addictions = sequelize.define('addictions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'patients',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Le nom doit être renseigné.' },
        notEmpty: { msg: 'Le nom doit être renseigné.' },
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: 'La date de début doit être renseignée.' },
      }
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  addictions.associate = function(models) {
      addictions.belongsTo(models.Patient, { foreignKey: 'patient_id', targetKey: 'id' });
  };

  return addictions;
};


















