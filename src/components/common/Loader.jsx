import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 3000); 
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white gap-4 z-[9999] transition-opacity duration-1000 ${fadeOut ? "opacity-0 hidden" : ""
        }`}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center text-center md:space-x-4 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[
            "🌱 कृषिMitra...👨‍🌾",
            "Bringing AI, ",
            "to Your Fields 🌱",
        ].map((text, index) => (
          <motion.h3
            key={index}
            className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] font-thin"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            {text}
          </motion.h3>
        ))}
      </motion.div>
    </div>


  );
};

export default Loader;
