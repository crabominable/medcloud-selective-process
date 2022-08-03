import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import Button from '@mui/material/Button';

import patientSchema from './schema';
import { createPatient, getAllPatients, updatePatient } from '../../../thunk/patientThunk';
import { setEditMode } from '../../../redux/patientSlice';

function Form() {
  const [able, setAble] = useState(true);
  const [err, setError] = useState(false);

  const dispatch = useDispatch();

  const { editMode, idToBeEdited } = useSelector((state) => state.PatientSlice);

  const formik = useFormik({
    initialValues: {
      name: '',
      birthDate: '',
      email: '',
      address: {
        streetName: '',
        number: 0,
        city: '',
      },
    },

    validate: (values) => {
      console.log(values);
      setError(false);
      const { error } = patientSchema.validate(values);
      if (error) {
        return setAble(true);
      }
      return setAble(false);
    },

    // eslint-disable-next-line consistent-return
    onSubmit: async (values) => {
      if (editMode === true) {
        dispatch(updatePatient({ id: idToBeEdited, data: values }));
        dispatch(setEditMode(false));
        dispatch(getAllPatients());
      }
      dispatch(createPatient({ ...values }));
      dispatch(getAllPatients());
    },
  });

  return (
    <form className="patient-form-container" onSubmit={formik.handleSubmit}>
      <div className="patient-form-inputs-container">
        <input
          className="patient-form-input-content"
          type="text"
          placeholder="Nome"
          id="name"
          {...formik.getFieldProps('name')}
        />
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          placeholder="Data de nascimento"
          {...formik.getFieldProps('birthDate')}
        />
        <input
          className="patient-form-input-content"
          placeholder="Email"
          type="email"
          id="email"
          {...formik.getFieldProps('email')}
        />
        <input
          placeholder="Rua e/ou avenida"
          type="text"
          id="streetName"
          {...formik.getFieldProps('address.streetName')}
        />
        <input
          placeholder="Cidade"
          type="number"
          id="number"
          {...formik.getFieldProps('address.number')}
        />
        <input
          placeholder="Cidade"
          type="text"
          id="city"
          {...formik.getFieldProps('address.city')}
        />
      </div>
      <Button
        variant="contained"
        className="patientform-submit-button"
        type="submit"
        disabled={able}
      >
        { !editMode ? 'Registrar' : 'Atualizar' }
      </Button>
      {
        err && <span>Email ou senha inválidos</span>
      }
    </form>
  );
}

export default Form;
