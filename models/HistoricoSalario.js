// models/HistoricoSalario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme necessário

const HistoricoSalario = sequelize.define('HistoricoSalario', {
  idhistoricosalario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dtalteracao: {
    type: DataTypes.DATE,
    allowNull: false
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  colaborador_idcolaborador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Colaborador', // Nome da tabela referenciada
      key: 'idcolaborador'
    }
  }
}, {
  tableName: 'historicosalario', // Nome da tabela no banco de dados
  timestamps: false // Define se o Sequelize deve adicionar timestamps automáticos (createdAt, updatedAt)
});

module.exports = HistoricoSalario;
