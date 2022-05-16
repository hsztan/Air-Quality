import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countries';

export default configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
