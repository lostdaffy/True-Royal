import React from "react";
import { Link } from "react-router-dom";

const WhyChooseO4 = () => {
  const productFeatures = [
    {
      title: "Ultra-Purified 8-Stage Filtration",
      description: "RO, UV & minerals for 99.99% pure, safe water with advanced purification technology.",
    },
    {
      title: "Energy-Infused Hydration",
      description: "Electrolytes & oxygen boost energy and recovery for peak performance.",
    },
    {
      title: "Premium Packaging Design",
      description: "Sleek black-gold bottle for a modern lifestyle that reflects excellence.",
    },
    {
      title: "100% BPA-Free Bottling",
      description: "Recyclable, food-grade, and health-safe plastic that meets global standards.",
    },
    {
      title: "Globally Certified Quality",
      description: "Meets FSSAI, BIS & international standards for supreme quality assurance.",
    },
    {
      title: "Professional Grade Water",
      description: "Specially crafted for athletes, professionals, and health-conscious individuals.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black px-0">
      <div className="w-full h-full flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-full">
          <img
            src="/images/choose.png"
            className="w-full h-screen object-cover"
            alt="Why Choose O4+"
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 p-8 lg:p-12">
          <div className="text-[#baa263] text-base font-bold mb-2">
            Why Choose Us
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-50 mb-6 leading-tight">
            Why Choose <span className="text-[#baa263]">O4+ True Professional</span> Water?
          </h1>

          <p className="text-gray-100 mb-8 leading-relaxed">
            Experience the difference with O4+ True Professional Water - where purity meets performance. 
            <br /> Our advanced 8-stage purification process and energy-infused technology deliver more than just hydration - 
            we deliver excellence in every drop for those who demand the best.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
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
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-50">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/products" className="bg-[#baa263] hover:bg-[#a59156] text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 inline-block">
            <i className="ri-arrow-right-up-line"></i> Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseO4;
