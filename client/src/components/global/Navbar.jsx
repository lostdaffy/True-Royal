import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 backdrop-blur-sm">
        <div className="flex justify-between items-center h-16 relative">
          {/* Left: Logo */}
          <div className="flex-1">
            <div className="text-2xl font-bold">
              <img
                src="/images/brand-logo.png"
                className="w-32 md:w-40 h-auto"
                alt="Brand Logo"
              />
            </div>
          </div>

          {/* Center: Menu (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-200 hover:text-[#baa263] transition text-sm font-semibold"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Contact Button + Hamburger */}
          <div className="flex-1 flex justify-end items-center">
            {/* Contact button - hidden on small screens */}
            <Link
              to="/contact"
              className="hidden md:inline-block bg-[#baa263] text-white text-sm font-semibold tracking-wide px-6 py-2 rounded-3xl border-2 border-[#baa263] hover:bg-transparent hover:text-[#baa263] hover:border-2 hover:border-[#baa263] transition"
            >
              <i className="ri-phone-fill"></i> Contact Us
            </Link>

            {/* Hamburger - shown on small screens */}
            <button className="md:hidden ml-4" onClick={toggleMenu}>
              <i
                className={`ri-${
                  isOpen ? "close" : "menu"
                }-line text-2xl text-white`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 backdrop-blur-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-white hover:text-[#baa263]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block bg-[#baa263] text-white text-center py-2 rounded-md hover:bg-yellow-700 transition"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-phone-fill"></i> Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
