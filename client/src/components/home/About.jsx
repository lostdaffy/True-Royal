import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center px-0">
      <div className="w-full h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden">
            <img
              src="/images/82736.jpg"
              className="w-full h-full object-cover"
              alt="O4+ True Professional"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-6 md:p-10 flex items-center justify-center">
            <div className="overflow-y-auto max-h-full w-full">
              <div className="text-center lg:text-left">
                <h2 className="text-gray-50 text-3xl md:text-4xl font-bold pb-5">
                  About <br />
                  <span className="text-[#baa263] font-semibold">
                    O4+ True Professional
                  </span>
                </h2>

                <p className="text-green-50 text-base md:text-lg">
                  At <strong>O4+ True Professional</strong>, we believe that{" "}
                  <strong>
                    water is not just hydration— <br /> it's the foundation of
                    life, energy, and wellness
                  </strong>
                  . With this belief, we have created a premium line of{" "}
                  <strong>energy-boosting, ultra-pure drinking water</strong>{" "}
                  designed for those who demand more from every drop they consume.
                </p>

                <ul className="list-none space-y-2 text-left pt-10 text-white text-base">
                  <li>
                    <i className="ri-arrow-right-double-line text-[#baa263] mr-2"></i>
                    Scientifically balanced for performance
                  </li>
                  <li>
                    <i className="ri-arrow-right-double-line text-[#baa263] mr-2"></i>
                    Enhanced with natural minerals & electrolytes
                  </li>
                  <li>
                    <i className="ri-arrow-right-double-line text-[#baa263] mr-2"></i>
                    Stylish, premium packaging
                  </li>
                  <li>
                    <i className="ri-arrow-right-double-line text-[#baa263] mr-2"></i>
                    Ideal for gyms, offices, hotels, and daily wellness
                  </li>
                  <li>
                    <i className="ri-arrow-right-double-line text-[#baa263] mr-2"></i>
                    Backed by a visionary brand with international roots
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
