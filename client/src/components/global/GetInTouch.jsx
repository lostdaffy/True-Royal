import React from "react";

const GetInTouch = () => {
  return (
    /* Root wrapper – padding added for the smallest screens */
    <div className="w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* --------  Page Heading  -------- */}
        <header className="text-center mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-50 mb-4">
            GET IN <span className="text-[#baa263]">TOUCH</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to experience premium hydration? Our team is here to support
            you — reach out today.
          </p>
        </header>

        {/* --------  Main Grid  -------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ----------  Contact Form  ---------- */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! We will contact you soon.");
            }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 sm:p-8 md:p-10 border border-[#baa263] shadow-2xl"
          >
            {/* Form title */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#baa263] rounded-full grid place-content-center">
                <i className="ri-message-3-line text-black text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#baa263]">
                Send us a Message
              </h3>
            </div>

            {/* Input fields */}
            <div className="space-y-6">
              {/* Name / Phone */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-50 mb-2 text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#baa263] focus:outline-none focus:ring-2 focus:ring-[#baa263]/20 transition-all"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <label className="block text-gray-50 mb-2 text-sm font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 0123456789"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#baa263] focus:outline-none focus:ring-2 focus:ring-[#baa263]/20 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-50 mb-2 text-sm font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#baa263] focus:outline-none focus:ring-2 focus:ring-[#baa263]/20 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-50 mb-2 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  rows="5"
                  required
                  placeholder="Tell us about your requirements, bulk orders, partnership opportunities..."
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#baa263] focus:outline-none focus:ring-2 focus:ring-[#baa263]/20 resize-none transition-all"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#baa263] to-[#d4c078] text-black font-bold py-4 px-6 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i className="ri-send-plane-2-line" />
                Send Message
              </button>
            </div>
          </form>

          {/* ----------  Company Info  ---------- */}
          <aside className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-700">
              {/* Logo & Text */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <img
                  src="/images/Industry.png"
                  alt="O4+ Logo"
                  className="w-40 h-40 rounded-3xl border-2 border-[#baa263] object-contain"
                />
                <p className="text-gray-300 leading-relaxed max-w-lg">
                  Experience the difference with O4+ True Professional Water.
                  We’re committed to delivering excellence in every drop for
                  those who demand the best.
                </p>
              </div>

              {/* Phone & Email */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl">
                  <div className="w-12 h-12 bg-[#baa263] rounded-full grid place-content-center">
                    <i className="ri-phone-fill text-black text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-[#baa263] font-medium">
                      +91 73027 99941
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl">
                  <div className="w-12 h-12 bg-[#baa263] rounded-full grid place-content-center">
                    <i className="ri-mail-line text-black text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-[#baa263] text-[10px] sm:text-base md:text-lg lg:text-xl font-medium">
                      o4plusprofessional@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* --------  Bottom Call-To-Action  -------- */}
        <section className="text-center mt-16 px-4">
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-[#baa263]/20 max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold text-[#baa263] mb-2">
              Ready to Partner with Excellence?
            </h4>
            <p className="text-gray-300 mb-6">
              Join the premium hydration revolution. Let’s discuss how O4+ can
              elevate your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917302799941"
                className="bg-[#baa263] hover:bg-[#a59156] text-black px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <i className="ri-phone-line" />
                Call Now
              </a>

              <a
                href="mailto:o4plusprofessional@gmail.com"
                className="border-2 border-[#baa263] text-[#baa263] hover:bg-[#baa263] hover:text-black px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <i className="ri-mail-line" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetInTouch;
