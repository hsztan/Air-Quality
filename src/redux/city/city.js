import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const city = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
    },
  },
});

export const { setCity } = city.actions;
export default city.reducer;
