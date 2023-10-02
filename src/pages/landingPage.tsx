// App.tsx
import favicon from "./favicon.png";
import React from "react";
import Carousel from "@/components/custom/Carousel";
import { Button } from "@/components/ui/button";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full h-auto p-4 pb-10 bg-slate-50">
      <Carousel />
      <div className="w-full h-auto grid grid-cols-2 py-10">
        <div className="col-span-1  flex flex-col justify-center px-10 relative ml-10">
          <h1 className="text-6xl font-semibold py-6  z-10 text-gray-900">
            Transformity
          </h1>
          <div className="rounded-full w-72 h-72 bg-blue-100 absolute top-0 z-0 left-0"></div>
          <p className="z-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur a eveniet et, earum accusamus officia dicta quia quaerat
            sit. Adipisci voluptates eligendi fugit! Pariatur numquam quis, at
            vel quisquam minima?
          </p>
        </div>
        <div className="col-span-1 relative justify-center">
          <img
            src={favicon}
            className="m-auto z-20 relative brightness-125"
          ></img>
          <div className="w-72 h-72 bg-blue-100 absolute top-0 z-0 left-[20%]   rounded-full">
            <div className="w-60 h-60 bg-red-500 absolute top-[10%] left-[60%] z-10 rounded-full brightness-105"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto grid grid-cols-4 px-6 py-6 mb-11">
        <div className="flex flex-col gap-4 col-span-3">
          <h1 className="text-4xl text-blue-950 font-semibold">Leading with Empathy</h1>
          <p>
            My book launched on December 9, 2021 in both hardcover and eBook
            format, and is now available anywhere books can be purchased! Click
            the button below to purchase it. The audiobook should come out
            sometime in January 2022.
          </p>
          <p>
            A large portion of royalties received from this book will be donated
            to nonprofit organizations supporting the underprivileged,
            underrepresented minorities, and the homeless.
          </p>
          <p>
            By purchasing this book, you will make a difference in someone’s
            life, perform a random act of kindness, and positively impact
            humanity. Thank you for helping.
          </p>
          <p>– Dr. Gautham Pallapa</p>
          <Button variant="outline" className="w-36">
            Buy the book
          </Button>
        </div>
        <div className="col-span-1 w-full h-full object-contain flex justify-center items-center">
          <img src="https://i0.wp.com/transformity.info/wp-content/uploads/2021/12/pallapa_3D_01.png?resize=229%2C300&ssl=1" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
