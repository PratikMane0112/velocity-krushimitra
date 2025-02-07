import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import geoSpatialAnalysisImage from "../../assets/image/geoSpatialAnalysisImage.jpg";

const GeoSpatialAnalysis = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="py-20 px-0 bg-[#f5f5f5] dark:bg-gray-900">
      <div className="w-full flex flex-wrap my-0 mx-auto justify-center items-center max-w-[1300px] max-md:flex max-md:flex-col">
        {/* Image Section with Animation */}
        <div
          className="flex-shrink-0 flex-grow-0 basis-[40%] w-full p-4 text-center max-md:mb-8"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-once="true"
        >
          <div className="max-sm:flex max-sm:justify-center">
            <img
              src={geoSpatialAnalysisImage}
              alt="GeoSpatial Analysis"
              className="w-[75%] max-ma:max-w-[400px] max-md:w-[90%]"
            />
          </div>
        </div>

        {/* Text Section with Animations */}
        <div
          className="flex-shrink-0 flex-grow-0 basis-[55%] p-4 max-md:p-8"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-once="true"
        >
          <h2 className="text-blue-950 text-2xl md:text-3xl dark:text-white mb-8" data-aos="fade-up" data-aos-delay="200">
          Why do we need smart farming solutions ?
          </h2>
          <ul>
            <li
              className="my-4 mx-auto md:text-xl text-blue-950 dark:text-gray-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
               ⮞ Local farmers often lack expert advice on crop management, pesticide recommendations, and market prices, leading to suboptimal outcomes.
               </li>
            <li
              className="my-4 mx-auto md:text-xl text-blue-950 dark:text-gray-300"
              data-aos="fade-up"
              data-aos-delay="600"
            >
               ⮞ That's why we created our all-in-one farming platform, which includes features like pesticide recommendations, soil analysis, and market price predictions.
            </li>
            <li
              className="my-4 mx-auto md:text-xl text-blue-950 dark:text-gray-300"
              data-aos="fade-up"
              data-aos-delay="800"
            >
               ⮞ This platform provides farmers with access to expert insights and tools, ensuring better crop yields and market profitability from anywhere.
              </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GeoSpatialAnalysis;
