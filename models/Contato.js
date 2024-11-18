// models/Contato.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const Contato = sequelize.define('Contato', {
  idcontato: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,    
    validate: {
      isEmail: true
    }
  },
  temWhatsapp: {
    type: DataTypes.TINYINT,
    allowNull: false
  }
}, {
  tableName: 'contato', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = Contato;