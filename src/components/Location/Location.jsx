const Location = (props) => {
  const { location, type, aqi, imageUrl, countryName, continentName } = props;
  console.log(location, continentName, countryName);
  return (
    <div className={`location-${type}`}>
      <picture>
        <img src={imageUrl} alt="image" />
      </picture>
      <div className="wrap">
        <h3>{countryName || continentName || location}</h3>
        <p>{aqi}</p>
      </div>
    </div>
  );
};

export default Location;
