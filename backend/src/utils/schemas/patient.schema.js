import Joi from 'joi';

const patientSchema = Joi.object({
  name: Joi.string().min(3).required(),
  birthDate: Joi.date().format('DD-MM-YYYY').utc().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  address: Joi.object({
    streetName: Joi.string().required(),
    number: Joi.number().required(),
    city: Joi.string().required(),
  }).required(),
});

export default patientSchema;
