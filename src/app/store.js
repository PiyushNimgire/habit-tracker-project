import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import habitReducer from '../features/habits/habitSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    habitReducer
  },
});
