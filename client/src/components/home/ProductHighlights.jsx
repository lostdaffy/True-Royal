import React from "react";

const ProductHighlights = () => {
  return (
    <div className="bg-black min-h-screen py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#baa263] mb-2 sm:mb-4">
            O4+ True Professional
          </h1>
          <p className="text-lg sm:text-xl text-gray-50">
            Premium Mineral Water Collection
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 justify-center items-center">
          
          {/* 250ml Water Bottle Card */}
          <div className="bg-gray-900/50 rounded-2xl lg:rounded-3xl p-4 sm:p-6 shadow-xl overflow-hidden w-full max-w-lg xl:max-w-2xl xl:w-1/2 border border-[#baa263]">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Image Container */}
              <div className="sm:w-1/2 flex justify-center">
                <div className="w-full max-w-xs sm:max-w-none">
                  <img
                    src="/images/250ml.png"
                    alt="O4+ True Professional 250ml"
                    className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover rounded-xl"
                  />
                </div>
              </div>
              
              {/* Content Container */}
              <div className="sm:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#baa263] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                    250ml • Luxury
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight text-white">
                    Luxury in Every Drop
                  </h2>

                  {/* Key Highlights */}
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[#baa263] mb-2 sm:mb-3">
                      Key Highlights:
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1 sm:space-y-1.5">
                      <li>• Premium 250ml mineral water — purified & balanced</li>
                      <li>• Luxury diamond-cut bottle for superior grip & style</li>
                      <li>• Perfect for boardrooms, events, travel, and gifting</li>
                      <li>• 100% recyclable packaging — sustainability with style</li>
                      <li>• Certified mineral composition for healthy hydration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 1 Litre Water Bottle Card */}
          <div className="bg-gray-900/50 rounded-2xl lg:rounded-3xl p-4 sm:p-6 shadow-xl overflow-hidden w-full max-w-lg xl:max-w-2xl xl:w-1/2 border border-[#baa263]">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Image Container */}
              <div className="sm:w-1/2 flex justify-center">
                <div className="w-full max-w-xs sm:max-w-none">
                  <img
                    src="/images/1lr.png"
                    alt="O4+ True Professional 1 Litre"
                    className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover rounded-xl"
                  />
                </div>
              </div>
              
              {/* Content Container */}
              <div className="sm:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#baa263] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                    1 Litre • Premium
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight text-white">
                    Grandeur in Every Drop
                  </h2>

                  {/* Key Highlights */}
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[#baa263] mb-2 sm:mb-3">
                      Key Highlights:
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1 sm:space-y-1.5">
                      <li>• Generous 1 Litre capacity for extended freshness</li>
                      <li>• High-grade mineral content — perfectly balanced</li>
                      <li>• Premium diamond-textured bottle design</li>
                      <li>• Ideal for hotels, conferences, luxury hospitality & events</li>
                      <li>• Eco-conscious and 100% recyclable packaging</li>
                      <li>• Engineered for those who carry class, not claim it</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Promise */}
        <div className="text-center mt-8 sm:mt-12 p-4 sm:p-6 bg-gradient-to-r from-[#baa263]/10 to-[#baa263]/5 rounded-xl border border-[#baa263]/20 max-w-4xl mx-auto">
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 italic leading-relaxed">
            <span className="text-[#baa263] font-semibold">Brand Promise:</span>{" "}
            Both bottles feature the same premium mineral water formula - the
            only difference is the quantity, ensuring consistent luxury
            experience across all sizes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlights;