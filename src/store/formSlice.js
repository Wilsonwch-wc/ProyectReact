
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    username: 'wilson',
    email: 'wilson@gmail.com',
    password: 'mod7-wilsonwc',
    module: 'modulo 7 ',
  },
  isLoggedIn: false, 
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    validateAndSaveFormData: (state) => {
      state.isLoggedIn = true;  
    },
    logout: (state) => {
      state.formData = initialState.formData; 
      state.isLoggedIn = false;  
    },
  },
});

export const { updateFormData, validateAndSaveFormData, logout } = formSlice.actions;
export default formSlice.reducer;
