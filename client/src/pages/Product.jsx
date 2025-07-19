import React from "react";
import { Link } from "react-router-dom";
import TopHero from "../components/global/TopHero";

const Product = () => {
  return (
    <>
      <TopHero heading="Our Product" navs="Product" />

      {/* 250ml Section */}
      <section className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:basis-1/2 w-full h-64 md:h-auto">
          <img
            src="/images/098467.jpg"
            className="w-full h-full object-cover"
            alt="O4+ True Professional Water Bottle"
          />
        </div>

        {/* Details */}
        <div className="md:basis-1/2 flex flex-col justify-center px-6 md:px-16 py-10 space-y-6 text-center md:text-left">
          <h2 className="text-sm uppercase font-bold tracking-widest text-[#baa263]">
            O4+ True Professional
          </h2>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Luxury in <span className="text-[#baa263]">Every Drop</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300">
            The O4+ True Professional Mineral Water (250ml) is not just
            hydration — it's a statement of class. Compact, elegant, and pure,
            this bottle reflects a lifestyle of sophistication for those who
            value the finest details.
          </p>

          <div>
            <h3 className="text-md font-semibold text-white mb-2">
              Key Highlights:
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Premium 250ml mineral water — purified & balanced</li>
              <li>Luxury diamond-cut bottle for superior grip & style</li>
              <li>Perfect for boardrooms, events, travel, and gifting</li>
              <li>100% recyclable packaging — sustainability with style</li>
              <li>Certified mineral composition for healthy hydration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 1 Litre Section */}
      <section className="w-full min-h-screen bg-black text-white flex flex-col-reverse md:flex-row">
        {/* Details */}
        <div className="md:basis-1/2 flex flex-col justify-center px-6 md:px-16 py-10 space-y-6 text-center md:text-left">
          <h2 className="text-sm uppercase font-bold tracking-widest text-[#baa263]">
            O4+ True Professional
          </h2>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Grandeur in Every <span className="text-[#baa263]">Drop</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300">
            Experience hydration redefined with the O4+ True Professional 1
            Litre Mineral Water. Crafted for boardrooms, fine dining, hotels,
            and elite experiences — it's not just about water, it’s about
            presence. With a larger capacity and luxurious design, it’s made to
            make a statement.
          </p>

          <div>
            <h3 className="text-md font-semibold text-white mb-2">
              Key Highlights:
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Generous 1 Litre capacity for extended freshness</li>
              <li>High-grade mineral content — perfectly balanced</li>
              <li>Premium diamond-textured bottle design</li>
              <li>
                Ideal for hotels, conferences, luxury hospitality & events
              </li>
              <li>Eco-conscious and 100% recyclable packaging</li>
              <li>Engineered for those who carry class, not claim it</li>
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="md:basis-1/2 w-full h-64 md:h-auto">
          <img
            src="/images/234566.jpg"
            className="w-full h-full object-cover"
            alt="O4+ True Professional 1 Litre Water Bottle"
          />
        </div>
      </section>
    </>
  );
};

export default Product;
