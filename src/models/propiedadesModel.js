const pool = require('../db');

const obtenerPropiedades = async () => {

    const result = await pool.query(`
        SELECT
            id,
            title,
            type,
            bedrooms,
            bathrooms,
            parking,
            imageurl AS "imageUrl",
            locationname AS "locationName",
            operation,

            CASE
                WHEN operation = 'renta' THEN renta_precio
                ELSE venta_precio
            END AS price

        FROM propiedades

        ORDER BY id DESC
    `);

    return result.rows;

};

module.exports = {
    obtenerPropiedades
};