import { airQualityIndex } from '../../data/data';
import DataSnippet from '../DataSnippet/DataSnippet';

const Location = (props) => {
  const { location, type, aqi, imageUrl, countryName, continentName } = props;
  return (
    <div className={`location-${type}`}>
      <picture>
        <img src={imageUrl} alt="image" />
      </picture>
      <div className="wrap">
        <h3>{countryName || continentName || location}</h3>
        {aqi ? <DataSnippet dataName="Air Quality" data={aqi} /> : null}
      </div>
    </div>
  );
};

export default Location;
