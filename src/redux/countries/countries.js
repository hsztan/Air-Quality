import { createSlice } from '@reduxjs/toolkit';
import countries from './countryData';

const initialState = countries;

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getCountry: (state, action) => {
      const { country } = action.payload;
      return state.filter((item) => item.name === country);
    },
  },
});

export const { getCountry } = countrySlice.actions;
export default countrySlice.reducer;
