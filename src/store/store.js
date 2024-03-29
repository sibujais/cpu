

import { configureStore } from '@reduxjs/toolkit';
import { inputsReducer } from '../reducer/inputs.reducer'; 

const store = configureStore({
  reducer: {
    inputs: inputsReducer,
  },
  devTools: true,
});

export default store;
