import { createSlice } from '@reduxjs/toolkit';

import { extraReducers } from '../thunk/patientThunk';

const initialState = {
  patients: [],
  loading: 'idle',
  errorMessage: '',
  editMode: false,
  idToBeEdited: null,
};

export const PatientSlice = createSlice({
  name: 'UserSlice',
  initialState,
  extraReducers,
  reducers: {
    setPatients: (state, action) => {
      state.patients = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setEditMode: (state, action) => {
      state.editMode = action.payload;
    },
    setIdToBeEdited: (state, action) => {
      state.idToBeEdited = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPatients, setLoading, setErrorMessage, setEditMode, setIdToBeEdited,
} = PatientSlice.actions;

export default PatientSlice.reducer;
