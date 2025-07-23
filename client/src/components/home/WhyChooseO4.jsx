import React from "react";
import { Link } from "react-router-dom";

const WhyChooseO4 = () => {
  const productFeatures = [
    {
      title: "Advanced 8-Stage Purification",
      description:
        "Our cutting-edge filtration system removes 99.99% of impurities while retaining essential minerals for optimal health.",
    },
    {
      title: "Energy & Performance Boost",
      description:
        "Electrolyte-infused formula designed to enhance athletic performance and accelerate recovery times.",
    },
    {
      title: "International Quality Standards",
      description:
        "Certified by FSSAI, BIS, and global health authorities ensuring world-class quality and safety.",
    },
  ];

  

  return (
    <div className="w-full bg-black">
      {/* Why Choose O4+ Section */}
      <div className="w-full min-h-screen px-0">
        <div className="w-full h-full flex flex-col lg:flex-row">
          {/* Left Side - Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-50 mb-6 leading-tight">
                Choose{" "}
                <span className="text-[#baa263]">O4+ True Professional</span>
                <br />
                <span className="text-2xl lg:text-3xl text-gray-300 font-normal">
                  The Water That Works Harder
                </span>
              </h1>
             
              <p className="text-gray-200 mb-8 leading-relaxed">
                O4+ isn't just hydration—it's your competitive advantage. Our
                scientifically-formulated water combines advanced purification
                with performance-enhancing electrolytes, delivering the
                hydration that ambitious professionals and athletes trust.
              </p>

              {/* Key Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#baa263] mb-4">
                  What Makes Us Different:
                </h3>
                <div className="space-y-4">
                  {productFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-[#baa263] to-[#d4c078] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-5 h-5 text-black font-bold"
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
                        <h4 className="font-bold text-[#baa263] mb-1 text-lg">
                          {feature.title}
                        </h4>
                        <p className="text-gray-200 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 h-64 lg:h-full relative">
            <img
              src="/images/97836.jpg"
              className="w-full h-full object-cover"
              alt="Why Choose O4+"
            />
            {/* Overlay with stats */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-[#baa263] font-semibold mb-2">
                Trusted by Professionals
              </h4>
              <p className="text-white text-sm">
                "The hydration choice of champions, executives, and health
                enthusiasts across the globe."
              </p>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default WhyChooseO4;
