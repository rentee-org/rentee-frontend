// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './marketing/pages/Landing';
import About from './marketing/pages/About';
import Contact from './marketing/pages/ContactUs';
import { Dashboard } from './app/pages/Dashboard';
import { LoginForm } from './app/pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Marketing Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* App Pages */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
