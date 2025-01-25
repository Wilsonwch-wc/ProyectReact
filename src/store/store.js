import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice.js';
import formcounter from '../store/features/counter/counterSlice.js';

const store = configureStore({
  reducer: {
    form: formReducer,
    forms: formcounter,
  },
});

export default store;
