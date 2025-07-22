import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-black px-0">
      <div className="w-full h-full flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 h-80 sm:h-96 md:h-[32rem] lg:h-full">
          <img
            src="/images/82736.jpg"
            className="w-full h-full object-cover"
            alt="Why Choose O4+"
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 p-8 lg:p-12">
          <div className="text-[#baa263] text-base font-bold mb-2">
            About O4+
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-50 mb-6 leading-tight">
            O4+ True Professional Water - Performance in Every Drop
          </h1>

          <p className="text-gray-100 mb-8 leading-relaxed">
            At O4+ True Professional, we believe that water is not just
            hydration—it's the foundation of life, energy, and wellness. <br /> Crafted
            by True Royal Industries Pvt. Ltd., O4+ Water is more than just
            packaged drinking water—it's a symbol of purity, performance, and
            power, designed for the health-conscious, the active, and the elite.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#baa263] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#baa263] mb-1">
                  Ultra-Purified 8-Stage Filtration
                </h3>
                <p className="text-sm text-gray-50">
                  Rigorous purification including UV sterilization, RO
                  filtration, and mineral balancing - 99.99% contaminant-free
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#baa263] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#baa263] mb-1">
                  Energy-Infused Technology
                </h3>
                <p className="text-sm text-gray-50">
                  Ion-balanced electrolytes and oxygen-boosting technology
                  designed for athletes and high-performance individuals
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#baa263] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#baa263] mb-1">
                  Premium Packaging
                </h3>
                <p className="text-sm text-gray-50">
                  Sleek, modern bottle with black and metallic gold accents that
                  complements your lifestyle and image
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#baa263] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#baa263] mb-1">
                  100% Food-Grade, BPA-Free
                </h3>
                <p className="text-sm text-gray-50">
                  High-grade, recyclable, BPA-free plastic bottles that comply
                  with FSSAI, BIS, and international quality standards
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="" className="bg-[#baa263] hover:bg-[#baa263] text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
            <i className="ri-arrow-right-up-long-line"></i> About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
