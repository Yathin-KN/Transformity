// import favicon from "./../assets/favicon.png";
import React from "react";
import Carousel from "@/components/custom/Carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// import { Button } from "@/components/ui/button";
// import Gallery from "@/components/ReactSlick/landingSlides";
// import { Background, Parallax } from "react-parallax";
// import Band from "@/components/custom/band";
// const HorizontalBlockWithParallax = () => {
//   return (
//     <div className="w-[80%] h-full">
//         <Parallax strength={-250} blur={{ min: -15, max: 15 }}>
//           <Background className="custom-bg">
//             <img
//               src={
//                 "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//               }
//               alt="fill murray"
//             />
//           </Background>
//         </Parallax>
//       </div>
//   );
// };

const slides = [
  {
    image:
      "https://technicaeditorial.com/wordpress/wp-content/uploads/2021/02/iStock-1245226116-small-600x600.jpg",
    text: "Slide 1 Text",
  },
  {
    image:
      "https://humanity-summit.com/assets/images/post-photos-square-humanity-summit-ai06.jpeg",
    text: "Slide 2 Text",
  },
 
];

const Modal = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-10 p-4 min-h-[50vh] h-auto px-10">
      <div className="col-span-1 w-full h-full bg-red-500 rounded-lg  shadow-inner flex justify-center items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
        >
          <motion.img
            src="https://i0.wp.com/transformity.info/wp-content/uploads/2021/12/pallapa_3D_01.png?resize=229%2C300&ssl=1"
            alt="Your Image"
            className="mt-6"
          />
        </motion.div>
      </div>
      <div className="col-span-1 w-full h-full bg-transparent flex flex-col gap-10 px-10 justify-between">
        <h1 className="font-saira uppercase text-5xl font-semibold border-l-4 px-4 border-red-600">
          How did we get started <br /> in this buisness
        </h1>
        <p className="font-kanit  text-white">
          My book launched on December 9, 2021 in both hardcover and eBook
          format, and is now available anywhere books can be purchased! Click
          the button below to purchase it. The audiobook should come out
          sometime in January 2022.
          <br />
          A large portion of royalties received from this book will be donated
          to nonprofit organizations supporting the underprivileged,
          underrepresented minorities, and the homeless.
          <br />
          By purchasing this book, you will make a difference in someone’s life,
          perform a randtom act of kindness, and positively impact humanity.
          Thank you for helping.
        </p>
        <Button className="rounded-full py-1 px-6 border bg-red-600 border-white text-lg font-saira font-semibold uppercase hover:bg-white hover:text-red-500 hover-border-red-500 w-72">
          Buy now
        </Button>
      </div>
    </div>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div className="w-full pb-10 h-auto bg-black text-white">
      <div className="fixed top-0 left-0 w-full bg-black">
        <Carousel slides={slides} />
        <Modal />
      </div>

      {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 py-10">
        <div className="flex-col justify-center md:px-10 md:relative md:ml-10 hidden">
          <h1 className="text-3xl md:text-6xl font-semibold py-6 text-gray-900">
            Transformity
          </h1>
          <div className="rounded-full hidden md:visible w-32 md:w-72 h-32 md:h-72 bg-blue-100 absolute top-0 z-0 left-0"></div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur a eveniet et, earum accusamus officia dicta quia quaerat
            sit. Adipisci voluptates eligendi fugit! Pariatur numquam quis, at
            vel quisquam minima?
          </p>
        </div>
        <div className="justify-center md:justify-end relative hidden">
          <img
            src={favicon}
            className="m-auto z-20 relative brightness-125"
            alt=""
          />
          <div className="w-32 hidden md:visible md:w-72 h-32 md:h-72 bg-blue-100 absolute top-0 z-0 left-20% md:left-[20%]   rounded-full">
            <div className="w-24 hidden md:visible md:w-60 h-24 md:h-60 bg-red-500 absolute top-10% md:top-[10%] left-60% md:left-[60%] z-10 rounded-full brightness-105"></div>
          </div>
        </div>
      </div>
      <HorizontalBlockWithParallax />
      <div className=" py-5 flex justify-between">
      <Band/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 px-0 md:px-6 py-6 mb-11">
        <div className="flex flex-col gap-4 col-span-1 md:col-span-3 p-3">
          <h1 className="text-2xl md:text-4xl text-blue-950 font-semibold">
            Leading with Empathy
          </h1>
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
        <div className="hidden md:block col-span-1 w-full h-full object-contain  justify-center items-center">
          <img
            src="https://i0.wp.com/transformity.info/wp-content/uploads/2021/12/pallapa_3D_01.png?resize=229%2C300&ssl=1"
            alt=""
          />
        </div>
      </div>
      <Gallery /> */}
    </div>
  );
};

export default LandingPage;
