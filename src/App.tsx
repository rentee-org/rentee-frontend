import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage2 from './pages/LoginPage2'; // Import the new LoginPage2 component
import Dashboard from './pages/Dashboard'; // Import Dashboard if needed


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login2" element={<LoginPage2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/sign-up" element={<SignUpPage />} /> */}
        {/* Add other routes here */}
        {/* Add / login, /register and /dashboard routes later */}
      </Routes>
    </Router>
  ); 
}

export default App
