import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getAirQualityAPI from '../apis-helpers/air-quality-api';

export const getCities = createAsyncThunk(
  'cities/getCities',
  async (countryCode) => {
    const res = await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/?countryIds=${countryCode}&limit=10&minPopulation=400000`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
          'x-rapidapi-key':
            '5dc92c88b3mshc2c23ed3840fc2cp1390b4jsn6abe52050de3',
        },
      }
    );
    const data = await res.json();
    const citiesWithAQI = await getAirQualityAPI(data.data);
    return citiesWithAQI;
  }
);

export const getCitiesAQI = createAsyncThunk(
  'cities/getCitiesAQI',
  async (cities) => {
    const citiesWithAQI = await getAirQualityAPI(cities.data);
    return citiesWithAQI;
  }
);

const initialState = {
  data: [],
  status: '',
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: {
    [getCities.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'fullfilled';
    },
    [getCities.pending]: (state, action) => {
      state.status = 'pending';
    },
    [getCitiesAQI.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'fullfilled';
    },
    [getCitiesAQI.pending]: (state, action) => {
      state.status = 'pending';
    },
  },
});

export default citiesSlice.reducer;
