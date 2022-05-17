import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Forward</button>
    </nav>
  );
};

export default NavBar;
