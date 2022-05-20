import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import countries from '../../data/data';

const initialState = countries;

export const getAirQuality = createAsyncThunk(
  'countries/getQuality',
  async (filteredCountries) => {
    const promiseArray = filteredCountries.map((country) => fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${country.lat}&lon=${country.long}&appid=e3b0800eb9436f5c097b68c74afc4975`,
    ));
    const res = await Promise.all(promiseArray);
    const data = await Promise.all(res.map((response) => response.json()));
    const countriesWithAQI = filteredCountries.map((country, i) => ({
      ...country,
      aqi: data[i].list[0].main.aqi,
    }));
    return countriesWithAQI;
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: {
    [getAirQuality.fulfilled]: (state, action) => {
      const keys = Object.keys(state);
      keys.forEach((key) => {
        if (state[key].length === action.payload.length) {
          // eslint-disable-next-line no-param-reassign
          state[key] = action.payload;
        }
      });
    },
  },
});

export default countriesSlice.reducer;
