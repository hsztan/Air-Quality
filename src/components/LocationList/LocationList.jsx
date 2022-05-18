import { Link } from 'react-router-dom';
import Location from '../Location/Location';

const LocationList = (props) => {
  const { location, type, countries, cities, countryName, continentName } =
    props;

  if (countries) {
    return (
      <div className="countries-list">
        <ul className="locations">
          {countries.map((country) => (
            <li key={country.name}>
              <Link to={country.iso2}>
                <Location
                  countryName={countryName}
                  location={country.name}
                  aqi={country.aqi}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (cities?.data?.length) {
    return (
      <div className="cities-list">
        <ul className="locations">
          {cities.data.map((city) => (
            <li key={city.id}>
              <Location location={city.city} aqi={city.aqi} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={type}>
      <Location
        location={countryName || continentName || location}
        type={type}
      />
    </div>
  );
};

export default LocationList;
