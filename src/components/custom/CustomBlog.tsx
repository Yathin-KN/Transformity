import { useParams } from "react-router-dom";
import { MainNav } from "./main_nav";
import { useEffect, useState } from "react";
import BlogItemDisplay from "./blogItemDisplay";
// import getAllPosts from "@/apis/POST/getAllPosts";
import getPostById from "@/apis/POST/getPostByPostId";
import { BlogItem } from "@/lib/types";
import DummyPic from "./../../assets/dummy.png"
import Footer from "./footer";
import useModeStore from "@/store/mode";
import clsx from "clsx";
// import BlogItem from "./blogItem";
interface PostDetail {
  type: "Blog Info";
  categories:string[],
  content: {
    date: string;
    time: string;
    author: {
      name: string;
      avatarUrl: string;
    };
  };
}
const BlogCustom = () => {
  const { blogId } = useParams();
  const {mode}=useModeStore();
  const [content, setContent] = useState<BlogItem[]>([]);
  const [postDetails, setPostDetails] = useState<PostDetail>();
  const fetch = async () => {
    try {
      const resp = await getPostById(blogId || "");
      setPostDetails({
        type: "Blog Info",
        categories:resp.postDetails.categories,
        content: {
          date: resp.postDate.substring(0,10),
          time: resp.postTime,
          author: {
            name: resp.user_info.username,
            avatarUrl: resp.user_info.profilePic || DummyPic,
          },
        },
      });
      setContent(resp.content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const content = fetch();

    console.log(content);
  }, []);
  return (
    <>
      <div className={clsx({
        
          "bg-white":(mode=="light"),
           "bg-black":(mode=="dark"),
        
      })}>
      <MainNav />
      </div>
      <div className={clsx("w-full min-h-screen h-auto bg-black",{
        
        "bg-white":(mode=="light"),
         "bg-black":(mode=="dark"),
      
    })}>
      <div className="w-[94%] lg:w-[80%] mx-auto ">
        {content &&
          content.map((blogItem, index) => {
            if (blogItem !== null)
              return (
                <>
                
                  {(index === 0 && postDetails) && (
                    <BlogItemDisplay item={postDetails} key={index.toString()} />
                  )}
                  <BlogItemDisplay item={blogItem} key={index.toString()} />
                  {
                   ( index ===content.length-1) && (<div className="space-x-4 text-sm font-kanit px-3 flex flex-wrap">
                    {
                     postDetails?.categories.map((category)=>{
                       return <span className="font-saira bg-gray-400 border px-3 py-1 rounded-full text-sm">{category}</span>
                     })
                    }
                   </div>)
                  }
                </>
              );
          })
          }
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlogCustom;
