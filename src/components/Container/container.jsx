import { useSelector } from 'react-redux';
import './Container.styles.scss';

const Container = () => {
  const countries = useSelector((state) => state.countries);

  const printCountries = () => {
    console.log(Object.keys(countries));
  };

  return (
    <div>
      <h1>Im the container</h1>
      <button type="button" onClick={printCountries}>
        Print
      </button>
    </div>
  );
};

export default Container;
