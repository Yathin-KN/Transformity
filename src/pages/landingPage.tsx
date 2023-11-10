import React from "react";
// import Carousel from "@/components/custom/Carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Eye, Heart, Hourglass, Plus,} from "lucide-react";
import Footer from "@/components/custom/footer";
import Gallery from "@/components/ReactSlick/landingSlides";
import Img from "./../assets/favicon.png";
import useModeStore from "@/store/mode";
import Img2 from"@/assets/work4.jpg";

import clsx from "clsx";
import Carousel2 from "@/components/check/Carousl";
const bandData = [
  {
    title: (
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="flex flex-nowrap font-saira items-center relative text-red-400 md:w-fit"
      >
        500 <Plus size={42} strokeWidth={3} />{" "}
        <div className="flex flex-nowrap font-saira items-center absolute top-1 left-1 text-white">
          500 <Plus size={42} strokeWidth={3} />{" "}
        </div>
      </motion.div>
    ),
    subtitle: "Episodes",
  },
  {
    title: (
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="flex flex-nowrap font-saira items-center relative text-red-400"
      >
        3000 <Hourglass size={36} strokeWidth={3} />{" "}
        <div className="flex flex-nowrap font-saira items-center absolute top-1 left-1 text-white">
          3000 <Hourglass size={36} strokeWidth={3} />{" "}
        </div>
      </motion.div>
    ),
    subtitle: "Minutes",
  },
  {
    title: (
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="flex flex-nowrap font-saira items-center relative text-red-400"
      >
        1500 <Eye size={36} strokeWidth={3} className="ml-1" />{" "}
        <div className="flex flex-nowrap font-saira items-center absolute top-1 left-1 text-white">
          1500 <Eye size={36} strokeWidth={3} className="ml-1" />{" "}
        </div>
      </motion.div>
    ),
    subtitle: "Views",
  },
  {
    title: (
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="flex flex-nowrap font-saira items-center relative text-red-400 w-fit"
      >
        2.2 K
        <div className="flex flex-nowrap font-saira items-center absolute top-1 left-1 text-white">
          2.2K
        </div>
      </motion.div>
    ),
    subtitle: "Downloads",
  },
  {
    title: (
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="flex flex-nowrap font-saira items-center relative text-red-400"
      >
        1500 <Heart size={36} strokeWidth={3} className="ml-1" fill="white" />{" "}
        <div className="flex flex-nowrap font-saira items-center absolute top-1 left-1 text-white">
          1500 <Heart size={36} strokeWidth={3} className="ml-1" fill="white" />{" "}
        </div>
      </motion.div>
    ),
    subtitle: "Likes",
  },
];

const slides = [
  {
    image:
      Img2,
    text: "Slide 1 Text",
  },
  {
    image:
      Img2,
    text: "Slide 2 Text",
  },
];

