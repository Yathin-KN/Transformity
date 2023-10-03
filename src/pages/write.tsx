import { useEffect, useState } from "react";
import { MainNav } from "../components/custom/main_nav";
import { Button } from "../components/ui/button";
import { Inp } from "../components/custom/inp";
import Paragraph from "../components/custom/Paragraph";
import Heading from "../components/custom/heading";
import useBlogStore from "@/store/blog";
import ImageComponent from "../components/custom/imageComponent";
import VideoComponent from "../components/custom/vedioComponent";
import { Badge } from "../components/ui/badge";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PublishDialog from "../components/custom/publishDialog";
import { faker } from "@faker-js/faker";
import PTSetPost from "../apis/POST/addPost";
import {
  AlignJustify,
  HeadingIcon,
  ImageIcon,
  PlaySquare,
  Save,
  Type,
  XSquare,
} from "lucide-react";
import useUserStore from "@/store/authStore";

const Write = () => {
  const [compoenent, setComponenet] = useState<any[]>([]);
  const [length, setLength] = useState<number>(0);
  const { blogItems, removeLastBlogItem } = useBlogStore();
  const getUserInfo = useUserStore((state) => state.getUserInfo);
  const {user_id}=getUserInfo();
  const [post, setPost] = useState({
    postTitle: "",
    postDescription: "",
    categories: faker.word.words().split(" "),
  });

  const handlePostChange = (key: string, value: string) => {
    setPost((prev: any) => {
      return { ...prev, [key]: value };
    });
  };
  useEffect(() => {
    console.log(blogItems);
  }, [blogItems]);
  const handleClick = (name: string) => {
    if (name === "title") {
      setComponenet((prev: any) => {
        return [...prev, <Inp index={length} />];
      });
    } else if (name === "paragraph") {
      setComponenet((prev: any) => {
        return [...prev, <Paragraph index={length} />];
      });
    } else if (name === "subtitle") {
      setComponenet((prev: any) => {
        return [...prev, <Heading index={length} />];
      });
    } else if (name === "image") {
      setComponenet((prev: any) => {
        return [...prev, <ImageComponent index={length} />];
      });
    } else if (name === "video") {
      setComponenet((prev: any) => {
        return [...prev, <VideoComponent index={length} />];
      });
    } else if (name === "save") {
      console.log(blogItems);
    } else {
      setComponenet((prev: any) => prev.slice(0, -1));
      removeLastBlogItem();
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await PTSetPost({
        postDetails: post,
        user_id: user_id,
        content: blogItems,
      });
      console.log(response);
    } catch (error) {
      console.log("error : ", error);
    }
  };
  useEffect(() => {
    setLength(() => {
      let len = compoenent.length;
      return len;
    });
  }, [compoenent]);
  return (
    <>
      <MainNav />
      <div className="w-full h-auto bg-slate-200 flex justify-center">
        <div className="md:w-[80%] w-[95%] h-auto min-h-[100vh] bg-white md:px-10 py-10 mt-[50px] mb-[100px] flex flex-col relative">
          <AlertDialog>
            <AlertDialogTrigger>
              <Badge
                className="absolute top-4 right-4 text-sm"
                variant="publish"
              >
                Publish
              </Badge>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <div className="flex justify-end">
                <AlertDialogCancel>
                  X
                </AlertDialogCancel>
              </div>
              <PublishDialog handler={handlePostChange} details={post} />
              <AlertDialogFooter>
                <Button onClick={handleSubmit} type="submit">
                  Publish
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <div>
          {compoenent &&
            compoenent.map((comp: any) => {
              return comp;
            })}
            
          </div>
          
          <div className="sm:hidden fixed bottom-0 left-0 w-full py-3 bg-white flex justify-evenly md:flex md:justify-around items-center">
            <Button
              onClick={() => handleClick("title")}
              className="border-none shadow-none p-2"
              name="title"
              variant="outline"
            >
              <Type
                size={28}
                strokeWidth={1}
              />
            </Button>
            <Button
              onClick={() => handleClick("paragraph")}
              className="border-none shadow-none p-2"
              name="paragraph"
              variant="outline"
            >
              <AlignJustify size={28} strokeWidth={1} />
            </Button>
            <Button
              onClick={() => handleClick("subtitle")}
              name="subtitle"
              className="border-none shadow-none p-2"
              variant="outline"
            >
              <HeadingIcon size={28} strokeWidth={1} />
            </Button>
            <Button
              onClick={() => handleClick("image")}
              className="border-none shadow-none m-0 w-auto h-auto p-2"
              name="image"
              variant="outline"
            >
              <ImageIcon strokeWidth={1} size={28} />
            </Button>
            <Button
              onClick={() => handleClick("video")}
              className="border-none shadow-none p-2"
              name="video"
              variant="outline"
            >
              <PlaySquare size={28} strokeWidth={1} />
            </Button>
            <Button
              onClick={() => handleClick("save")}
              className="border-none shadow-none p-2"
              name="save"
              variant="outline"
            >
              <Save size={28} strokeWidth={1} />
            </Button>
            <Button
              onClick={() => handleClick("subtitl")}
              name="ttle"
              className="border-none shadow-none p-2"
              variant="outline"
            >
              <XSquare size={28} strokeWidth={1} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
