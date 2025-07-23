import React from "react";

const Locations = () => {
  const locations = [
    {
      country: "India",
      city: "Dehradun, Uttarakhand",
      icon: "ri-home-office-line",
      address: "C-9, Turner Road, Clement Town",
      fullAddress: "Dehradun, Uttarakhand - 248002, India",
      type: "Head Office",
      description:
        "Our primary headquarters managing operations across India and international markets.",
    },
    {
      country: "India",
      city: "Haridwar, Uttarakhand",
      icon: "ri-home-office-line",
      address: "Village Khelpur, Khasra No. 51, Nasrullapur, Bhagwanpur",
      fullAddress: "Haridwar, Uttarakhand - 247667, India",
      type: "Manufacturing Unit",
      description:
        "State-of-the-art production facility with advanced 8-stage purification technology.",
    },
    {
      country: "United Arab Emirates",
      city: "Dubai",
      icon: "ri-building-line",
      address: "Aspin Commercial Tower - Sheikh Zayed Road, 5th Floor",
      fullAddress: "Dubai - United Arab Emirates",
      type: "Regional Office",
      description:
        "Strategic hub for Middle East operations and international expansion initiatives.",
    },
    {
      country: "South Korea",
      city: "Seoul",
      icon: "ri-building-2-line",
      address: "General Technology Center: 61 Heonreung-ro 8-gil, Seocho-gu",
      fullAddress: "Seoul, South Korea",
      type: "Head Office",
      description:
        "Innovation center focusing on advanced water purification and packaging technologies.",
    },
  ];

  const stats = [
    {
      number: "4+",
      label: "Global Locations",
      icon: "ri-map-pin-line",
    },
    {
      number: "3",
      label: "Countries",
      icon: "ri-earth-line",
    },
    {
      number: "2",
      label: "Continents",
      icon: "ri-global-line",
    },
    {
      number: "1M+",
      label: "Bottles Produced",
      icon: "ri-drop-line",
    },
  ];

  return (
    <div className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-[#baa263] text-sm font-semibold  uppercase tracking-wide">
            Global Network
          </div>
          <h1 className="font-bold text-4xl lg:text-6xl text-gray-50 mb-6 leading-tight">
            Our <span className="text-[#baa263]">Worldwide</span> Presence
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From the heart of India to international markets, True Royal
            Industries is expanding globally to deliver premium hydration
            solutions. Our strategic locations ensure quality, innovation, and
            accessibility across continents.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-700 text-center"
            >
              <div className="w-16 h-16 bg-[#baa263] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-black text-2xl`}></i>
              </div>
              <div className="text-3xl font-bold text-[#baa263] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-50 mb-4">
              Strategic <span className="text-[#baa263]">Locations</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Each location serves a specific purpose in our global strategy,
              from manufacturing excellence to market expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-700 hover:border-[#baa263] transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Location Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#baa263] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className={`${location.icon} text-black text-2xl`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-[#baa263]">
                        {location.city}
                      </h3>
                      <div className="w-6 h-4 bg-gradient-to-r from-[#baa263] to-[#d4c078] rounded-sm"></div>
                    </div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide font-semibold">
                      {location.type}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      {location.country}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <i className="ri-map-pin-line text-[#baa263] text-lg mt-1"></i>
                    <div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {location.address}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        {location.fullAddress}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="p-4 bg-gray-800/50 rounded-xl">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {location.description}
                  </p>
                </div>

               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
