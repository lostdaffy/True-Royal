import React from "react";
import HeroNew from "../components/home/HeroNew";
import About from "../components/home/About";
import ProductHighlights from "../components/home/ProductHighlights";
import WhyChooseO4 from "../components/home/WhyChooseO4";
import GetInTouch from "../components/global/GetInTouch";
import AboutCompany from "../components/home/AboutCompany";
import Locations from "../components/home/Locations";

const Home = () => {
  return (
    <>
      <div className="w-full h-full">
        <HeroNew />
        <About />
        <ProductHighlights />
        <WhyChooseO4 />
        <AboutCompany />
        <Locations />
        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
