import PropTypes from 'prop-types';
import DataSnippet from '../DataSnippet/DataSnippet';

const Location = (props) => {
  const {
    location,
    type,
    aqi,
    imageUrl,
    countryName,
    continentName,
  } = props;

  return (
    <div className={`location-${type}`}>
      {imageUrl ? (
        <picture>
          <img
            src={imageUrl}
            alt={`flag of ${countryName}`}
            className={imageUrl.includes('flagcdn') ? 'flag-details' : ''}
          />
        </picture>
      ) : null}
      <div className="wrap">
        <h3>{countryName || continentName || location}</h3>
        {aqi ? <DataSnippet dataName="Air Quality" data={aqi} /> : null}
      </div>
    </div>
  );
};

export default Location;

Location.propTypes = {
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  aqi: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  continentName: PropTypes.string.isRequired,
};
