import './Container.styles.scss';
import LocationList from '../LocationList/LocationList';

const Container = (props) => {
  const { continent, country } = props;
  return (
    <div>
      <LocationList
        location={country || continent}
        type={country ? 'country' : 'continent'}
      />
      <button type="button">Print</button>
    </div>
  );
};

export default Container;
