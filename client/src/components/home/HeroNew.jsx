import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeroNew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  const images = [
    "/images/hero-1.png",
    "/images/hero-2.png",
    "/images/hero-3.png",
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrev();
    }
  };

  return (
    <div
      className="w-full min-h-screen relative pt-5 sm:pt-16 lg:pt-10"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0 / 68%), rgb(0 0 0 / 68%)), url("/images/214913.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-5 pt-10">
          <h1 className="hidden lg:block text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-8xl uppercase font-bold text-white mb-4 sm:mb-4 md:mb-5 lg:mb-6 leading-tight sm:leading-snug drop-shadow-2xl">
            Hydration Begins Here
          </h1>
        </div>

        {/* Responsive Layout - Stack on mobile, flex on larger screens */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          <div className="w-full lg:basis-1/2 self-center order-2 lg:order-1">
            <h2 className="text-[#baa263] text-3xl pb-5 font-bold">
              Welcome to O4+ True Professional
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-6 sm:mb-6 md:mb-7 lg:mb-8 max-w-xl sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto sm:mx-0 lg:mx-0 leading-relaxed px-2 sm:px-0">
              O4+ Water is designed to support your health and elevate your
              lifestyle through ultra-pure, energy-enhancing hydration. <br />{" "}
              <br /> Whether you're active, health-conscious, or deeply
              committed to your overall well-being, O4+ delivers the hydration
              your body truly deserves—clean, revitalizing, and purposefully
              crafted for modern living.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start lg:justify-start gap-4">
              <Link
                to=""
                className="bg-[#baa263] text-white px-6 sm:px-6 md:px-8 py-2.5 sm:py-2.5 md:py-3 rounded-3xl text-xs sm:text-xs md:text-sm font-semibold border-2 border-[#baa263] hover:bg-transparent hover:text-[#baa263] hover:border-2 hover:border-[#baa263] transition duration-300 w-full sm:w-auto text-center"
              >
                <i className="ri-arrow-right-up-long-line"></i> Explore Us
              </Link>
            </div>
          </div>

          {/* Enhanced Responsive Carousel */}
          <div className="w-full lg:basis-1/2 order-1 lg:order-2">
            <div
              className="relative w-full overflow-hidden rounded-3xl border-2 border-[#baa263]"
              ref={carouselRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Carousel Container */}
              <div
                className="flex transition-transform duration-500 ease-in-out "
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 ">
                    <Link to="/contact">
                      <img
                        src={image}
                        className="w-full h-auto max-h-[250px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[500px] xl:max-h-[600px] mx-auto object-contain "
                        alt={`Product ${index + 1}`}
                      />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Responsive Navigation Arrows - Hidden on mobile */}
              <button
                onClick={goToPrev}
                className="hidden sm:block absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 sm:p-2 rounded-full hover:bg-black/70 transition-all duration-200 z-10"
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="hidden sm:block absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 sm:p-2 rounded-full hover:bg-black/70 transition-all duration-200 z-10"
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Responsive Dots Indicator */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? "bg-[#baa263] scale-125"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              {/* Mobile Swipe Indicator */}
              <div className="block sm:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-xs">
                Swipe to navigate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
