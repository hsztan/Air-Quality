import { Link } from 'react-router-dom';
import asiaImg from '../../assets/images/asia.png';
import africaImg from '../../assets/images/africa.png';
import antarticaImg from '../../assets/images/antartica.png';
import europeImg from '../../assets/images/europe.png';
import northAmericaImg from '../../assets/images/north-america.webp';
import southAmericaImg from '../../assets/images/south-america.webp';
import oceaniaImg from '../../assets/images/oceania.png';

const ContinentsPane = () => {
  return (
    <div className="continents">
      <Link style={{ backgroundImage: `url(${africaImg})` }} to="/AF">
        Africa
      </Link>
      <Link style={{ backgroundImage: `url(${asiaImg})` }} to="/AS">
        Asia
      </Link>
      <Link style={{ backgroundImage: `url(${europeImg})` }} to="/EU">
        Europe
      </Link>
      <Link style={{ backgroundImage: `url(${northAmericaImg})` }} to="/NA">
        North America
      </Link>
      <Link style={{ backgroundImage: `url(${oceaniaImg})` }} to="/OC">
        Oceania
      </Link>
      <Link style={{ backgroundImage: `url(${southAmericaImg})` }} to="/SA">
        South America
      </Link>
      <Link to="#"></Link>
      <Link style={{ backgroundImage: `url(${antarticaImg})` }} to="/AN">
        Antartica
      </Link>
      <Link to="#"></Link>
    </div>
  );
};

export default ContinentsPane;
