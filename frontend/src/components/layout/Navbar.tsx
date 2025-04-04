import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install Lucide for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Rentee
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center">
          <Link to="/login" className="block text-gray-600 hover:text-blue-600">Login</Link>
          <Link to="/register" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mx-4">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
// This code defines a Navbar component that serves as the navigation bar for the application. It includes links to the home page, login, and registration pages. The navbar is responsive, displaying a hamburger menu icon on smaller screens that toggles the visibility of the mobile menu. The Navbar uses Tailwind CSS classes for styling and Lucide icons for the menu icons. The `useState` hook is used to manage the open/closed state of the mobile menu.
// The Navbar component is exported for use in other parts of the application.