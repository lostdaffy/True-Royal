import React from "react";
import { Link } from "react-router-dom";

const TopHero = ({ heading, navs }) => {
  return (
    <div
      className="w-full h-[250px] sm:h-[300px] flex items-center"
      style={{
        backgroundImage: `url("/images/230587.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-gray-50 text-3xl sm:text-4xl md:text-5xl font-bold text-left pb-2 sm:pb-3">
          {heading}
        </h2>

        <div className="flex flex-wrap items-center space-x-2 text-sm sm:text-base">
          <Link to="/" className="text-gray-50 hover:underline">
            Home
          </Link>
          <span className="text-gray-50">{">"}</span>
          <span className="text-[#baa263] font-semibold">{navs}</span>
        </div>
      </div>
    </div>
  );
};

export default TopHero;
