import PropTypes from 'prop-types';
import './City.styles.scss';
import NavBar from '../NavBar/NavBar';
import populationImg from '../../assets/images/population.png';

const City = (props) => {
  const { city } = props;
  return (
    <>
      <NavBar title={city.name} />
      <div className="city">
        <h1>City</h1>
        <p>{city.name}</p>
        <h2>Population</h2>
        <img src={populationImg} alt="group of people" />
        <p>{city.population}</p>
        <h2>Air Quality</h2>
        <p>{city.aqi}</p>
      </div>
    </>
  );
};

export default City;

City.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    population: PropTypes.number,
    aqi: PropTypes.number,
  }).isRequired,
};
