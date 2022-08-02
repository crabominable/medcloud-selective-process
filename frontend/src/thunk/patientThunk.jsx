import { createAsyncThunk } from '@reduxjs/toolkit';

import PatientRequests from '../utils/requests/PatientRequests';

export const createPatient = createAsyncThunk(
  'PatientSlice/createPatient',
  (payload) => PatientRequests.createPatient(payload),
);

export const getAllPatients = createAsyncThunk(
  'PatientSlice/getAllPatients',
  () => PatientRequests.getAllPatients(),
);

export const updatePatient = createAsyncThunk(
  'PatientSlice/updatePatient',
  (payload) => PatientRequests.updatePatient(payload),
);

export const deletePatient = createAsyncThunk(
  'PatientSlice/deletePatient',
  (payload) => PatientRequests.deleteUser(payload),
);

export const extraReducers = (builder) => {
  builder.addCase(createPatient
    .fulfilled, (state, action) => {
    const statusCode = 201;
    if (action.payload.statusCode === statusCode) {
      state.loading = 'succeeded';
    }
  })
    .addCase(createPatient
      .rejected, (state) => {
      state.loading = 'failed';
    });

  builder.addCase(getAllPatients
    .fulfilled, (state, action) => {
    const statusCode = 200;
    if (action.payload.statusCode === statusCode) {
      state.loading = 'succeeded';
      state.patients = action.payload.body;
    }
  })
    .addCase(getAllPatients
      .rejected, (state) => {
      state.loading = 'failed';
    });

  builder.addCase(updatePatient
    .fulfilled, (state, action) => {
    console.log(state, action);
    /* const statusCode = 201;
        if (action.payload.statusCode === statusCode) {
          state.loading = 'succeeded';
        } */
  })
    .addCase(updatePatient
      .rejected, (state, action) => {
      console.log(state, action);
      // state.loading = 'failed';
    });

  builder.addCase(deletePatient
    .fulfilled, (state, action) => {
    console.log(state, action);
    /* const statusCode = 201;
          if (action.payload.statusCode === statusCode) {
            state.loading = 'succeeded';
          } */
  })
    .addCase(deletePatient
      .rejected, (state, action) => {
      console.log(state, action);
      // state.loading = 'failed';
    });
};
