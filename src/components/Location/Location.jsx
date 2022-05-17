const Location = (props) => {
  const { location, type, aqi, imageUrl } = props;
  return (
    <div className={`location-${type}`}>
      <picture>
        <img src={imageUrl} alt="image" />
      </picture>
      <div className="wrap">
        <h3>{location}</h3>
        <p>{aqi}</p>
      </div>
    </div>
  );
};

export default Location;
