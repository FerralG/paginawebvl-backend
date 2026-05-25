const pool = require('../db');

const obtenerPropiedades = async () => {

  const result = await pool.query(`
    SELECT *
    FROM propiedades
    ORDER BY id DESC
  `);

  return result.rows;

};

module.exports = {
  obtenerPropiedades
};