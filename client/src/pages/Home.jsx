import React from "react";
import HeroNew from "../components/home/HeroNew";
import About from "../components/home/About";
import ProductHighlights from "../components/home/ProductHighlights";
import WhyChooseO4 from "../components/home/WhyChooseO4";
import ContactForm from "../components/global/ContactForm";

const Home = () => {
  return (
    <>
      <div className="w-full h-full">
        <HeroNew />
        <About />
        <ProductHighlights />
        <WhyChooseO4 />
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
