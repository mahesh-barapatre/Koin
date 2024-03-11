// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
// For now, let's create a simple counter reducer
import counterReducer from './Slices/counterSlice';

export const store = configureStore({
  reducer: {
    // Add your reducers here
    counter: counterReducer,
  },
});
