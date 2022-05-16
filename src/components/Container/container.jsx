import { useSelector } from 'react-redux';
import './Container.styles.scss';
import Details from '../Details/Details';
import Header from '../Header/Header';

const Container = () => {
  const countries = useSelector((state) => state.countries);

  const printCountries = () => {
    console.log(Object.keys(countries));
  };

  return (
    <div>
      <Header />
      <Details />
      <button type="button" onClick={printCountries}>
        Print
      </button>
    </div>
  );
};

export default Container;
