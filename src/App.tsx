import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import './index.css';
import SignUpPage from './app/pages/SignUpPage';
import LoginPage from '../src/app/pages/LoginPage'; 
import Dashboard from '../src/app/pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  ); 
}

export default App
