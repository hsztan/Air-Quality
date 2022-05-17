import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import countries from './data';

const initialState = countries;

export const getAirQuality = createAsyncThunk(
  'countries/getQuality',
  async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${33}&lon=${33}&appid=e3b0800eb9436f5c097b68c74afc4975`
    );
    const data = await response.json();
    return data;
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: {
    [getAirQuality.fulfilled]: (state, action) => {
      console.log(action.payload.list);
    },
  },
});

export default countriesSlice.reducer;
