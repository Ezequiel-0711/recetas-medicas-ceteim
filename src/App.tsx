import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rutina from './pages/Rutina';
import Cirugia from './pages/Cirugia';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rutina" element={<Rutina />} />
        <Route path="/cirugia" element={<Cirugia />} />
      </Routes>
    </Router>
  );
}

export default App;
