import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import './assets/Fonts/avenir_ff/Fonts.css';

function App() {
 return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add other routes here */}
      {/* Add / login, /register and /dashboard routes later */}
    </Routes>
  </Router>
 ); 
}

export default App
