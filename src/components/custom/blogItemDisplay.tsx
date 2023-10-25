import React from "react";
import { Separator } from "../ui/separator";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { BlogItemProps } from "@/lib/types";

const BlogItem: React.FC<BlogItemProps> = ({ item }) => {
  console.log(item)
  switch (item.type) {
    case "Title":
      return (
        <>
          <p
            className="outline-none font-saira text-white text-3xl md:text-4xl font-extrabold py-6 capitalize border-none focus:outline-none w-full pl-2 focus:border-2"
            placeholder="Enter title . . ."
          >
            {item.content}
          </p>
        </>
      );
    case "Subtitle":
      return (
        <h2
          className="w-full text-3xl font-saira text-white py-2 focus:outline-none pl-2 focus:border-l-2 border-gray-400"
          placeholder="Enter heading"
        >
          
          {item.content}
        </h2>
      );
    case "Description":
      return (
        <>
          <div className="flex w-full">
            <p
              className="text-lg md:text-lg font-light w-full font-saira text-white border-transparent border-l-2 focus:outline-none resize-none focus:border-l-2 focus:border-gray-400 pl-2 h-auto py-4"
              draggable={false}
              style={{ whiteSpace: 'pre-wrap' }}
            >
              {item.content}
            </p>
          </div>
        </>
      );
    case "Blog Info":
      console.log("hello from blog")
      return (
        <>
          <Separator className="md:mb-4" />
          <div className="py-3 w-full px-4 md:px-0">
            <div className="flex gap-6">
              <Avatar>
                <AvatarImage
                  src={
                    (item.content.author && item.content.author.avatarUrl) || ""
                  }
                  className="w-10 h-10 rounded-full aspect-square"
                />
              </Avatar>
              <div className="flex justify-between  w-full">
                <div>
                <p className="text-md font-saira text-white uppercase flex">
                  <p className="text-md font-saira text-gray-500 uppercase ">Author :</p>
                 <p className="text-md font-saira text-white uppercase ml-1"> {" "+(item.content.author && item.content.author.name) || ""}</p>
                </p>
                <p className="text-xs font-saira text-white flex">
                  <p className="text-md font-saira text-gray-500 uppercase">Date :</p>
                  <p className="text-md font-saira text-white uppercase">{item.content.date}</p>
                </p>
                </div>
                <div className="text-white">
                  <p className="flex">
                    <p className="text-md font-saira text-gray-500 uppercase">
                     Time :
                    </p>
                    <p className="text-md font-saira text-white uppercase">
                      {item.content.time}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Separator className="md:my-4" />
        </>
      );
    case "Image":
      return (
        <div className="w-full flex flex-col justify-center py-3 ">
          <div className="flex flex-col w-full">
            <img
              src={item.content.imageUrl || ""}
              alt={item.content.imageCaption}
              className="object-fit w-full md:max-w-[70%] mx-auto px-2"
            />
            <p className="text-sm font-saira text-white hover:underline text-center py-2 underline-offset-2 focus:outline-none">
              {item.content.imageCaption || ""}
            </p>
          </div>
        </div>
      );
    case "Video":
      return (
        <div className="w-full flex justify-center py-6">
          <div className="flex flex-col gap-3 justify-between items-center">
            <video controls className="bg-gray-700 w-[80%] h-auto">
              <source
                src={item.content.videoUrl || ""}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <p className="text-sm font-saira text-white hover:underline text-center py-2 underline-offset-2 focus:outline-none">
              {item.content.videoCaption}
            </p>
          </div>
        </div>
      );
    case "Event_Info":
      return <div></div>;
    default:
      return null; // Handle unknown type
  }
};

export default BlogItem;
