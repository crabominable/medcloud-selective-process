/* eslint-disable import/extensions */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import 'express-async-errors';

import patientRoute from '../routes/index.mjs';

import {
  domainError,
} from '../middlewares/index.mjs';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/patients', patientRoute);

app.use(domainError);

export default app;
