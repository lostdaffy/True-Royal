import React from "react";
import { Link } from "react-router-dom";
import TopHero from "../components/global/TopHero";

const Product = () => {
  const productSpecs = {
    "250ml": [
      { label: "Volume", value: "250ml" },
      { label: "Material", value: "BPA-Free Premium Plastic" },
      { label: "Purification", value: "8-Stage RO + UV + Minerals" },
      { label: "pH Level", value: "7.2 - 7.8" },
      { label: "Shelf Life", value: "12 Months" },
      { label: "Packaging", value: "24 Bottles/Case" },
    ],
    "1000ml": [
      { label: "Volume", value: "1000ml (1 Litre)" },
      { label: "Material", value: "BPA-Free Premium Plastic" },
      { label: "Purification", value: "8-Stage RO + UV + Minerals" },
      { label: "pH Level", value: "7.2 - 7.8" },
      { label: "Shelf Life", value: "12 Months" },
      { label: "Packaging", value: "12 Bottles/Case" },
    ],
  };

  return (
    <>
      <TopHero heading="Our Product" navs="Product" />

      {/* Product Comparison Section */}
      <section className="w-full bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-50 mb-3 sm:mb-4">
              Choose Your <span className="text-[#baa263]">Perfect Size</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4">
              Both variants offer the same premium quality and purification
              process, tailored for different occasions and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* 250ml Card */}
            <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-700 hover:border-[#baa263] transition-all">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#baa263] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-drop-line text-black text-2xl sm:text-3xl"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#baa263] mb-2">
                  250ml
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Perfect Portion
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-center p-3 sm:p-4 bg-gray-800 rounded-xl">
                  <div className="text-[#baa263] font-bold text-xs sm:text-sm">
                    Best For
                  </div>
                  <div className="text-white text-sm sm:text-base">
                    Individual consumption, meetings, travel
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">Portability</span>
                    <span className="text-[#baa263] font-semibold">
                      Excellent
                    </span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-[#baa263] font-semibold">
                      Quick consumption
                    </span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">Packaging</span>
                    <span className="text-[#baa263] font-semibold">
                      24 bottles/case
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 1000ml Card */}
            <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-700 hover:border-[#baa263] transition-all">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#baa263] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-water-flash-line text-black text-2xl sm:text-3xl"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#baa263] mb-2">
                  1000ml
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Premium Volume
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-center p-3 sm:p-4 bg-gray-800 rounded-xl">
                  <div className="text-[#baa263] font-bold text-xs sm:text-sm">
                    Best For
                  </div>
                  <div className="text-white text-sm sm:text-base">
                    Hospitality, dining, extended use
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">Value</span>
                    <span className="text-[#baa263] font-semibold">
                      Premium
                    </span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-[#baa263] font-semibold">
                      Extended hydration
                    </span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">Packaging</span>
                    <span className="text-[#baa263] font-semibold">
                      12 bottles/case
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 250ml Section */}
      <section className="w-full min-h-screen bg-black text-white">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:basis-1/2 w-full h-64 sm:h-80 md:h-screen relative">
            <img
              src="/images/098467.jpg"
              className="w-full h-full object-cover"
              alt="O4+ True Professional Water Bottle 250ml"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>

          {/* Details */}
          <div className="md:basis-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 sm:mb-4">
                O4+ Professional
                <br />
                <span className="text-[#baa263]">250ml</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Perfectly sized for professionals on the move. Our 250ml bottle
                combines premium quality with elegant design, making it the
                ideal choice for meetings, travel, and sophisticated occasions.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#baa263] mb-3 sm:mb-4">
                  Perfect For:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    "Executive meetings",
                    "Travel & flights",
                    "Premium events",
                    "Fine dining",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#baa263] rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-black text-xs sm:text-sm font-bold"></i>
                      </div>
                      <span className="text-gray-300 text-sm sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-gray-900 rounded-xl p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-[#baa263] mb-3 sm:mb-4">
                  Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  {productSpecs["250ml"].map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0"
                    >
                      <span className="text-gray-400 text-xs sm:text-sm">
                        {spec.label}:
                      </span>
                      <span className="text-white font-medium text-xs sm:text-sm text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1 Litre Section */}
      <section className="w-full min-h-screen bg-black text-white">
        <div className="flex flex-col-reverse md:flex-row">
          {/* Details */}
          <div className="md:basis-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 sm:mb-4">
                O4+ Professional
                <br />
                <span className="text-[#baa263]">1000ml</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Premium hydration for extended needs. Our 1-litre bottle is
                designed for hotels, restaurants, conferences, and luxury
                hospitality, delivering superior quality and elegant
                presentation.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#baa263] mb-3 sm:mb-4">
                  Ideal For:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    "Hotels & resorts",
                    "Restaurants & cafes",
                    "Conference halls",
                    "Corporate offices",
                    "Luxury events",
                    "Family dining",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#baa263] rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-black text-xs sm:text-sm font-bold"></i>
                      </div>
                      <span className="text-gray-300 text-sm sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-gray-900 rounded-xl p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-[#baa263] mb-3 sm:mb-4">
                  Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  {productSpecs["1000ml"].map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0"
                    >
                      <span className="text-gray-400 text-xs sm:text-sm">
                        {spec.label}:
                      </span>
                      <span className="text-white font-medium text-xs sm:text-sm text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:basis-1/2 w-full h-64 sm:h-80 md:h-screen relative">
            <img
              src="/images/234566.jpg"
              className="w-full h-full object-cover"
              alt="O4+ True Professional 1 Litre Water Bottle"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="w-full bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-700">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#baa263] mb-3 sm:mb-4">
                Quality You Can Trust
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto px-4">
                Every bottle of O4+ True Professional Water undergoes rigorous
                quality checks and meets international standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: "ri-shield-check-line",
                  label: "BIS Certified",
                  desc: "Bureau of Indian Standards approved",
                },
                {
                  icon: "ri-drop-line",
                  label: "8-Stage Purification",
                  desc: "Advanced RO + UV + Minerals",
                },
                {
                  icon: "ri-leaf-line",
                  label: "100% BPA Free",
                  desc: "Safe, food-grade packaging",
                },
                {
                  icon: "ri-award-line",
                  label: "FSSAI Approved",
                  desc: "Food safety standards compliant",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#baa263] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <i
                      className={`${item.icon} text-black text-xl sm:text-2xl`}
                    ></i>
                  </div>
                  <h4 className="text-white font-bold mb-2 text-sm sm:text-base">
                    {item.label}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gray-900/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#baa263]/20">
              <h4 className="text-xl sm:text-2xl font-bold text-[#baa263] mb-2">
                Ready to Partner with Excellence?
              </h4>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 px-4">
                Join the premium hydration revolution. Let's discuss how O4+ can
                elevate your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <a
                  href="tel:+917302799941"
                  className="bg-[#baa263] hover:bg-[#a59156] text-black px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <i className="ri-phone-line"></i>
                  Call Now
                </a>
                <a
                  href="mailto:o4plusprofessional@gmail.com"
                  className="border-2 border-[#baa263] text-[#baa263] hover:bg-[#baa263] hover:text-black px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <i className="ri-mail-line"></i>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
