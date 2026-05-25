const express = require('express');
const router = express.Router();

const propiedadesController = require('../controllers/propiedadesController');

router.get('/', propiedadesController.getPropiedades);

router.get('/:id', propiedadesController.getPropiedadById);

module.exports = router;