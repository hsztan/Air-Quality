import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Container from '../components/Container/Container';
import { continentsNames } from '../data/data';

const Home = () => {
  const { continent, country } = useParams();
  const continentName = continent ? continentsNames[continent].name : null;

  return (
    <div className="container">
      <NavBar title={country || continentName || 'continents'} />
      <Container continent={continent} country={country} />
    </div>
  );
};

export default Home;
