import countriesReducer from './countries';

it('should return the initial state', () => {
  expect(countriesReducer(undefined, {})).toBeTruthy();
});
it('should handle FETCH_COUNTRIES_REQUEST', () => {
  expect(
    countriesReducer(undefined, {
      type: 'FETCH_COUNTRIES_REQUEST',
    }),
  ).toBeTruthy();
});
it('should handle airQuality request', () => {
  expect(
    countriesReducer(undefined, {
      type: 'countries/getQuality',
    }),
  ).toBeTruthy();
});
