import DateExtension from '@joi/date';
import JoiImport from 'joi';
import moment from 'moment';

const Joi = JoiImport.extend(DateExtension);

const patientSchema = Joi.object({
  name: Joi.string().min(3).required(),
  birthDate: Joi.date().default(() => moment().format('DD-MM-YYYY').utc()).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  address: Joi.array().items({
    streetName: Joi.string().required(),
    number: Joi.number().required(),
    city: Joi.string().required(),
  }).required(),
});

export default patientSchema;
