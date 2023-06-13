

// src/models/adviceModel.js

module.exports = (sequelize, DataTypes) => {
  const Advices = sequelize.define('Advices', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expire_at: {
      type: DataTypes.DATE,
      allowNull: false
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
    updatedAt: 'updated_at',
    tableName: 'Advices',
    freezeTableName: true 
  });

  Advices.associate = function(models) {
    Advices.belongsTo(models.Patient, { foreignKey: 'user_id', targetKey: 'id' });
  };

  Advices.getAll = async function() {
    return await this.findAll();
  };

  return Advices;
};






















