import React from "react";
import { Link } from "react-router-dom";
import TopHero from "../components/global/TopHero";
import ContactForm from "../components/global/ContactForm";

const Contact = () => {
  return (
    <>
      <TopHero heading="Contact Us" navs="Contact" />

      <section className="bg-black">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20">
          {/* Map Container */}
          <div className="w-full max-w-7xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.43432713576124!2d78.00070595999188!3d30.28503930116723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b6ce3eb7981%3A0x4fa4ab73cb9b418b!2sTRUE%20ROYAL%20INDUSTRY%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1752903482461!5m2!1sen!2sin"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] border-0 rounded-lg shadow-2xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default Contact;