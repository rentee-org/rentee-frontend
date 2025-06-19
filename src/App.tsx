import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from '../src/marketing/pages/Home';
import SignUpPage from './app/pages/SignUpPage';
import LoginPage from '../src/app/pages/LoginPage'; 
import Dashboard from '../src/app/pages/Dashboard';
import CreateListings from './app/pages/Create-Listings'
// import Listings from './app/pages/Listings';
import Bookings from './app/pages/Bookings';
import Categories from '@marketing/components/Categories/Categories';
import Blog from '@/marketing/pages/Blog';
import BlogDetails from '@/marketing/components/layout/Blogdetails';
import NotificationPage from './app/pages/NotificationPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/create-listings' element={<CreateListings />} />
        {/* <Route path='/listings' element={<Listings />} /> */}
        <Route path='/categories' element={<Categories />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogdetails' element={<BlogDetails />} />
        <Route path='/notification' element={<NotificationPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  ); 
}

export default App
