import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black  text-white relative overflow-hidden border-t-2 border-[#baa263]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block group">
              <img src="/images/brand-logo.png" className="w-50" alt="" />
            </Link>

            <p className="mt-4 text-gray-300 leading-relaxed max-w-md">
              At O4+ True Professional, water isn't just hydration—it's the
              foundation of life and wellness. <br /> Crafted by True Royal
              Industries, O4+ Water represents purity, performance, and power
              for the health-conscious and elite.
            </p>

            {/* Social Media Links */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <Link
                  to="https://www.instagram.com/o4professional/"
                  target="_blank"
                  className="group flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-[#baa263] rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <i className="ri-facebook-fill"></i>
                </Link>
                <Link
                  to=""
                  target="_blank"
                  className="group flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-[#baa263] rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links" className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/home", label: "Home" },
                { to: "/product", label: "Product" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group flex items-center text-gray-300 hover:text-[#baa263] transition-all duration-200"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#baa263] transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm">
              {/* Address */}
              <div className="group">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#baa263]">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-1">Our Location</p>
                    <address className="not-italic text-gray-300 leading-relaxed">
                      C-9, Turner Road, Clement Town,
                      <br />
                      Turner Road, Dehradun,
                      <br />
                      Uttarakhand, India - 248002
                    </address>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#baa263]">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-2">Email Us</p>
                    <Link
                      to="mailto:o4plusprofessional@gmail.com"
                      className="block text-gray-300 hover:text-[#baa263] transition-colors duration-200"
                    >
                      o4plusprofessional@gmail.com
                    </Link>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#baa263]">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-2">Call Us</p>
                    <Link
                      to="tel:+917302799941"
                      className="block text-gray-300 hover:text-[#baa263] transition-colors duration-200"
                    >
                      +91 73027 99941
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-[#baa263]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2015-{new Date().getFullYear()} All Rights Reserved —
              <Link to="/" className="text-[#baa263] ">
                O4+ True Professional
              </Link>
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link
                to="/privacy"
                className="hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                to="/terms"
                className="hover:text-gray-400 transition-colors"
              >
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
