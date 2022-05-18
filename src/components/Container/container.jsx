import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countryCodes, continentsNames } from '../../data/data';
import { getAirQuality } from '../../redux/countries/countries';
import { getCities } from '../../redux/cities/cities';
import './Container.styles.scss';
import LocationList from '../LocationList/LocationList';
import ContinentsPane from '../ContinentsPane/ContinentsPane';

const Container = (props) => {
  const countries = useSelector((state) => state.countries);
  const cities = useSelector((state) => state.cities);
  const { continent, country } = props;
  const continentName = continent ? continentsNames[continent].name : null;
  const countryName = country ? countryCodes[country] : null;

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
          <LocationList
            location={country}
            countryName={countryName}
            countryImageUrl={`https://flagcdn.com/72x54/${country.toLowerCase()}.png`}
            type="detail"
          />
        </div>
        <div className="bottom">
          <div className="bottom-header">
            <h2>Cities</h2>
          </div>
          <LocationList cities={cities} type="list" />
        </div>
      </div>
    );
  } else if (continent) {
    return (
      <div className="container">
        <div className="top">
          <LocationList
            location={continent}
            continentName={continentName}
            type="detail"
          />
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
    return <ContinentsPane />;
  }
};

export default Container;
