// controllers/municipioController.js
const Municipio = require('../models/Municipio');

const getMunicipio = async (req, res) => {
  try {
    const municipio = await Municipio.findAll();
    res.json(municipio);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createMunicipio = async (req, res) => {
  try {
    const municipio = await Municipio.create(req.body);
    res.status(201).json(municipio);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateMunicipio = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Municipio.update(req.body, {
      where: { idmunicipio: id }
    });
    if (updated) {
      const updatedMunicipio = await Municipio.findOne({ where: { idmunicipio: id } });
      res.status(200).json(updatedMunicipio);
    } else {
      res.status(404).send('Municipio não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteMunicipio = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Municipio.destroy({
      where: { idmunicipio: id }
    });
    if (deleted) {
      res.status(204).send('Municipio deletado');
    } else {
      res.status(404).send('Municipio não encontrado');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getMunicipio,
  createMunicipio,
  updateMunicipio,
  deleteMunicipio
};
