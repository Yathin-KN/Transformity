import { motion } from "framer-motion";
import { CalendarClock, MoveRightIcon, User } from "lucide-react";
import { Link } from "react-router-dom";

const Tab = ({ category }: { category: string }) => {
  return (
    <span className=" border rounded-full bg-indigo-500 border-white text-xs font-saira tracking-normal text-white py-1 px-2 h-fit w-fit">
      {category}
    </span>
  );
};


function limitDescription(description: string, maxWords: number): string {
  const words = description.split(' ');
  const truncatedDescription = words.slice(0, maxWords).join(' ');
  return truncatedDescription;
}

const BlogCard = ({
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
        className="w-full relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "320px",
        }}
      >
        <Link to={`/blog/${id}`} className="text-md font-saira bg-gray-950 py-1 px-2 rounded-sm tracking-wide flex items-center gap-2 hover:underline underline-offset-4 absolute bottom-4 right-4">
          Continue reading <MoveRightIcon size={18} />
        </Link>
      </div>
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
          {limitDescription(description,20)+' ...'}
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

export default BlogCard;
