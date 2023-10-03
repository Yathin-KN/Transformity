import { useParams } from "react-router-dom";
import { MainNav } from "./main_nav";
import { useEffect, useState } from "react";
import BlogItemDisplay from "./blogItemDisplay";
// import getAllPosts from "@/apis/POST/getAllPosts";
import getPostById from "@/apis/POST/getPostByPostId";
import { BlogItem } from "@/lib/types";
import { faker } from "@faker-js/faker";
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
      <div className="w-full lg:w-[80%]  mx-auto">
        {content &&
          content.map((blogItem, index) => {
            if (blogItem !== null)
              return (
                <>
                  {(index === 1 && postDetails) && (
                    <BlogItemDisplay item={postDetails} key={index.toString()} />
                  )}
                  <BlogItemDisplay item={blogItem} key={index.toString()} />
                </>
              );
          })}
      </div>
    </>
  );
};

export default BlogCustom;
