// controllers/estadoCivilController.js
const EstadoCivil = require('../models/EstadoCivil');

const getEstadoCivil = async (req, res) => {
  try {
    const estadoCivil = await EstadoCivil.findAll();
    res.json(estadoCivil);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createEstadoCivil = async (req, res) => {
  try {
    const estadoCivil = await EstadoCivil.create(req.body);
    res.status(201).json(estadoCivil);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateEstadoCivil = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await EstadoCivil.update(req.body, {
      where: { idestado_civil: id }
    });
    if (updated) {
      const updatedEstadoCivil = await EstadoCivil.findOne({ where: { idestado_civil: id } });
      res.status(200).json(updatedEstadoCivil);
    } else {
      res.status(404).send('Estado Civil não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteEstadoCivil = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await EstadoCivil.destroy({
      where: { idestado_civil: id }
    });
    if (deleted) {
      res.status(204).send('Estado Civil deletado');
    } else {
      res.status(404).send('Estado Civil não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getEstadoCivil,
  createEstadoCivil,
  updateEstadoCivil,
  deleteEstadoCivil
};