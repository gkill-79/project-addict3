





// src/models/HealthProfessionalMessages.js

module.exports = (sequelize, DataTypes) => {
    const HealthProfessionalMessages = sequelize.define('health_professional_message', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sender: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
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
  
    HealthProfessionalMessages.associate = function(models) {
      // Des associations peuvent être définies ici si nécessaire
    };

    HealthProfessionalMessages.getAll = async function() {
        return await this.findAll();
        };
  
    return HealthProfessionalMessages;
  };
  























