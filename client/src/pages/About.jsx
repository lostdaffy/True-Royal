import React from "react";
import TopHero from "../components/global/TopHero";

const About = () => {
  return (
    <>
      <TopHero heading="About Us" navs="About" />

      {/* Hero Section */}
      <section className="bg-black h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex flex-col md:flex-row w-full gap-8">
            {/* Left Half - Company Info */}
            <div className="md:w-1/2 flex items-center justify-center px-4 md:px-8">
              <div className="max-w-2xl">
                {/* Main Heading */}
                <div className="mb-10">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-snug">
                    About <br />
                    <span className="text-[#baa263] text-4xl">
                      True Royal Industries Pvt. Ltd.
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl md:text-2xl text-[#baa263] font-light italic">
                    Powering the Future of Premium Hydration
                  </p>
                </div>

                {/* Company Description */}
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  True Royal Industries Pvt. Ltd. is a next-generation Indian
                  company dedicated to creating world-class consumer brands that
                  combine innovation, quality, and trust. As the proud parent of
                  O4+ True Professional Water, we stand at the forefront of the
                  premium hydration revolution—committed to delivering purity,
                  wellness, and energy in every drop.
                </p>
              </div>
            </div>

            {/* Right Half - Flagship Brand */}
            <div className="md:w-1/2 flex items-center justify-center px-4 md:px-8">
              <div className="bg-gradient-to-r from-gray-900 to-black border border-[#baa263] rounded-2xl p-8 shadow-2xl max-w-2xl">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#baa263] mb-4">
                    Our Flagship Brand:{" "}
                    <span className="text-white">
                      O4+ True Professional Water
                    </span>
                  </h2>
                  <div className="w-16 h-0.5 bg-[#baa263] mb-6"></div>
                </div>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  O4+ True Professional Water represents the vision, strength,
                  and values of True Royal Industries. It is more than bottled
                  water—it's a performance lifestyle product designed for modern
                  consumers who value quality, health, and luxury.
                </p>

                <div className="bg-black/50 rounded-xl p-6 border border-[#baa263]/30">
                  <p className="text-white text-base md:text-lg leading-relaxed">
                    Each bottle is manufactured with precision, purified through{" "}
                    <span className="text-[#baa263] font-semibold">
                      8 advanced stages
                    </span>
                    , and infused with{" "}
                    <span className="text-[#baa263] font-semibold">
                      energy-balancing electrolytes
                    </span>{" "}
                    to offer hydration that works harder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes O4+ Exceptional */}
      <div className="h-screen bg-black px-6 py-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-4xl lg:text-4xl font-bold text-[#baa263]">
              What Makes O4+ Exceptional?
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Performance-grade water designed for those who demand more from
              every sip
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "8-Stage Filtration",
                desc: "Rigorous purification including UV sterilization, RO filtration, and mineral balancing ensuring 99.99% contaminant-free water.",
              },
              {
                title: "Energy-Infused Technology",
                desc: "Ion-balanced electrolytes and oxygen-boosting technology designed for athletes, gym-goers, and high-performance individuals.",
              },
              {
                title: "Premium Packaging",
                desc: "Sleek, modern bottles with black and metallic gold accents that complement your lifestyle and professional image.",
              },
              {
                title: "100% BPA-Free",
                desc: "High-grade, recyclable, BPA-free plastic bottles keeping your water fresh and toxin-free with complete safety assurance.",
              },
              {
                title: "International Standards",
                desc: "Complies with FSSAI, BIS, and international quality norms, making it suitable for domestic and global consumption.",
              },
              {
                title: "Performance Grade",
                desc: "Scientifically balanced for performance, ideal for gyms, offices, hotels, and daily wellness routines of professionals.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className=" p-10 rounded-xl border border-[#baa263] "
              >
                <h3 className="text-2xl font-bold text-[#baa263]  mb-4">
                  {card.title}
                </h3>
                <p className="text-base text-gray-300">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="h-screen bg-black px-6 py-24 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Mission */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-white">Our Mission</h2>
                <div className="mt-2 w-16 h-1 bg-[#baa263] rounded"></div>
              </div>
              <div className=" p-8 rounded-2xl border border-[#baa263] shadow-xl">
                <h3 className="text-2xl font-semibold text-[#baa263] mb-4">
                  Hydration with Purpose
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  To deliver world-class, energy-enhanced water to every corner
                  of the globe, starting from India.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We aim to promote wellness, performance, and lifestyle
                  enhancement through superior hydration solutions that go
                  beyond ordinary bottled water.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-white">Our Vision</h2>
                <div className="mt-2 w-16 h-1 bg-[#baa263] rounded"></div>
              </div>
              <div className="p-8 rounded-2xl border border-[#baa263] shadow-xl space-y-4">
                <p className="text-xl text-gray-300 leading-relaxed">
                  To become a globally recognized leader in premium
                  hydration—delivering not just water, but wellness, energy, and
                  confidence in every drop.
                </p>
                <ul className="space-y-3">
                  {[
                    "Every bottle supports a healthy, active, and performance-driven life",
                    "Present in households, gyms, hotels across India, Middle East, and Southeast Asia",
                    "Operate eco-friendly, high-tech bottling plants from India to Dubai and beyond",
                    "Empower distributors and wellness partners committed to quality and innovation",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-[#baa263] mt-1">•</span>
                      <span className="text-gray-50">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="h-screen bg-black px-6 py-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#baa263]">
              Our Leadership Team
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Visionaries behind O4+ True Professional Water, driven by purpose,
              passion, and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Card 1 */}
            <div className="relative p-8 rounded-3xl border border-[#baa263] ">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-[#baa263] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl font-bold text-black">ZR</span>
                </div>
                <h3 className="text-2xl font-bold text-white">ZIYAULRAHMAN</h3>
                <p className="text-[#baa263] font-semibold">
                  Founder, Director & CEO
                </p>
              </div>
              <p className="text-gray-50 leading-relaxed mb-6 text-sm sm:text-base">
                As the Founder and Chief Executive Officer of True Royal
                Industries Pvt. Ltd., Mr. Ziyaulrahman is the driving force
                behind the company’s vision and strategy. His deep insight into
                consumer needs led to the creation of O4+ True Professional
                Water.
              </p>
              <blockquote className="border-l-4 border-[#baa263] pl-4 italic text-gray-50">
                “We're building more than a brand—we're building a global
                hydration experience rooted in quality, energy, and trust.”
              </blockquote>
            </div>

            {/* Card 2 */}
            <div className="relative  p-8 rounded-3xl border border-[#baa263]">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-[#baa263] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl font-bold text-black">HK</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  HILALUDDIN KAMRUDDIN KHAN
                </h3>
                <p className="text-[#baa263] font-semibold">
                  Co-Founder, Director & CFO
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                As Co-Founder and Chief Financial Officer, Mr. Hilaluddin brings
                strong financial discipline and operational leadership. He
                oversees finance, compliance, and infrastructure planning for
                sustainable scaling.
              </p>
              <blockquote className="border-l-4 border-[#baa263] pl-4 italic text-gray-300">
                “Behind every great product is great process — and we are
                committed to excellence at every stage of production and
                delivery.”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
