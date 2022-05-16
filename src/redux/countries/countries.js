import { createSlice } from '@reduxjs/toolkit';
import countries from './countryData';

const initialState = countries;

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getCountry: (state, action) => {
      const { country } = action.payload;
      return state.filter((item) => item.name === country);
    },
  },
});

export const { getCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
