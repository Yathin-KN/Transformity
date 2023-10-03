import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Card } from "../ui/card";
import {  useEffect, useState } from "react";
import getAllPosts from "@/apis/POST/getAllPosts";

// const handleDragStart = (e: any) => e.preventDefault();
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Gallery = () => {
  const [cards,setCards]=useState<any[]>([])
  let cards1: any[]=[]
  const fetch = async () => {
    try {
      const resp = await getAllPosts();
      console.log(resp);

      resp.map((blogItem)=>{
        return cards1.push(<Card className="overflow-hidden cursor-pointer shadow-lg  col-span-1 rounded-md pb-4 max-w-[25vw]">
          <img
            className="brightness-100 hover:brightness-50"
            src={blogItem.postImage}
          ></img>
          <div className="p-3">
            <div className="flex flex-nowrap pt-2">
              <p className="flex items-center gap-2 w-full justify-between">
                <p className="flex gap-2">
                  <p className="text-xs text-gray-700">
                    {blogItem.postDate}
                  </p>
                </p>
              </p>
            </div>
            <p className="font-bold text-lg capitalize py-2">{blogItem.postDetails.postTitle}</p>
            <div className="flex flex-col justify-between h-full">
              <p className="h-[6rem] text-sm overflow-hidden font-sans text-muted-foreground">
                {blogItem.postDetails.postDescription}
              </p>
              <p className="space-x-2"></p>
            </div>
          </div>
        </Card>);
      })
      setCards(cards1)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <AliceCarousel mouseTracking items={cards} responsive={responsive} />
  );
};

export default Gallery;
