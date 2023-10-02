import { useEffect, useState } from "react";
import { MainNav } from "./main_nav";
import { Button } from "../ui/button";
import { Inp } from "./inp";
import Paragraph from "./Paragraph";
import Heading from "./heading";
import useBlogStore from "@/store/blog";
import ImageComponent from "./imageComponent";
import VideoComponent from "./vedioComponent";
import { Badge } from "../ui/badge";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PublishDialog from "./publishDialog";
import { faker } from "@faker-js/faker";
import PTSetPost from "./../../apis/POST/addPost"
// const buttonNames:string[] = ['title', 'paragraph', 'subtitle', 'image', 'video', 'ttle'];

// const userInfo = {
//   user_name: "Yathin",
//   user_id: "123456890089",
// };

const Write = () => {
  const [compoenent, setComponenet] = useState<any[]>([]);
  const [length, setLength] = useState<number>(0);
  const { blogItems, removeLastBlogItem } = useBlogStore();
  const [post, setPost] = useState({
    postTitle:"",
    postDescription:"",
    categories:faker.word.words().split(" ")
  });

  const handlePostChange=(key:string,value:string)=>{
     setPost((prev:any)=>{
        return {...prev,[key]:value}
     })
  }
  useEffect(() => {
    console.log(blogItems);
  }, [blogItems]);
  const handleClick = (btn: any) => {
    if (btn.target.name === "title") {
      setComponenet((prev: any) => {
        return [...prev, <Inp index={length} />];
      });
    } else if (btn.target.name === "paragraph") {
      setComponenet((prev: any) => {
        return [...prev, <Paragraph index={length} />];
      });
    } else if (btn.target.name === "subtitle") {
      setComponenet((prev: any) => {
        return [...prev, <Heading index={length} />];
      });
    } else if (btn.target.name === "image") {
      setComponenet((prev: any) => {
        return [...prev, <ImageComponent index={length} />];
      });
    } else if (btn.target.name === "video") {
      setComponenet((prev: any) => {
        return [...prev, <VideoComponent index={length} />];
      });
    } else if (btn.target.name === "save") {
      console.log(blogItems);
    } else {
      setComponenet((prev: any) => prev.slice(0, -1));
      removeLastBlogItem();
    }
  };
  
  const handleSubmit=async()=>{
     try{
      const response=await PTSetPost({
        postDetails:post,
        user_id:faker.string.uuid(),
        content:blogItems
      })
      console.log(response)
     }catch(error){
      console.log("error : ",error)
     }
  }
  useEffect(() => {
    setLength(() => {
      let len = compoenent.length;
      return len;
    });
  }, [compoenent]);
  return (
    <>
      <MainNav />
      <div className="w-full h-screen bg-slate-200 flex justify-center">
        <div className="w-[80%] h-full bg-white px-10 py-10 flex flex-col relative">
          <AlertDialog>
            <AlertDialogTrigger>
            <Badge className="absolute top-4 right-4 text-sm" variant="publish">
            Publish
          </Badge>
            </AlertDialogTrigger>
            <AlertDialogContent>
            <div className="flex justify-end">
            <AlertDialogCancel className="w-6 h-6 rounded-full border-none shadow-none p-2 bg-slate-200 float-right">X</AlertDialogCancel>
            </div>
              <PublishDialog handler={handlePostChange} details={post}/>
              <AlertDialogFooter>
                <Button onClick={handleSubmit} type="submit">
                  Publish
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

         
          {compoenent &&
            compoenent.map((comp: any) => {
              return comp;
            })}
          <div className="flex gap-4">
            <Button
              onClick={handleClick}
              className="bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500"
              name="title"
            >
              +
            </Button>
            <Button
              onClick={handleClick}
              className="bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500"
              name="paragraph"
            >
              +
            </Button>
            <Button
              onClick={handleClick}
              className="bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500"
              name="subtitle"
            >
              +
            </Button>
            <Button
              onClick={handleClick}
              className="bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500"
              name="image"
            >
              i
            </Button>
            <Button
              onClick={handleClick}
              className="bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500"
              name="video"
            >
              v
            </Button>
            <Button
              onClick={handleClick}
              className="bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500"
              name="save"
            >
              s
            </Button>
            <Button
              onClick={handleClick}
              className="bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500"
              name="ttle"
            >
              -
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
