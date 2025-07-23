import React from "react";
import { Link } from "react-router-dom";
import TopHero from "../components/global/TopHero";
import GetInTouch from "../components/global/GetInTouch";
import Locations from "../components/home/Locations";

const Contact = () => {
  return (
    <>
      <TopHero heading="Contact Us" navs="Contact" />

      <div className="bg-black py-10">
        <Locations />
      </div>

      <GetInTouch />
    </>
  );
};

export default Contact;
