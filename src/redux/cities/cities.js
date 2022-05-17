import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCities = createAsyncThunk(
  'cities/getCities',
  async (countryCode) => {
    console.log('citiesAPI', 'fetch CITIES');
    console.log(countryCode);
    const res = await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/?countryIds=${countryCode}&limit=10`,
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
    return data;
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
      console.log(action);
      state.data = action.payload.data;
    },
    [getCities.pending]: (state, action) => {
      state.status = 'pending';
    },
  },
});

export default citiesSlice.reducer;
