import { useState, type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BrowserListing from "../../pages/BrowserListing";
// import category from "../../pages/category";
import Faq from "../../pages/Faq";
import BrowserCategory from "../../pages/BrowserCategory";
import Bento from "../../pages/Bento"
import Listings from "../../pages/Listings";
import Modal from "@components/ui/modal/signupModal/Modal";
import SignUpForm from "@components/auth/SignUpForm";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="">
      <Navbar  setShowSignUp={setShowSignUp}/>
      <Modal open={showSignUp} onClose={() => setShowSignUp(false)}>
        <SignUpForm />
      </Modal>
      <main className="flex-grow w-full">
        {children}
      
    </main>
      <BrowserCategory />
      <Listings />
      <BrowserListing />
      <Bento />
      <Faq />
      <Footer />
    </div>
  );
}

export default Layout;
// This code defines a Layout component that wraps its children with a Navbar and Footer. The Layout component is designed to be used as a wrapper for other components, providing a consistent layout structure across the application. The Navbar and Footer components are imported from their respective files and are included in the layout. The main content area is defined by the `children` prop, which allows for dynamic content to be rendered within the layout. The `flex` and `min-h-screen` classes ensure that the layout takes up the full height of the screen, with the footer always at the bottom.