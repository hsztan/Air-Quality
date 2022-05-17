import { useNavigate } from 'react-router-dom';
const NavBar = (props) => {
  const navigate = useNavigate();

  const { title } = props;
  return (
    <nav className="nav-bar">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{title}</h1>
      <div className="actions">
        <ul>
          <li>&</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
