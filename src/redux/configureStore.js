import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countries';
import citiesReducer from './cities/cities';

export default configureStore({
  reducer: {
    countries: countriesReducer,
    cities: citiesReducer,
  },
});
