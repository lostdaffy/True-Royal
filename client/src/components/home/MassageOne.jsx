import React from "react";

const MassageOne = ({ msg }) => {
  return (
    <div className="h-[150px] sm:h-[200px] bg-black flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {msg && (
            <h1 className="text-[#baa263] text-3xl sm:text-5xl md:text-6xl font-bold leading-snug">
              {msg}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MassageOne;
