/* eslint-disable import/extensions */
import { Router } from 'express';

import patientController from '../controllers/index.mjs';
import { patientSchema } from '../utils/index.mjs';
import { joiValidate } from '../middlewares/index.mjs';

const patientRoute = Router();

patientRoute.post(
  '/',
  joiValidate(patientSchema),
  patientController.create,
);

patientRoute.get('/', patientController.read);

patientRoute.put(
  '/:id',
  joiValidate(patientSchema),
  patientController.update,
);

patientRoute.delete('/:id', patientController.remove);

export default patientRoute;
