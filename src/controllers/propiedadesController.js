const propiedadesModel = require('../models/propiedadesModel');

const getPropiedades = async (req, res) => {

    try {

        const propiedades = await propiedadesModel.obtenerPropiedades();

        res.json(propiedades);

    } catch (error) {

    console.error(error);

    res.status(500).json({
        error: error.message
    });

}

};

const getPropiedadById = async (req, res) => {

    try {

        const { id } = req.params;

        const propiedad = await propiedadesModel.obtenerPropiedadById(id);

        res.json(propiedad);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    getPropiedades,
    getPropiedadById
};