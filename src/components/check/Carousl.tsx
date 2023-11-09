import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useModeStore from "@/store/mode";
import { motion } from "framer-motion";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, 
};
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
// const Content = ({ text }:{text:any}) => {
//   return (
//     <div className="flex flex-col gap-2 relative z-50">
//       <span className="font-saira text-5xl text-white">{text}</span>
//     </div>
//   );
// };

const Carousel2 = ({ slides }:{slides:any}) => {
const {mode}=useModeStore();
  return (
  <div className="bg-transparent relative">
      <div className="text-7xl  absolute inset-0 z-40 bg-black "  style={{
               clipPath: `polygon(100% 80%, 0% 100%, 100% 100%)`,
            }}>
            hello
      </div>
      <Slider {...settings}>
      {slides.map((slide: { image: string | undefined; text: any; }, index: number) => (
        <div key={index} className="w-full h-[80vh]">
          <div
            className={`h-full w-full relative ${
               (mode==="light")?"bg-white" : "bg-black"
            }`}
          >
            <div className="w-full h-full bg-gray-900 brightness-125 object-center object-fill">
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full w-full absolute inset-0 bg-transparent text-4xl md:text-5xl font-semibold flex flex-col uppercase justify justify-center pl-[12%]">
              <div className="font-kanit">
                <div
                  className="h-full w-full absolute inset-0"
                  style={{
                    background:
                    (mode==="light")
                        ? `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)`
                        : `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 22%, rgba(0,212,255,0) 100%)`,
                  }}
                ></div>
                {content[(index%2==0)?"0":"1"]}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default Carousel2;
