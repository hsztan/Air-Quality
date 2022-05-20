import citiesReducer from './cities';

it('should return the initial state', () => {
  expect(citiesReducer(undefined, {})).toBeTruthy();
});
it('should get cities request', () => {
  expect(
    citiesReducer(undefined, {
      type: 'cities/getCities',
    }),
  ).toBeTruthy();
});
