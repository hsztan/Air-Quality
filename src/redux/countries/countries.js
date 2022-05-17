import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import countries from './data';

const initialState = countries;

export const getAirQuality = createAsyncThunk(
  'countries/getQuality',
  async (filteredCountries) => {
    const promiseArray = filteredCountries.map((country) => {
      return fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${country.lat}&lon=${country.long}&appid=e3b0800eb9436f5c097b68c74afc4975`
      );
    });
    const res = await Promise.all(promiseArray);
    const data = await Promise.all(res.map((response) => response.json()));
    return data;
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: {
    [getAirQuality.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default countriesSlice.reducer;
