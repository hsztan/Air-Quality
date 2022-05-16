import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countriesReducer from './countries/countries';

export default configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: [thunk],
});
