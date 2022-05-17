import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCities = createAsyncThunk(
  'cities/getCities',
  async (countryCode) => {
    const res = fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/?countryIds=CL&limit=10`,
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
    return data.results;
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
    },
  },
});

export default citiesSlice.reducer;
