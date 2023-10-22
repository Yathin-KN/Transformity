import { motion, useAnimation} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const components = [
    {
      id: 1,
      component: <div className="component component-a bg-slate-100 h-[20vh] w-[20vh]">Component A</div>
    },
    {
      id: 2,
      component: <div className="component component-b bg-slate-100 h-[20vh] w-[20vh]">Component B</div>
    },{
        id: 3,
        component: <div className="component component-a bg-red-500 h-[20vh] w-[20vh]">Component C</div>
      },
      {
        id: 4,
        component: <div className="component component-b bg-slate-100 h-[20vh] w-[20vh]">Component D</div>
      },{
        id: 5,
        component: <div className="component component-a bg-red-500 h-[20vh] w-[20vh]">Component A</div>
      },
      {
        id: 6,
        component: <div className="component component-b bg-slate-100 h-[20vh] w-[20vh]">Component B</div>
      }
    // Add more components as needed
  ];
  const Exp = () => {
    const [activeComponentIndex, setActiveComponentIndex] = useState(0);
    const carouselRef = useRef(null);
  
    const handleScroll = (e:any) => {
      const sensitivity = 50; // Adjust this value for sensitivity
  
      if (e.deltaY > sensitivity && activeComponentIndex < components.length - 1) {
        setActiveComponentIndex(activeComponentIndex + 1);
      } else if (e.deltaY < -sensitivity && activeComponentIndex > 0) {
        setActiveComponentIndex(activeComponentIndex - 1);
      } else if (activeComponentIndex === components.length - 1) {
        // If last component is highlighted, trigger a scroll down event
        window.scrollBy(0, window.innerHeight);
      }
    }
  
    useEffect(() => {
      const element = carouselRef.current;
      element?.addEventListener('wheel', handleScroll);
  
      return () => {
        element?.removeEventListener('wheel', handleScroll);
      };
    }, [activeComponentIndex]);
  
    return (
      <motion.div
        ref={carouselRef}
        id="carousel-container"
        className="carousel-container hover:sticky bg-gray-900 text-white flex items-center w-screen h-[300px] overflow-x-auto"
        style={{ position: 'sticky', top: 0 }}
        tabIndex="0" // Add a tabIndex to make the container focusable
      >
        {components.map((item, index) => (
          <motion.div
            key={item.id}
            className="component h-[300px]"
            initial={{ opacity: index === activeComponentIndex ? 1 : 0, x: 0 }}
            animate={{ opacity: index === activeComponentIndex ? 1 : 0, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {item.component}
          </motion.div>
        ))}
      </motion.div>
    );
  }
  
  export default Exp;