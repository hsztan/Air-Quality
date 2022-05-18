import { Link } from 'react-router-dom';
import Location from '../Location/Location';

const LocationList = (props) => {
  const { location, type, countries, cities } = props;

  if (countries) {
    return (
      <div className="countries-list">
        <ul>
          {countries.map((country) => (
            <li>
              <Link to={country.iso2}>
                <Location
                  key={country.name}
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
        <ul>
          {cities.data.map((city) => (
            <li>
              <Location key={city.id} location={city.city} aqi={city.aqi} />
            </li>
          ))}
        </ul>
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
