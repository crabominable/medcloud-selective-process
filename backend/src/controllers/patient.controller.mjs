/* eslint-disable import/extensions */
/* eslint-disable import/no-import-module-exports */
import patientService from '../services/index.mjs';

const create = async (req, res) => {
  const createdPatient = await patientService.create(req.body);

  res.status(201).json(createdPatient);
};

const read = async (req, res) => {
  const patients = await patientService.read();

  res.status(200).json(patients);
};

const update = async (req, res) => {
  const updatedPatient = await patientService.update(req.params.id, req.body);

  res.status(200).json(updatedPatient);
};

const remove = async (req, res) => {
  const removedPatient = await patientService.remove(req.params.id);

  res.status(200).json(removedPatient);
};

export default {
  create,
  read,
  update,
  remove,
};
