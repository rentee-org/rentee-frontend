import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import './index.css';
import LoginPage from './app/pages/LoginPage';
import SignUpPage from './app/pages/SignUpPage';
import LoginPage2 from './app/pages/LoginPage2'; // Import the new LoginPage2 component
// import Dashboard from './pages/Dashboard'; // Import Dashboard if needed


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<LoginPage2 />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* Add other routes here */}
        {/* Add / login, /register and /dashboard routes later */}
      </Routes>
    </Router>
  ); 
}

export default App
