import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import ProductHighlights from "../components/home/ProductHighlights";
import WhyChooseO4 from "../components/home/WhyChooseO4";
import MassageOne from "../components/home/MassageOne";
import ContactForm from "../components/global/ContactForm";

const Home = () => {
  return (
    <>
      <div className="w-full h-full">
        <Hero />
        <MassageOne msg="Water isn’t just hydration — it’s fuel." />
        <About />
        <ProductHighlights />
        <MassageOne msg="Hydration isn’t a habit — it’s your edge." />
        <WhyChooseO4 />
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
