import React from "react";

const WhyChooseO4 = () => {
  const productFeatures = [
    {
      title: "8-Stage Purification",
      description: "RO, UV & minerals for 99.99% pure, safe water.",
    },
    {
      title: "Energy Hydration",
      description: "Electrolytes & oxygen boost energy and recovery.",
    },
    {
      title: "Premium Packaging",
      description: "Sleek black-gold bottle for a modern lifestyle.",
    },
    {
      title: "BPA-Free Bottling",
      description: "Recyclable, food-grade, and health-safe plastic.",
    },
    {
      title: "Globally Certified",
      description: "Meets FSSAI, BIS & international standards.",
    },
  ];

  return (
    <div className="w-full h-screen bg-black px-0">
      <div className="w-full h-full flex flex-col lg:flex-row">
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-10">
          <div className="w-full max-w-xl">
            <h2 className="text-gray-50 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left leading-tight">
              Why Choose <br />
              <span className="text-[#baa263] font-semibold">
                O4+ True Professional
              </span>{" "}
              ?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-sm sm:text-base">
              {productFeatures.map((feature, index) => (
                <div key={index}>
                  <p className="font-semibold text-[#baa263] mb-1">
                    <i className="ri-check-double-line mr-2"></i>
                    {feature.title}
                  </p>
                  <p className="text-gray-300 text-sm pl-5">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-full">
          <img
            src="/images/97836.jpg"
            className="w-full h-full object-cover"
            alt="Why Choose O4+"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseO4;
