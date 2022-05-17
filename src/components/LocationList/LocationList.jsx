import Location from '../Location/Location';

const LocationList = (props) => {
  const { location, type } = props;
  return (
    <div className="header">
      <Location location={location} type={type} />
    </div>
  );
};

export default LocationList;
