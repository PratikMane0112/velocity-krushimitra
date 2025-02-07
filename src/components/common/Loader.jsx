import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 1500); // Auto-hide after 3 seconds
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center text-white gap-4 z-[9999] transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 hidden" : ""
      }`}
    >
      {["कृषिMitra,", "WE SERVE", "FRESH !"].map((text, index) => (
        <motion.h3
          key={index}
          className="text-[2vw] font-thin"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          {text}
        </motion.h3>
      ))}
    </div>
  );
};

export default Loader;
