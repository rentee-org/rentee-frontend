import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { BiSearch } from "react-icons/bi";
import Logo from "@assets/Rentee Final Logo 1.png"
import type { Dispatch, SetStateAction } from "react";
// install Lucide for icons


interface NavbarProps {
  setShowSignUp: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowSignUp }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-lg md:text-2xl  flex items-center gap-2">
        <img src={Logo} alt=""   />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 relative">
          <div className="flex items-center  ">
          <div className="absolute pl-2"> <BiSearch className="flex items-center text-gray-500" /></div>
          <input type="text " placeholder="contact us" className="px-7 py-2   w-35" />
          </div>
          <Link to="/login" className="  flex items-center rounded border-2 text-[#5400e6]  px-6 py-1.5">Login</Link>
          <button
              className="bg-[#5400e6] text-white px-4 py-2 rounded"
              onClick={() => setShowSignUp(true)}>
              Start Listing
          </button>
          {/* <Link to="/sign-up" className="bg-[#5400e6] text-white px-4 py-2 rounded ">Start Listing</Link> */}
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
          <button
            className="block bg-[#5400e6] text-white px-4 py-2 rounded hover:bg-[#5000c9] mx-4 w-full"
            onClick={() => setShowSignUp(true)}
          >
            Start Listing
          </button>
        </div>
      )}
    </nav>
  );
}; 

export default Navbar;
// This code defines a Navbar component that serves as the navigation bar for the application. 
// It includes links to the home page, login, and registration pages. 
// The navbar is responsive, displaying a hamburger menu icon on smaller screens that toggles the visibility of the mobile menu. 
// The Navbar uses Tailwind CSS classes for styling and Lucide icons for the menu icons. 
// The `useState` hook is used to manage the open/closed state of the mobile menu.
// The Navbar component is exported for use in other parts of the application.