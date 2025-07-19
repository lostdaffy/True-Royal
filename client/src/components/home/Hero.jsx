import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center pt-12 sm:pt-16 lg:pt-20"
      style={{
        backgroundImage: `url("/images/214987.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-20">
          {/* Product Image Section - Mobile Only */}
          <div className="flex sm:hidden items-center justify-center mb-6">
            <div className="flex items-end gap-2">
              <img
                src="/images/98736.png"
                className="w-16 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                alt="Bottle 1"
              />
              <img
                src="/images/987987.png"
                className="w-16 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                alt="Bottle 2"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center sm:text-left lg:text-left">
            <h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl uppercase font-bold text-white mb-4 sm:mb-4 md:mb-5 lg:mb-6 leading-tight sm:leading-snug">
              The Future of <span className="text-[#baa263]">Hydration</span>
              <br className="hidden xs:block" />
              <span className="block xs:inline"> Starts Here</span>
            </h1>
            <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg text-white/90 mb-6 sm:mb-6 md:mb-7 lg:mb-8 max-w-xl sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto sm:mx-0 lg:mx-0 leading-relaxed px-2 sm:px-0">
              O4+ Water supports your health and lifestyle with ultra-pure,
              energy-enhancing hydration. Created for the active, the conscious,
              and the committed to well-being.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start lg:justify-start gap-4">
              <Link
                to=""
                className="bg-[#baa263] text-white px-6 sm:px-6 md:px-8 py-2.5 sm:py-2.5 md:py-3 rounded-3xl text-xs sm:text-xs md:text-sm font-semibold border-2 border-[#baa263] hover:bg-transparent hover:text-[#baa263] hover:border-2 hover:border-[#baa263] transition duration-300 w-full sm:w-auto text-center"
              >
                <i className="ri-arrow-right-up-long-line"></i> Explore Us
              </Link>
            </div>
          </div>

          {/* Product Image Section - Tablet */}
          <div className="flex-1 hidden sm:flex lg:hidden items-center justify-center">
            <div className="flex items-end gap-3">
              <img
                src="/images/98736.png"
                className="w-24 md:w-28 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                alt="Bottle 1"
              />
              <img
                src="/images/987987.png"
                className="w-24 md:w-28 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                alt="Bottle 2"
              />
            </div>
          </div>

          {/* Desktop Product Image Section */}
          <div className="flex-1 hidden lg:flex items-center justify-center">
            <div className="flex items-end gap-4">
              <img
                src="/images/98736.png"
                className="w-36 lg:w-40 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                alt="Bottle 1"
              />
              <img
                src="/images/987987.png"
                className="w-36 lg:w-40 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                alt="Bottle 2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
