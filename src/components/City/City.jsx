import { useSelector } from 'react-redux';
import './City.styles.scss';
import NavBar from '../NavBar/NavBar';
import populationImg from '../../assets/images/population.png';

const City = () => {
  const city = useSelector((state) => state.city.city);
  return (
    <>
      <NavBar title={city.name} />
      <div className="city">
        <h1>City</h1>
        <p>{city.city}</p>
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
