import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from '../src/marketing/pages/Home';
import SignUpPage from './app/pages/SignUpPage';
import LoginPage from '../src/app/pages/LoginPage'; 
import Dashboard from '../src/app/pages/Dashboard';
import Listings from '../src/app/pages/Listings'
import Categories from './marketing/components/Categories/Categories';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </Router>
  ); 
}

export default App
