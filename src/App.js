import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import CityPage from './pages/CityPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:continent" element={<Home />} />
        <Route path="/:continent/:country" element={<Home />} />
        <Route path="/:continent/:contry/:city" element={<CityPage />} />
      </Routes>
    </div>
  );
}

export default App;
