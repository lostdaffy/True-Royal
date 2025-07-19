import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white border-t-2 border-[#baa263] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + Socials */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/images/brand-logo.png"
                alt="Taj Enterprises"
                className="w-44 sm:w-56"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              <strong>Pure water. Trusted quality.</strong> <br />
              Delivering advanced purification solutions you can rely on.
            </p>
            <div>
              <p className="text-sm text-gray-400 mb-2">Follow Us</p>
              <div className="flex gap-3">
                <Link
                  to="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-blue-600 transition hover:scale-110"
                >
                  <i className="ri-facebook-fill text-[#baa263] text-lg"></i>
                </Link>
                <Link
                  to="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition hover:scale-110"
                >
                  <i className="ri-instagram-line text-[#baa263] text-lg"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold border-b border-[#baa263] pb-2 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Product", path: "/product" },
                { name: "Service", path: "/service" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#baa263] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold border-b border-[#baa263] pb-2">
              Get In Touch
            </h3>

            {/* Address */}
            <div className="flex gap-3 items-start">
              <i className="ri-map-pin-line text-[#baa263] text-xl mt-1"></i>
              <div className="text-sm text-gray-300 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <address className="not-italic leading-relaxed">
                    Abdul Kalam Chowk, <br />
                    Delhi Road, <br />
                    Roorkee – 247667 <br />
                    Uttarakhand, India
                  </address>
                  <address className="not-italic leading-relaxed">
                    C-9, Turner Road, <br />
                    Clement Town, <br />
                    Dehradun – 248002 <br />
                    Uttarakhand, India
                  </address>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 items-start">
              <i className="ri-mail-line text-[#baa263] text-xl mt-1"></i>
              <div>
                <p className="text-white font-medium mb-1">Email Us</p>
                <Link
                  to="mailto:o4plusprofessional@gmail.com"
                  className="text-gray-300 hover:text-[#baa263] transition-colors"
                >
                  o4plusprofessional@gmail.com
                </Link>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-start">
              <i className="ri-phone-fill text-[#baa263] text-xl mt-1"></i>
              <div>
                <p className="text-white font-medium mb-1">Call Us</p>
                <Link
                  to="tel:+919897748786"
                  className="text-gray-300 hover:text-[#baa263] transition-colors"
                >
                  +91 98977 48786
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <p className="text-center">
              © {new Date().getFullYear()} All Rights Reserved —
              <Link to="/" className="text-[#baa263] ml-1 transition">
                True Royal Industries Pvt. Ltd.
              </Link>
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link to="/privacy" className="hover:text-gray-200 transition">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-gray-200 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
