import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black rounded-3xl p-8 border border-[#baa263]">
            <h3 className="text-2xl font-bold text-[#baa263] mb-6">
              Send us a Message
            </h3>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-50 mb-2 text-sm font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-[#baa263] focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <label className="block text-gray-50 mb-2 text-sm font-semibold">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-[#baa263] focus:outline-none"
                    placeholder="+91 0123456789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-50 mb-2 text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-[#baa263] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-50 mb-2 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-[#baa263] focus:outline-none resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-[#baa263] text-black font-bold py-3 px-2 rounded-3xl hover:scale-105 transition-transform duration-300"
                onClick={() => alert("Message sent! We will contact you soon.")}
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left text-gray-50">
              <h2 className="font-bold text-4xl lg:text-5xl pb-2">
                GET IN TOUCH
              </h2>
              <p className="text-base">
                Our team is ready to support you — reach out today.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Logo and Addresses */}
              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src="/images/clogo.png"
                  className="w-full sm:w-40 bg-white rounded-3xl object-contain"
                  alt=""
                />

                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-[#baa263]">
                    True Royal Industries Pvt. Ltd.
                  </h3>

                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-3">
                      <i className="ri-map-pin-fill text-[#baa263] text-2xl"></i>
                      <div>
                        <h4 className="text-white font-bold mb-1">Address 1</h4>
                        <p className="text-gray-50 text-sm">
                          Abdul Kalam Chowk, <br /> Delhi Road, Roorkee –
                          247667,
                          <br /> Uttarakhand, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <i className="ri-map-pin-fill text-[#baa263] text-2xl"></i>
                      <div>
                        <h4 className="text-white font-bold mb-1">Address 2</h4>
                        <p className="text-gray-50 text-sm">
                          C-9, Turner Road, <br /> Clement Town, Dehradun –
                          248002,
                          <br /> Uttarakhand, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone and Email */}
              <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex items-start gap-3">
                  <i className="ri-phone-fill text-[#baa263] text-2xl"></i>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <p className="text-gray-300">+91 73027 99941</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <i className="ri-mail-line text-[#baa263] text-2xl"></i>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-gray-300">
                      o4plusprofessional@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
