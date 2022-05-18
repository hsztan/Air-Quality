import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAirQuality } from '../../redux/countries/countries';
import { getCities } from '../../redux/cities/cities';
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
  //TODO
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
  }, [dispatch, filteredCountries, country, countryCode]);

  useEffect(() => {
    if (countryCode && cities.status !== 'pending') {
      dispatch(getCities(countryCode));
    }
  }, [dispatch, countryCode]);

  if (country) {
    return (
      <div className="container">
        <div className="top">
          <LocationList location={country} type="detail" />
        </div>
        <div className="bottom">
          <LocationList cities={cities} type="list" />
        </div>
      </div>
    );
  } else if (continent) {
    return (
      <div className="container">
        <div className="top">
          <LocationList location={continent} type="detail" />
        </div>
        <div className="bottom">
          <div className="bottom-header">
            <h2>Countries</h2>
          </div>
          <LocationList countries={filteredCountries} type="list" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="continents">
        <Link to="/AF">Africa</Link>
        <Link to="/AS">Asia</Link>
        <Link to="/EU">Europe</Link>
        <Link to="/NA">North America</Link>
        <Link to="/OC">Oceania</Link>
        <Link to="/SA">South America</Link>
        <Link to="#"></Link>
        <Link to="/AN">Antartica</Link>
        <Link to="#"></Link>
      </div>
    );
  }
};

export default Container;
