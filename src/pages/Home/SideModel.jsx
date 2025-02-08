import React from "react";
import farmingImage from "../../assets/image/weather.jpg"; 
import { useNavigate } from "react-router-dom";

const SideModel = () => {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate("/model5");
      };
    return (
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-start justify-between p-6 space-y-8 md:space-y-0 md:space-x-8 mt-8 md:mt-12">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                {/* Left Section - Text Content */}
                <div className="flex-1 space-y-4 md:space-y-6" data-aos="fade-right">
                    <h1 className="mt-4 md:mt-0 text-2xl md:text-4xl lg:text-4xl font-bold text-center md:text-left">
                    Crop Disease Assistant for agriculture
                    </h1>
                    <p className="text-sm md:text-lg text-center md:text-left">
                    Gives the query based response which is simple, clear and formatted as bullet points, helping farmers to understood complex terms in simple words.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                        <button
                            className="w-full md:w-auto px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={handleGetStarted}
                        >
                            Let's Go
                        </button>
                        {/* <button
                            className="w-full md:w-auto bg-transparent border-2 border-gray-500 px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-gray-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            onClick={handleOnClick}
                        >
                            View More
                        </button> */}
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end" data-aos="fade-left">
                    <img src={farmingImage} alt="Smart Farming" className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default SideModel;
