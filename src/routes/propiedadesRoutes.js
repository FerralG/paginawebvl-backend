const express = require('express');
const router = express.Router();

const propiedadesController = require('../controllers/propiedades.controller');

router.get('/', propiedadesController.getPropiedades);

module.exports = router;