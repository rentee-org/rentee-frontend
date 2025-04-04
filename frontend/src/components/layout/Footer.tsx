const Footer = () => {
  return (
    <footer className="text-center py-6  bg-gray-100 text-white mt-12">
      <div className="container mx-auto text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Rentee. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;