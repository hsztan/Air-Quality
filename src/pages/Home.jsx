import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Container from '../components/Container/Container';

const Home = () => {
  const { continent, country } = useParams();

  return (
    <div className="container">
      <NavBar />
      <Container continent={continent} country={country} />
    </div>
  );
};

export default Home;
