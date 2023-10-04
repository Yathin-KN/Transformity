import React from "react";
import { Separator } from "../ui/separator";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { BlogItemProps } from "@/lib/types";

const BlogItem: React.FC<BlogItemProps> = ({ item }) => {
  switch (item.type) {
    case "Title":
      return (
        <>
          <p
            className="outline-none text-5xl font-extrabold py-6 capitalize border-none focus:outline-none w-full pl-2 focus:border-2"
            placeholder="Enter title . . ."
          >
            {item.content}
          </p>
        </>
      );
    case "Subtitle":
      return (
        <h2
          className="w-full text-2xl text-gray-800 font-extrabold py-2 focus:outline-none pl-2 focus:border-l-2 border-gray-400"
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
              className="text-md w-full border-transparent border-l-2 focus:outline-none resize-none focus:border-l-2 focus:border-gray-400 pl-2 h-auto py-4"
              draggable={false}
            >
              {item.content}
            </p>
          </div>
        </>
      );
    case "Blog Info":
      return (
        <>
          <Separator className="mb-4" />
          <div className="py-3 w-full">
            <div className="flex gap-6">
              <Avatar>
                <AvatarImage
                  src={
                    (item.content.author && item.content.author.avatarUrl) || ""
                  }
                  className="w-10 h-10 rounded-full"
                />
              </Avatar>
              <div>
                <p className="text-md text-black">
                  {(item.content.author && item.content.author.name) || ""}
                </p>
                <p className="text-xs text-gray-600">{item.content.date}</p>
              </div>
            </div>
          </div>
          <Separator className="my-4" />
        </>
      );
    case "Image":
      return (
        <div className="w-full flex  flex-col justify-center">
          <div className="flex flex-col w-full">
            <img
              src={item.content.imageUrl || ""}
              alt={item.content.imageCaption}
              className="object-fit max-w-[70%] mx-auto"
            />
            <p className="text-sm text-gray-600 hover:underline text-center py-2 underline-offset-2 focus:outline-none">
              {item.content.imageCaption || "Enter image caption"}
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
            <p className="text-sm text-gray-600 hover:underline text-center py-2 underline-offset-2 focus:outline-none">
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