const Modal = ({ value }: { value: boolean }) => {
  const { mode } = useModeStore();
  // mode="light";
  if (value) {
    return (
      <div
        className={clsx(
          "w-full grid md:grid-cols-2 gap-10 md:p-4 min-h-[50vh] h-auto md:px-10 py-3 ",
          {
            "bg-white": mode === "light",
            "bg-black": mode === "dark",
          }
        )}
      >
        <div className="col-span-1 w-[90vw]  mx-auto rounded-md md:w-full h-full bg-slate-50 md:mx-0   md:rounded-lg  shadow-inner flex justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.3 }}
            whileFocus={{ scale: 1.3 }}
            tabIndex={0}
          >
            <motion.img src={Img} alt="Your Image" className="mt-6  md:p-8 brightness-125" />
          </motion.div>
        </div>
        <div className="col-span-1 w-full h-full bg-transparent flex flex-col gap-10 px-10 justify-between">
          <h1 className="font-saira uppercase text-5xl font-semibold border-l-4 px-4 border-red-600">
            About us <br />
          </h1>
          <p
            className={clsx("font-kanit", {
              "text-white": mode === "dark",
              "text-black": mode === "light",
            })}
          >
            COVID-19 has been a compelling event for many organizations to
            rethink and reimagine their business models, transformation
            strategies, and customer experience. Leaders and transformation
            agents have been enduring considerable stress and anxiety over the
            last 14 months due to switching to a remote way of working—both with
            customers and with their workforce.
            <br />
            <br />
            The goal of Transformity is to help leaders and enterprises
            transform their organizations through Empathy and Technology. We
            have been working with many Global 2000 corporations to help them on
            their strategies and execution and Transformity is our approach to
            share our validated learning, experiences, strategies, and thought
            leadership.
            <br />
            <br />
            In 2022, we focused a lot on people and work-life balance. Our
            discussions on talent attraction and retention were well received,
            and they spurred several insightful and influential conversations
            with organizational leaders.
            <br />
            <br />
            In 2023, we will focus a lot on Business value and outcomes. As you
            know, we also announced that Asanka and I are collaborating on a
            book that explores business value and how organizational leaders can
            successfully achieve their outcomes through reconfiguration,
            optimization, empathy, and empowerment. We will be sharing videos
            and insights along our collaboration journey, so keep an eye out for
            that.
            <br />
            <br />
            -Asanka Abeysinghe and <br /> Dr. Gautham Pallapa
          </p>
    
        </div>
      </div>
    );
  }
  return (
    <div
      className={clsx(
        "w-full grid md:grid-cols-2 gap-10 md:p-4 min-h-[50vh] h-auto md:px-10 py-3 ",
        {
          "bg-white": mode === "light",
          "bg-black": mode === "dark",
        }
      )}
    >
      <div className="col-span-1 w-full h-full bg-transparent flex flex-col gap-10 px-10 justify-between">
        <h1 className="font-saira uppercase text-5xl font-semibold border-l-4 px-4 border-red-600">
          How did we get started <br /> in this buisness
        </h1>
        <p
          className={clsx("font-kanit", {
            "text-white": mode == "dark",
            "text-black": mode == "light",
          })}
        >
          My book launched on December 9, 2021 in both hardcover and eBook
          format, and is now available anywhere books can be purchased! Click
          the button below to purchase it. The audiobook should come out
          sometime in January 2022.
          <br />
          <br />
          A large portion of royalties received from this book will be donated
          to nonprofit organizations supporting the underprivileged,
          underrepresented minorities, and the homeless.
          <br />
          <br />
          By purchasing this book, you will make a difference in someone’s life,
          perform a randtom act of kindness, and positively impact humanity.
          Thank you for helping.
          <br />
          <br />– Dr. Gautham Pallapa
        </p>
        <Button className="rounded-full py-1 px-6 border bg-red-600 border-white text-lg font-saira font-semibold uppercase hover:bg-white hover:text-red-500 hover-border-red-500 w-fit">
          Buy now
        </Button>
      </div>
      <div className="col-span-1 md:w-full h-full w-[90%] mx-auto rounded-md bg-slate-50 md:bg-slate-50 md:rounded-lg  shadow-inner flex justify-center items-center">
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileFocus={{ scale: 1.3 }}
          tabIndex={0}
        >
          <motion.img
            src="https://i0.wp.com/transformity.info/wp-content/uploads/2021/12/pallapa_3D_01.png?resize=229%2C300&ssl=1"
            alt="Your Image"
            className="mt-6"
          />
        </motion.div>
      </div>
    </div>
  );
};

const Band = () => {
  return (
    <div
      className="w-full h-auto py-10 bg-orange-400 md:bg-orange-400 my-10 flex flex-col md:flex-row justify-around items-center relative"
      style={{
        clipPath: "ellipse(140% 100% at 50% 0%)",
      }}
    >
      {/* <div className="w-[80%] h-full inset-0 absolute bg-orange-300 opacity-40 z-20"></div> */}

      {bandData.map((data, index) => {
        return (
          <div
            key={index.toString()}
            className="justify center items-center z-30"
          >
            <h2 className="text-7xl font-semibold font-saira">{data.title}</h2>
            <p className="text-center font-saira text-lg tracking-wider text-gray-950">
              {data.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
};
const LandingPage: React.FC = () => {
  const { mode } = useModeStore();

  return (
    <div
      className={clsx("w-full pb-10 h-auto  ", {
        "bg-black": mode == "dark",
        "bg-white": mode == "light",
        "text-white": mode == "dark",
        "text-black": mode == "dark",
      })}
    >
      <div
        className={clsx("fixed top-0 left-0 w-full bg-black", {
          "bg-black": mode == "dark",
          "bg-white": mode == "light",
        })}
      >
        {/* <Carousel slides={slides} /> */}
        <Carousel2 slides={slides}/>
        <Modal value={true} />
        <Band />
        <Modal value={false} />
        <div
          className={clsx("w-full h-fit py-4", {
            "bg-white": mode == "light",
            "bg-black": mode == "dark",
          })}
        >
          <Gallery />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
