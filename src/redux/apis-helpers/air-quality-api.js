const addAirQuality = async (locations) => {
  console.log('openWeather', 'fetch Locations', locations);
  const promiseArray = locations.map((location) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${location.latitude}&lon=${location.longitude}&appid=e3b0800eb9436f5c097b68c74afc4975`
    );
  });
  const res = await Promise.all(promiseArray);
  const data = await Promise.all(res.map((response) => response.json()));
  console.log('openWeather', 'data', data);
  const locationsWithAQI = locations.map((location, i) => {
    return { ...location, aqi: data[i].list[0].main.aqi };
  });
  console.log('locationsWithAQI after fetch', locationsWithAQI);
  return locationsWithAQI;
};

export default addAirQuality;
