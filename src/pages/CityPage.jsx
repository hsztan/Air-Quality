import { useSelector } from 'react-redux';
import City from '../components/City/City';

const CityPage = () => {
  const city = useSelector((state) => state.city);
  return <City city={city} />;
};

export default CityPage;
