import React from "react";

// Product Highlights Section
const ProductHighlights = () => {
  return (
    <div
      className="w-full py-16 sm:py-20"
      style={{
        backgroundImage: `url("/images/938834.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-start mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#baa263] mb-4">
            Our Premium Offering
          </h2>
          <p className="text-gray-50 text-base sm:text-lg max-w-xl">
            Engineered for excellence, designed for those who demand the best in
            water purification.
          </p>
        </div>

        {/* Bottle Images & Text */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Bottles */}
          <div className="flex justify-center gap-8 sm:gap-10">
            <img
              src="/images/98736.png"
              className="w-24 sm:w-32 md:w-36 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              alt="Bottle 1"
            />
            <img
              src="/images/987987.png"
              className="w-24 sm:w-32 md:w-36 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              alt="Bottle 2"
            />
          </div>

          {/* Highlight Text */}
          <div className="text-[#baa263] text-center lg:text-start text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-tight">
            <h3>Ultra-Pure</h3>
            <h3 className="py-3">Drinking</h3>
            <h3>Water</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlights;
