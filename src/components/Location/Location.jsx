const Location = (props) => {
  const { location, type } = props;
  return (
    <div className={`location-${type}`}>
      <h3>{location}</h3>
    </div>
  );
};

export default Location;
