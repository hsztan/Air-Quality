import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countries';
import citiesReducer from './cities/cities';
import cityReducer from './city/city';

export default configureStore({
  reducer: {
    countries: countriesReducer,
    cities: citiesReducer,
    city: cityReducer,
  },
});
