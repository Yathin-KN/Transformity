import { useEffect } from "react";
import axios from "axios";
import useUserStore from "@/store/authStore";
import { MainNav } from "@/components/custom/main_nav";
import { motion } from "framer-motion";
import Img from "./favicon.png"
const About = () => {
  const getAccessToken = useUserStore((state) => state.getAccessToken);

  const accessToken = getAccessToken();
  const fetch = async () => {
    try {
      const resp = await axios.get("http://localhost:2000/api/client/show", {
        headers: {
          Authorization: accessToken,
        },
      });
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <MainNav />
      <div className="w-full h-auto flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl p-6"
        >
          <h1 className="text-3xl font-bold mb-4">About Transformity</h1>
          <p className="text-lg mb-4 w-full">
            COVID-19 has been a compelling event for many organizations to
            rethink and reimagine their business models, transformation
            strategies, and customer experience.
          </p>
          <br />

          <p>
            The goal of Transformity is to help leaders and enterprises
            transform their organizations through Empathy and Technology. We
            have been working with many Global 2000 corporations to help them on
            their strategies and execution and Transformity is our approach to
            share our validated learning, experiences, strategies, and thought
            leadership.
          </p>
          <br />

          <p>
            In 2022, we focused a lot on people and work-life balance. Our
            discussions on talent attraction and retention were well received,
            and they spurred several insightful and influential conversations
            with organizational leaders.
          </p>
          <br />
          <p>
            In 2023, we will focus a lot on Business value and outcomes. As you
            know, we also announced that Asanka and I are collaborating on a
            book that explores business value and how organizational leaders can
            successfully achieve their outcomes through reconfiguration,
            optimization, empathy, and empowerment. We will be sharing videos
            and insights along our collaboration journey, so keep an eye out for
            that.
          </p>
        </motion.div>
        <div className="brightness-125 flex justify-center items-center bg-blue-200 w-full">
             <img src={Img} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
