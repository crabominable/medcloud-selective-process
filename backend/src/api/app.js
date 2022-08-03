import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import 'express-async-errors';

import patientRoute from '../routes';

import {
  domainError,
  jwtDomainError,
} from '../middlewares';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/patients', patientRoute);

app.use(jwtDomainError);
app.use(domainError);

export default app;
