const Location = (props) => {
  const { location, type, aqi } = props;
  return (
    <div className={`location-${type}`}>
      <h3>{location}</h3>
      <p>{aqi}</p>
    </div>
  );
};

export default Location;
