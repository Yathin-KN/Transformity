import { useParams } from "react-router-dom";
import { MainNav } from "./main_nav";
import { useEffect, useState } from "react";
import BlogItemDisplay from "./blogItemDisplay";
// import getAllPosts from "@/apis/POST/getAllPosts";
import getPostById from "@/apis/POST/getPostByPostId";
import { BlogItem } from "@/lib/types";
import DummyPic from "./../../assets/dummy.png"
import Footer from "./footer";
// import BlogItem from "./blogItem";
interface PostDetail {
  type: "Blog Info";
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
  const [content, setContent] = useState<BlogItem[]>([]);
  const [postDetails, setPostDetails] = useState<PostDetail>();
  const fetch = async () => {
    try {
      const resp = await getPostById(blogId || "");
      console.log(resp);
      setPostDetails({
        type: "Blog Info",
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
      <div className="bg-black">
      <MainNav />
      </div>
      {console.log(blogId)}
      {console.log("8888-",content)}
      <div className="w-full min-h-screen h-auto bg-black">
      <div className="w-[94%] lg:w-[80%] mx-auto ">
        {content &&
          content.map((blogItem, index) => {
            console.log("hehehehe")
            if (blogItem !== null)
              return (
                <>
                
                  {(index === 0 && postDetails) && (
                    <BlogItemDisplay item={postDetails} key={index.toString()} />
                  )}
                  <BlogItemDisplay item={blogItem} key={index.toString()} />
                </>
              );
          })}
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlogCustom;
