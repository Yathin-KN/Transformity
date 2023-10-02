// App.tsx
import favicon from "./favicon.png"
import React from "react";
import Carousel from "@/components/custom/Carousel";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full h-screen p-4">
        <Carousel/>
     <div className="w-full h-auto grid grid-cols-2 py-10">
      <div className="col-span-1  flex flex-col justify-center px-10 relative ml-10">
        <h1 className="text-6xl font-semibold py-6  z-10 text-gray-900">
           Transformity
           
        </h1>
        <div className="rounded-full w-72 h-72 bg-blue-100 absolute top-0 z-0 left-0">

          </div>
        <p className="z-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur a eveniet et, earum accusamus officia dicta quia quaerat sit. Adipisci voluptates eligendi fugit! Pariatur numquam quis, at vel quisquam minima?
        </p>
      </div>
      <div className="col-span-1 relative justify-center">
        <img src={favicon} className="m-auto z-20 relative brightness-125" ></img>
        <div className="w-72 h-72 bg-blue-100 absolute top-0 z-0 left-[20%]   rounded-full">
        <div className="w-60 h-60 bg-red-500 absolute top-[10%] left-[60%] z-10 rounded-full brightness-105">
        </div>
        </div>
        
      </div>
     </div>
    </div>
  );
};

export default LandingPage;
