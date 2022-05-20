import { useSelector } from 'react-redux';
import './City.styles.scss';
import NavBar from '../NavBar/NavBar';
import populationImg from '../../assets/images/population.png';

const City = () => {
  const city = useSelector((state) => state.city.city);
  return (
    <>
      {city ? <NavBar title={city.name} /> : null}
      {city ? (
        <div className="city">
          <h1>City</h1>
          <p>{city.name || 'N/A'}</p>
          <h2>Population</h2>
          <img src={populationImg} alt="group of people" />
          <p>{city.population || 'N/A'}</p>
          <h2>Air Quality</h2>
          <p>{city.aqi || 'N/A'}</p>
        </div>
      ) : null}
    </>
  );
};

export default City;
