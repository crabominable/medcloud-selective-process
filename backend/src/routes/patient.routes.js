const { Router } = require('express');

const { patientController } = require('../controllers');
const { patientSchema } = require('../utils/JoiSchemas');
const { validateJoi } = require('../middlewares');

const patientRoute = Router();

patientRoute.post(
  '/',
  validateJoi(patientSchema),
  patientController.create,
);

patientRoute.get('/', patientController.read);

patientRoute.get('/:id', patientController.readOne);

patientRoute.put(
  '/:id',
  validateJoi(patientSchema),
  patientController.update,
);

patientRoute.delete('/:id', patientController.remove);

module.exports = patientRoute;
