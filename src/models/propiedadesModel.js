const pool = require('../db');

const obtenerPropiedades = async () => {

    const result = await pool.query(`
        SELECT
            id,
            propiedad AS title,
            tipo AS type,
            recamaras AS bedrooms,
            banos AS bathrooms,
            estacionamiento AS parking,
            direccion AS "locationName",
            renta_precio AS price,
            galleryimages AS "galleryImages",
            coordenada_x AS "lat",
            coordenada_y AS "lng"

        FROM propiedades

        ORDER BY id DESC
    `);

    return result.rows;

};

const obtenerPropiedadById = async (id) => {

    const result = await pool.query(`
        SELECT
            id,
            propiedad AS title,
            tipo AS type,
            recamaras AS bedrooms,
            banos AS bathrooms,
            estacionamiento AS parking,
            direccion AS "locationName",
            renta_precio AS price,
            descripcion,
            superficie_construccion_m2 AS area,
            galleryimages AS "galleryImages",
            coordenada_x AS "lat",
            coordenada_y AS "lng"

        FROM propiedades

        WHERE id = $1
    `, [id]);

    return result.rows[0];

};

module.exports = {
    obtenerPropiedades,
    obtenerPropiedadById
};