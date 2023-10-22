import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Carousel = ({ slides }: { slides: any }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel w-full h-[80vh]">
      {slides.map((slide: { image: any; }, index: React.Key | null | undefined) => (
        <div
          key={index}
          className="h-full w-full relative bg-transparent"
          style={{
            display: index !== currentSlide ? "none" : "block",
          }}
        >
          <motion.div
            className="w-full h-full bg-gray-900 absolute inset-0 brightness-125"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }} // Adjust duration as needed
            style={{
              backgroundImage: `url(${slide.image})`,
              clipPath: `polygon(0 0, 100% 0, 100% 80%, 0% 100%)`,
            }}
         
          >
            <div className="h-full w-full absolute inset-0">
              <div className="h-full w-full bg-transparent text-5xl font-semibold flex flex-col uppercase justify justify-center pl-[12%]">
             
                <div className="font-kanit">
                <div className="h-full w-full absolute inset-0"
               style={{
                background: `linear-gradient(90deg, rgba(0,0,1,1) 0%, rgba(0,0,1,1) 22%, rgba(0,212,255,0) 100%)`,
               }}
              >
                </div>
                  <div className="relative z-30 flex flex-col">
                  <motion.span
                    className="font-saira"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    transforming
                  </motion.span>
                  <motion.span
                    className="text-red-600 text-7xl font-saira"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                  >
                    humanity
                  </motion.span>
                  <motion.span
                    className="font-saira"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 1 }}
                  >
                    through empathy and
                  </motion.span>
                  <motion.span
                    className="font-saira"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                  >
                    technology
                  </motion.span>
                  </div>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;

