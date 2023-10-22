import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect, useState } from "react";
import getAllPosts from "@/apis/POST/getAllPosts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Gallery = () => {
  const [cards, setCards] = useState<any[]>([]);
  let cards1: any[] = [];
  const fetch = async () => {
    try {
      const resp = await getAllPosts();
      console.log(resp);

      resp.map((blogItem) => {
        return cards1.push(
          <Link to={`/blog/${blogItem.post_id}`} className="w-full px-6 flex">
          <motion.div
            className="cursor-pointer shadow-lg col-span-1 rounded-md pb-4 mx-6 border-none flex relative bg-black group overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative z-10 text-white w-full h-full">
              <motion.img
                className="brightness-100 hover:brightness-50 h-auto h-max-[200px] w-full object-cover"
                src={blogItem.postImage}
                alt={blogItem.postDetails.postTitle}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="text-center absolute  inset-0 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl font-bold">{blogItem.postDetails.postTitle}</p>
                <Link
                  to={`/blog/${blogItem.post_id}`}
                  className="text-sm text-white underline hover:text-[#60A5FA] hover:text-opacity-75"
                >
                  Read More
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="p-3 bg-white absolute inset-0 flex flex-col justify-between text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-nowrap pt-2">
                <p className="flex items-center gap-2 w-full justify-between">
                  <p className="flex gap-2">
                    <p className="text-xs text-gray-700">
                      {blogItem.postDate}
                    </p>
                  </p>
                </p>
              </div>
              <div className="flex flex-col justify-between h-full">
                <p className="h-[6rem] text-sm overflow-hidden font-sans text-muted-foreground">
                  {blogItem.postDetails.postDescription}
                </p>
                <p className="space-x-2"></p>
              </div>
            </motion.div>
          </motion.div>
        </Link>
        );
      });
      setCards(cards1);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  return <AliceCarousel mouseTracking items={cards} responsive={responsive} />;
};

export default Gallery;
