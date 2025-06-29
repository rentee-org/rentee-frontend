import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from '../src/marketing/pages/Home';
import SignUpPage from './app/pages/SignUpPage';
import LoginPage from '../src/app/pages/LoginPage'; 
import Dashboard from '../src/app/pages/Dashboard';
import CreateListings from './app/pages/Create-Listings'
import ListingsPage from './app/pages/ListingsPage';
import Bookings from './app/pages/Bookings';
import Categories from '@marketing/components/Categories/Categories';
import Blog from '@/marketing/pages/Blog';
import BlogDetails from '@/marketing/components/layout/Blogdetails';
import NotificationPage from './app/pages/NotificationPage';
import AllListings from './marketing/pages/AllListing';
import Order from './app/pages/OrderPage';
import Settings from './app/pages/SettingsLayout'


function App() {
  return (
    <Router>
      <Routes>
        
        {/* Landing-Page Related Routes */}
        <Route path="/" element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogdetails' element={<BlogDetails />} />
        <Route path='/all-listings' element={<AllListings />} />


        {/* Dashboard Related Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-listings' element={<CreateListings />} />
        <Route path='/listings' element={<ListingsPage />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/notification' element={<NotificationPage />} />
        <Route path='/settings' element={<Settings />} />


      </Routes>
    </Router>
  ); 
}

export default App
