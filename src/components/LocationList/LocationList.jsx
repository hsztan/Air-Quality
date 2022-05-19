import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setCity } from '../../redux/city/city';
import Location from '../Location/Location';
import asiaImg from '../../assets/images/asia.png';
import africaImg from '../../assets/images/africa.png';
import antarticaImg from '../../assets/images/antartica.png';
import europeImg from '../../assets/images/europe.png';
import northAmericaImg from '../../assets/images/north-america.webp';
import southAmericaImg from '../../assets/images/south-america.webp';
import oceaniaImg from '../../assets/images/oceania.png';

const LocationList = (props) => {
  const {
    location,
    type,
    countries,
    cities,
    countryName,
    continentName,
    countryImageUrl,
  } = props;

  let continentImage;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    dispatch(setCity(city));
    navigate('/city/city/city');
  };

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
                  imageUrl={`https://flagcdn.com/72x54/${country.iso2.toLowerCase()}.png`}
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
              <button
                type="button"
                onClick={() => handleCityClick(city)}
                onKeyDown={() => handleCityClick(city)}
              >
                <Location location={city.name} aqi={city.aqi} city />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (continentName) {
    if (continentName === 'Asia') {
      continentImage = asiaImg;
    }
    if (continentName === 'Africa') {
      continentImage = africaImg;
    }
    if (continentName === 'Antartica') {
      continentImage = antarticaImg;
    }
    if (continentName === 'Europe') {
      continentImage = europeImg;
    }
    if (continentName === 'North America') {
      continentImage = northAmericaImg;
    }
    if (continentName === 'South America') {
      continentImage = southAmericaImg;
    }
    if (continentName === 'Oceania') {
      continentImage = oceaniaImg;
    }
  }

  return (
    <div className={type}>
      <Location
        imageUrl={countryImageUrl || continentImage}
        location={countryName || continentName || location}
        type={type}
      />
    </div>
  );
};

export default LocationList;

LocationList.propTypes = {
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      aqi: PropTypes.number.isRequired,
      iso2: PropTypes.string.isRequired,
    }),
  ).isRequired,
  cities: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        aqi: PropTypes.number.isRequired,
      }),
    ),
  }).isRequired,
  countryName: PropTypes.string.isRequired,
  continentName: PropTypes.string.isRequired,
  countryImageUrl: PropTypes.string.isRequired,
};
