const propiedadesModel = require('../models/propiedades.model');

const getPropiedades = async (req, res) => {

  try {

    const propiedades = await propiedadesModel.obtenerPropiedades();

    res.json(propiedades);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: 'Error obteniendo propiedades'
    });

  }

};

module.exports = {
  getPropiedades
};