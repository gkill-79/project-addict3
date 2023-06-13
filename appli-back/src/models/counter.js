

// src/models/counter.js

module.exports = (sequelize, DataTypes) => {
  const Counter = sequelize.define('counter', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    patients_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'patients',  // changed from 'patient'
        key: 'id'
      }
    },
    addictions_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'addictions',  // changed from 'addiction'
        key: 'id'
      }
    },
    time_saved: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    money_saved: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    createdAt: 'created',
    updatedAt: 'updated'
  });

  Counter.associate = function(models) {
    Counter.belongsTo(models.Patient, { foreignKey: 'patients_id', targetKey: 'id' });
    Counter.belongsTo(models.Addiction, { foreignKey: 'addictions_id', targetKey: 'id' });
  };

  return Counter;
};




















