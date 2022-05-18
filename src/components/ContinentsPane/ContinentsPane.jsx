import { Link } from 'react-router-dom';
import asia from '../../assets/images/asia.png';

const ContinentsPane = () => {
  console.log(asia);
  return (
    <div className="continents">
      <Link style={{ backgroundImage: `url(${asia})` }} to="/AF">
        Africa
      </Link>
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
};

export default ContinentsPane;
