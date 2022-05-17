import Location from '../Location/Location';

const LocationList = (props) => {
  const { location, type, countries, cities } = props;

  if (countries) {
    return (
      <div className="countries-list">
        {countries.map((country) => (
          <Location
            key={country.name}
            location={country.name}
            aqi={country.aqi}
          />
        ))}
      </div>
    );
  }

  if (cities?.data?.length) {
    return (
      <div className="cities-list">
        {cities.data.map((city) => (
          <Location
            key={city.id}
            location={city.city}
            // aqi={country.aqi}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={type}>
      <Location location={location} type={type} />
    </div>
  );
};

export default LocationList;
