import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useModeStore from "@/store/mode";
import clsx from "clsx";
const Content2=()=>{
  return <div className="relative z-30 flex flex-col gap-2">
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
}

const Content1=()=>{
  return <div className="relative z-30 flex flex-col gap-2">
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
}
const content={
  "0": <Content1/>,
  "1":<Content2/>
}
const Carousel = ({ slides }: { slides: any }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {mode}=useModeStore();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel w-full h-[80vh]">
      {slides.map((slide: { image: any; }, index: number) => (
        <div
          key={index}
          className={clsx("h-full w-full relative",{
            "bg-white":(mode=='light'),
            "bg-black":(mode=='dark'),
          })}
          style={{
            display: index !== currentSlide ? "none" : "block",
          }}
        >
          <motion.div
            className="w-full h-full bg-gray-900 absolute inset-0 brightness-125 object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }} // Adjust duration as needed
            style={{
              backgroundImage: `url(${slide.image})`,

              clipPath: `polygon(0 0, 100% 0, 100% 80%, 0% 100%)`,
            }}
         
          >
            <div className="h-full w-full absolute inset-0">
              <div className="h-full w-full bg-transparent text-4xl md:text-5xl font-semibold flex flex-col uppercase justify justify-center pl-[12%]">
             
                <div className="font-kanit">
                <div className="h-full w-full absolute inset-0"
               style={{
                background:(mode=="dark")?`linear-gradient(90deg, rgba(0,0,1,1) 0%, rgba(0,0,1,1) 22%, rgba(0,212,255,0) 100%)`:`linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)
                `,
               }}
              >
                </div>
                 {content[(index%2==0)?"0":"1"]}
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

