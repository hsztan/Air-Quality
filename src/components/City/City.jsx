const City = (props) => {
  const { city } = props;
  console.log('city component', city);
  return (
    <div className="city">
      <h1>City</h1>
      <p>{city.city.name}</p>
      <h2>Population</h2>
      <p>{city.city.population}</p>
      <h2>Air Quality</h2>
      <p>{city.city.aqi}</p>
    </div>
  );
};

export default City;
