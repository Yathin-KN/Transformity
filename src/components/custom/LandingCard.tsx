import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const LandingCard = ({
    title,
    description,
    image,
    id
  }: {
    title: string;
    description: string;
    image: string;
    id:string;
  }) => {
    const [hovered, setHovered] = useState<boolean>(false);
    return (
        <motion.div
          className="h-fit w-fit bg-white"
         
        >
          <Link to={`/blog/${id}`}>
          <motion.div className=" w-[20rem]  bg-red-500" >
            <motion.div className="bg-white h-fit w-fit relative"  onHoverStart={() => {
            setHovered(true);
          }}
          onHoverEnd={() => {
            setHovered(false);
          }}>
              <motion.img src={image} className="w-full object-cover h-[250px]"></motion.img>
              {(
                <p className="text-xl py-1 text-center font-saira font-semibold  break-words text-white bg-red-500" style={{
                  display:(hovered)?"hidden":"",
                  color:(hovered)?'transparent':""
                }}>
                  {title}
                </p>
              )}
              <div
                className="absolute inset-0  p-4 flex justify-center items-center bg-red-500 h-[250px] w-full"
                style={{
                  background: hovered
                    ? `linear-gradient(0deg, rgba(0,0,1,1) 0%, rgba(0,212,255,0) 100%)`
                    : "",
                  display: hovered ? "" : "none",
                }}
              >
                 
                <div className="flex justify-center  w-full items-center flex-col my-auto">
                  <p className="text-2xl font-saira font-semibold text-white text-center">
                    {title}
                  </p>
                  <p className="text-xl font-saira text-white text-center">
                    {description}
                  </p>
                </div>
              </div>
             
            </motion.div>
          </motion.div>
          </Link>
        </motion.div>
    );
  };

export default LandingCard;