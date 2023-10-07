import React from "react";
import { Separator } from "../ui/separator";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { BlogItemProps } from "@/lib/types";

const BlogItem: React.FC<BlogItemProps> = ({ item, handlers }) => {
  switch (item.type) {
    case "Title":
      return (
        <>
          {console.log("---",item.content)}
          <p
            className="outline-none text-4xl text-gray-800 font-extrabold  capitalize border-none focus:outline-none w-full pl-2 focus:border-2 hover:bg-gray-100 py-4"
            placeholder="Enter title . . ."
            contentEditable={true}
            onBlur={(e) => handlers?.onChangeHandler(e)}
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </>
      );
    case "Subtitle":
      return (
        <h2
          className="w-full text-2xl text-gray-800 font-extrabold focus:outline-none pl-2 focus:border-l-2 border-gray-400 hover:bg-gray-100 py-4"
          placeholder="Enter heading"
          contentEditable={true}
          onBlur={(e) => handlers?.onChangeHandler(e.target.innerText)}
        >
          {item.content}
        </h2>
      );
    case "Description":
      return (
        <>
          <div className="flex w-full hover:bg-gray-100 py-4">
            <p
              className="text-md w-full border-transparent border-l-2 focus:outline-none resize-none focus:border-l-2 focus:border-gray-400 pl-2 h-auto"
              draggable={false}
              contentEditable={true}
              onBlur={(e) => handlers?.onChangeHandler(e)}
              dangerouslySetInnerHTML={{ __html: item.content }}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </div>
        </>
      );
    case "Blog Info":
      return (
        <>
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
        <div className="w-full flex  flex-col justify-center hover:bg-gray-100 py-4">
          <div className="flex flex-col w-full">
            <img
              src={item.content.imageUrl || ""}
              alt={item.content.imageCaption}
              className="object-fit max-w-[70%] mx-auto"
            />
            <input
              className="outline-none text-sm py-2 text-center border-none focus:outline-none w-full pl-2 focus:border-2"
              accept="image/*"
              type="file"
              placeholder="Enter a valid image url"
              onChange={(e) => {
                handlers?.onFileUpload && handlers.onFileUpload(e);
              }}
            ></input>

            <p
              className="text-sm text-gray-600 hover:underline text-center py-2 underline-offset-2 focus:outline-none"
              contentEditable={true}
              onBlur={(e) => handlers?.onChangeHandler(e.target.innerText)}
            >
              {item.content.imageCaption || "Enter image caption"}
            </p>
          </div>
        </div>
      );
    case "Video":
      return (
        <div className="w-full flex justify-center py-6 hover:bg-gray-100">
          <div className="flex flex-col gap-3 justify-between items-center">
            <video controls className="bg-gray-700 w-[80%] h-auto">
              <source
                src={`${item.content.videoUrl}` || ""}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <input
              className="outline-none text-sm  text-center border-none focus:outline-none w-full focus:border-2"
              type="file"
              accept="video/*"
              onChange={(e) => {
                handlers?.onFileUpload && handlers.onFileUpload(e);
              }}
            ></input>
            <p
              className="text-sm text-gray-600 hover:underline text-center  underline-offset-2 focus:outline-none"
              contentEditable={true}
              onBlur={(e) => handlers?.onChangeHandler(e.target.innerText)}
            >
              {item.content.videoCaption || "Enter video caption"}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default BlogItem;
