const propiedadesModel = require('../models/propiedadesModel');

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