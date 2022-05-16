import { createSlice } from '@reduxjs/toolkit';
import countries from './data';

const initialState = countries;

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export const { getCountries, changeCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
