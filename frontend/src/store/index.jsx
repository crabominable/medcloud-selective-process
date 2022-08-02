import { configureStore } from '@reduxjs/toolkit';
import PatientSliceReducer from '../redux/patientSlice';

const store = configureStore({
  reducer: {
    PatientSlice: PatientSliceReducer,
  },
});

export default store;
