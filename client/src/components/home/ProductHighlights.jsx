import React from "react";
import { Link } from "react-router-dom";

const ProductHighlights = () => {
  return (
    <div className="w-full min-h-screen py-16 sm:py-20 md:py-24 lg:py-28 relative bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="">
            <div className="">
              <h2 className="text-center text-5xl font-semibold text-[#baa263]">Our Products</h2>
            </div>
            <div className="flex gap-10 py-10">
              <div>
                <img src="/images/250ml.png" className="w-100" alt="" />
              </div>
              <div>
                <img src="/images/1lr.png" className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlights;
