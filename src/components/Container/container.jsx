import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAirQuality } from '../../redux/countries/countries';
import { getCities } from '../../redux/cities/cities';
// import { countryCodes } from '../../redux/countries/data';
import './Container.styles.scss';
import LocationList from '../LocationList/LocationList';

const Container = (props) => {
  const countries = useSelector((state) => state.countries);
  const cities = useSelector((state) => state.cities);
  const { continent, country } = props;

  const dispatch = useDispatch();
  let filteredCountries, countryCode;
  if (continent && !country) {
    filteredCountries = countries[continent];
  }
  if (country) {
    // if (country in countryCodes) {
    //   console.log('in countryCodes condition');
    countryCode = country;
    // }
  }

  useEffect(() => {
    const countriesHaveAQI = filteredCountries?.some((country) => country.aqi);
    if (filteredCountries && !countriesHaveAQI)
      dispatch(getAirQuality(filteredCountries));

    if (countryCode) {
      console.log('countryCode', cities);
      if (cities.status === 'pending') return;
      dispatch(getCities(countryCode));
    }
  }, [dispatch, filteredCountries, country, countryCode, cities.status]);

  if (country) {
    return (
      <div>
        <LocationList location={country} type="detail" />
      </div>
    );
  }
  if (continent) {
    return (
      <div className="container">
        <div>
          <LocationList location={continent} type="detail" />
        </div>
        <div>
          <LocationList countries={filteredCountries} type="list" />
        </div>
      </div>
    );
  }
  return (
    <div className="continents">
      <Link to="/AF">Africa</Link>
      <Link to="/AS">Asia</Link>
      <Link to="/EU">Europe</Link>
      <Link to="/NA">North America</Link>
      <Link to="/OC">Oceania</Link>
      <Link to="/SA">South America</Link>
      <Link to="/AN">Antartica</Link>
    </div>
  );
};

export default Container;
