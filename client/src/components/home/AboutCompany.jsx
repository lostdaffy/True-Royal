import React from "react";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  const companyHighlights = [
    "Setting up advanced bottling and purification facilities in Tier-1 cities in India",
    "Launching our first international water plant in Dubai",
    "Building a strong distribution and retail presence in the UAE, Saudi Arabia, Qatar, Singapore, Vietnam, and South Africa",
    "Developing future product lines including alkaline water, vitamin-infused hydration, and glass-bottled elite series",
  ];

  return (
    <div className="bg-black">
      {/* About True Royal Industries Section */}
      <div className="w-full min-h-screen px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-[#baa263] text-base font-bold mb-2">
              About Us
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-50 mb-6 leading-tight">
              About{" "}
              <span className="text-[#baa263]">True Royal Industries</span> Pvt.
              Ltd.
            </h2>
            <p className="text-xl text-[#baa263] font-semibold mb-4">
              Powering the Future of Premium Hydration
            </p>
            <p className="text-gray-100 leading-relaxed max-w-4xl mx-auto">
              True Royal Industries Pvt. Ltd. is a next-generation Indian
              company dedicated to creating world-class consumer brands that
              combine innovation, quality, and trust. As the proud parent of O4+
              True Professional Water, we stand at the forefront of the premium
              hydration revolution—committed to delivering purity, wellness, and
              energy in every drop.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Flagship Brand */}
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#baa263] mb-4">
                Our Flagship Brand: O4+ True Professional Water
              </h3>
              <p className="text-gray-100 leading-relaxed">
                O4+ True Professional Water represents the vision, strength, and
                values of True Royal Industries. It is more than bottled
                water—it's a performance lifestyle product designed for modern
                consumers who value quality, health, and luxury. Each bottle is
                manufactured with precision, purified through 8 advanced stages,
                and infused with energy-balancing electrolytes to offer
                hydration that works harder.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#baa263] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-100 leading-relaxed">
                To become a global leader in health-forward consumer goods,
                starting with our flagship water brand. We aim to raise the
                standard of everyday essentials by combining scientific
                purification, premium packaging, and eco-conscious practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
