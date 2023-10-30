import Footer from "@/components/custom/footer";
import { MainNav } from "@/components/custom/main_nav";
import { motion } from "framer-motion";
import { CalendarClock, MoveRightIcon, Play, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllPodcasts from "@/apis/POST/getAllPodcasts";
import { PodcastData } from "@/lib/types";
import useUserStore from "@/store/authStore";
import deletPodcast from "@/apis/POST/deletePodcast"
import { toast } from "react-toastify";
import clsx from "clsx";
import useModeStore from "@/store/mode";
// const podCastData = [
//   {
//     category: "Motivational",
//     description:
//       "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
//     image:
//       "https://open.spotify.com/embed/episode/5QYeXrAviv0jDT1YaCyD2y?utm_source=generator",
//     link: "https://example.com/motivational_quote_1",
//   },
//   {
//     category: "Joe biden",
//     description:
//       "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
//     image: "https://www.youtube.com/embed/p3fwj3PBORU?si=J-kOMKZpKh8SUSJc",
//     link: "https://example.com/motivational_quote_1",
//   },

// ];

const PodcastCard = ({
  category,
  description,
  image,
  link,
  reverse,
  userId,
  postId,
}: {
  category: string;
  description: string;
  image: string;
  link: string;
  reverse: boolean;
  userId: string;
  postId: string;
}) => {
  console.log(link);
  const user_info = useUserStore(state=>state.getUserInfo)
  const {user_id} = user_info();

  const deletePodcast=async ()=>{
    try{
      const resp=await deletPodcast(postId)
      console.log(resp.ok)
      toast.success("Sucessfully deleted",{
        delay:1000
      })
    }catch(error){
      toast.error("Something went wrong !!",{
        delay:1000,
      })
    }
  }
  const {mode}=useModeStore();
  return (
    <div
      className="border border-x-0 border-t-0 border-dashed pb-2 border-gray-500 flex w-full flex-col md:flex-row flex-wrap md:flex-nowrap "
      style={{
        flexDirection: reverse ? "row" : "row-reverse",
        backgroundColor:mode==="dark"?"black":"white"
      }}
    >
      <div className="px-1 md:px-6 py-4 flex items-center relative z-0  md:w-[40%] ">
        {/* <img src={image} className="relative w-full h-full object-cover">
       </img> */}
        <div className="flex justify-center items-center  w-full">
          <iframe
            className="h-[200px] w-full md:h-[352px] mt-10 md:mt-0 "
            src={image}
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div
          className="p-2 md:w-16 md:h-16 bg-red-500 absolute z-10 left-[-1rem] md:left-0 rounded-full flex justify-center items-center"
          style={{
            backgroundColor: reverse ? "rgb(239 68 68)" : "white",
          }}
        >
          <Play
            size={32}
            className="text-white"
            style={{
              color: reverse ? "white" : "rgb(239 68 68)",
            }}
          />
        </div>
      </div>
      <div className="py-4 px-4   w-full md:px-10">
        <div className="w-full flex justify-between items-center">
          <h1 className={clsx("md:text-2xl font-saira  py-4 uppercase tracking-widest",{
            "text-white":(mode=="dark"),
             "text-black":(mode=="light"),
          })}>
            {category}
          </h1>
         {(userId === user_id ) && <div onClick={()=>deletePodcast()} className={clsx("text-xs text-white py-1 px-3 rounded-sm bg-red-600 font-bold bg-opacity-80 border border-white")}>
            Delete
          </div>}
        </div>
        <p className={clsx("md:text-3xl font-poppins tracking-wider ",{
            "text-white":(mode=="dark"),
             "text-black":(mode=="light"),
          })}>
          {description}
        </p>
      </div>
    </div>
  );
};
// const cardData = [
//   {
//     title: "Painkillers vs Vitamins",
//     author: "Asanka Abeysinghe",
//     date: "October 17, 2022",
//     categories: ["Leadership"],
//     description:
//       " we focused a lot on people and work-life balance. Our discussions on talent attraction and retention were well received, and they spurred several insightful and influential conversations…",
//     image:
//       "https://i0.wp.com/transformity.info/wp-content/uploads/2022/10/Painkillers_Vs_Vitamins_.png?fit=768%2C534&ssl=1",
//     id:"1"
//   },
//   {
//     title: "Painkillers vs Vitamins",
//     author: "Asanka Abeysinghe",
//     date: "October 17, 2022",
//     categories: ["Leadership"],
//     description:
//       " we focused a lot on people and work-life balance. Our discussions on talent attraction and retention were well received, and they spurred several insightful and influential conversations…",
//     image:
//       "https://i0.wp.com/transformity.info/wp-content/uploads/2022/10/Painkillers_Vs_Vitamins_.png?fit=768%2C534&ssl=1",
//     id:"1"
//   },
//   {
//     title: "Painkillers vs Vitamins",
//     author: "Asanka Abeysinghe",
//     date: "October 17, 2022",
//     categories: ["Leadership"],
//     description:
//       " we focused a lot on people and work-life balance. Our discussions on talent attraction and retention were well received, and they spurred several insightful and influential conversations…",
//     image:
//       "https://i0.wp.com/transformity.info/wp-content/uploads/2022/10/Painkillers_Vs_Vitamins_.png?fit=768%2C534&ssl=1",
//     id:"1"
//   },
//   {
//     title: "Painkillers vs Vitamins",
//     author: "Asanka Abeysinghe",
//     date: "October 17, 2022",
//     categories: ["Leadership"],
//     description:
//       " we focused a lot on people and work-life balance. Our discussions on talent attraction and retention were well received, and they spurred several insightful and influential conversations…",
//     image:
//       "https://i0.wp.com/transformity.info/wp-content/uploads/2022/10/Painkillers_Vs_Vitamins_.png?fit=768%2C534&ssl=1",
//     id:"1"
//   },
//   {
//     title: "Painkillers vs Vitamins",
//     author: "Asanka Abeysinghe",
//     date: "October 17, 2022",
//     categories: ["Leadership"],
//     description:
//       " we focused a lot on people and work-life balance. Our discussions on talent attraction and retention were well received, and they spurred several insightful and influential conversations…",
//     image:
//       "https://i0.wp.com/transformity.info/wp-content/uploads/2022/10/Painkillers_Vs_Vitamins_.png?fit=768%2C534&ssl=1",
//     id:"1"
//   },

// ];

const Tab = ({ category }: { category: string }) => {
  return (
    <span className=" border rounded-full bg-indigo-500 border-white text-xs font-saira tracking-normal text-white py-1 px-2 h-fit w-fit">
      {category}
    </span>
  );
};
export const Card = ({
  title,
  description,
  image,
  author,
  date,
  categories,
  id,
}: {
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  categories: string[];
  id: string;
}) => {
  return (
    <motion.div
      className="rounded-md overflow-hidden relative z-0 w-full md:w-[50vh] lg:w-[30vw]"
      style={{
        height: "auto",
      }}
    >
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "320px",
        }}
      ></div>
      <div className="bg-indigo-600 p-4">
        <div className="flex justify-between">
          <div className="w-full">
            <Link
              to={`/blog/${id}`}
              className="font-saira text-xl font-semibold tracking-wide flex items-center justify-between w-full  text-white"
            >
              <p className="font-saira text-xl font-semibold tracking-wide text-white">
                {title}
              </p>
              <p className="text-sm font-saira tracking-wide flex items-center gap-2 hover:underline underline-offset-4">
                Continue reading <MoveRightIcon size={18} />
              </p>
            </Link>
            <div className="flex w-full  gap-1 flex-col flex-nowrap py-1">
              <p className="font-saira text-md   tracking-wide text-white flex items-center gap-2">
                <User size={18} />
                {author}
              </p>
              <p className="font-saira text-md  tracking-wide text-white flex items-center  gap-2">
                <CalendarClock size={18} />
                {date}
              </p>
            </div>
          </div>
        </div>
        <p className="font-saira tracking-normal text-white text-md">
          {description}
        </p>
        <div className="flex flex-wrap space-x-2 my-2">
          {categories.map((category, index) => {
            return <Tab category={category} key={index.toString()} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};
const Podcast = () => {
  const [podCastData, setPodCastData] = useState<PodcastData[]>([]);
  // const [IsLoading,setIsLoading]=useState<boolean>(false);
  useEffect(() => {
    const getAllPodcasts1 = async () => {
      try {
        // setIsLoading(true)
        const response = await getAllPodcasts();
        console.log(response);
        setPodCastData(response);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      } finally {
      }
    };

    getAllPodcasts1();
  }, []);
 const {mode}=useModeStore();
  return (
    <div className={clsx(" w-full",{
      "bg-white":(mode=="light"),
         "bg-black":(mode=="dark"),
    })}>
      <div className={clsx({
      "bg-white":(mode=="light"),
         "bg-black":(mode=="dark"),
    })}>
        <MainNav />
      </div>
      <div className={clsx("w-full flex justify-center py-10   md:py-10 overflow-hidden  ",{
         "text-black":(mode=="light"),
         "text-white":(mode=="dark"),
      })}>
          <motion.p
            className="text-xl md:text-[9rem] flex justify-center relative items-center w-full h-auto md:py-10 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="opacity-20 md:opacity-10 tracking-tighter md:tracking-[1.3rem] text-center py-3 mx-4 font-island normal-case text-[8rem] md:text-[17rem]">
              Transformity
            </p>
            <motion.p
              className="text-3xl md:text-7xl absolute uppercase tracking-[0.5rem]  md:tracking-[1.5rem] font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, spacing: 2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
             
              BLOGS
            </motion.p>
          </motion.p>
        </div>
      <div className={clsx("w-full min-h-screen  h-auto p-4 md:px-10",{
        "bg-white":(mode=="light"),
        "bg-black":(mode=="dark"),
      })}>
        <div className="w-full flex  flex-wrap md:gap-10  h-auto justify-center items-center bg-black">
          {podCastData.map((card, index) => {
            return (
              <PodcastCard
                category={card.category}
                key={index.toString()}
                description={card.description}
                image={card.image}
                link={card.link}
                reverse={index % 2 == 0}
                userId={card.userId}
                postId={card.podcastId || ""}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Podcast;
