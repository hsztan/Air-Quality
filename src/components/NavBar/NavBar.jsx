import { useNavigate } from 'react-router-dom';
import './NavBar.styles.scss';
const NavBar = (props) => {
  const navigate = useNavigate();

  const { title } = props;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
    }
  };
  return (
    <nav className="nav-bar">
      <button onClick={() => navigate(-1)}>{'<'}</button>
      <h1>{title}</h1>
      <div className="actions">
        <ul>
          <li>
            <input type="text" onKeyDown={handleKeyDown} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
