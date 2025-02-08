import { useEffect } from "react";
import Carousel from "./Carousel";
import FeatureCard from "./FeatureCard";
import MapCardContainer from "./MapCardContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQ from "./FAQ";
import { useNavigate } from "react-router-dom";
import OptimalCropSeasonCardContainer from "./OptimalCropSeasonCardContainer";
import Testimonial from "./Testimonial";
import Features from "./Features";
import GeospatialAnalysis from "./GeoSpatialAnalysis";
import SideModel from "./SideModel";
import SideModel2 from "./SideModel2";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const featureSection = document.getElementById("feature");
    if (featureSection) {
      featureSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOnClick = () => {
    navigate("/info");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="w-full mb-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-start justify-between p-6 space-y-8 md:space-y-0 md:space-x-8 mt-8 md:mt-12">
          {/* Left Section - Text */}
          <div className="flex-1 space-y-4 md:space-y-6" data-aos="fade-right">
            <h1 className="mt-4 md:mt-0 text-2xl md:text-5xl lg:text-6xl font-bold text-center md:text-left">
              Smart Farming for Better Yields
            </h1>
            <p className="text-sm md:text-lg text-center md:text-left">
              Leverage our advanced AI tools to enhance your farming practices. Our platform provides personalized pesticide recommendations, soil analysis, and market pricing predictions to help you grow healthier crops and maximize profits.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <button
                className="w-full md:w-auto px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
              <button
                className="w-full md:w-auto bg-transparent border-2 border-gray-500 px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-gray-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={handleOnClick}
              >
                View More
              </button>
            </div>
          </div>

          {/* Right Section - Carousel */}
          <div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            data-aos="fade-left"
          >
            <Carousel />
          </div>
        </div>

        <FeatureCard />
        <GeospatialAnalysis />
        <div id="feature">
          <Features />
          <SideModel />
<SideModel2 />
        </div>
        <FAQ />
      </div>
    </>
  );
};

export default HomePage;
