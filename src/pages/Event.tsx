import { useParams } from "react-router-dom";
import { MainNav } from "./../components/custom/main_nav";
import { useEffect, useState } from "react";
import BlogItemDisplay from "./../components/custom/blogItemDisplay";
// import getAllPosts from "@/apis/POST/getAllPosts";
import getPostById from "@/apis/POST/getPostByPostId";
import { BlogItem } from "@/lib/types";
import { faker } from "@faker-js/faker";
// import BlogItem from "./blogItem";
interface PostDetail {
  type: "Event_Info";
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
      const resp = await getPostById("54b364ff-1bec-4f2a-ac08-6b26a16c27a5" || "");
      console.log(resp);
      setPostDetails({
        type: "Event_Info",
        content: {
          date: resp.postDate.substring(0,10),
          time: resp.postTime,
          author: {
            name: resp.user_info.username,
            avatarUrl: faker.image.avatar(),
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
      <MainNav />
      {console.log(blogId)}
      <div className="w-full lg:w-[80%] grid grid-cols-4 justify-center">
      <div className="w-full lg:w-full  mx-auto col-span-3 px-6">
        {content &&
          content.map((blogItem, index) => {
            if (blogItem !== null)
              return (
                <>
                  <BlogItemDisplay item={blogItem} key={index.toString()} />
                </>
              );
          })}
      </div>
      <div className="col-span-1">
        {postDetails  && <BlogItemDisplay item={postDetails}/> }
      </div>
      </div>
    </>
  );
};

export default BlogCustom;
