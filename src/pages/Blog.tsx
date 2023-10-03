import { MainNav } from "@/components/custom/main_nav";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { generateDummyPosts } from "@/lib/data";
import { Post } from "@/lib/types";
import { useEffect, useState } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
import getAllPosts from "@/apis/POST/getAllPosts";
// type ColourMap = {
//   [key: string]: string;
// };

// const colour: ColourMap = {
//   "1": "#f24933",
//   "2": "#fa902d",
//   "3": "#fae034",
//   "4": "#66ed51",
// };

// function randomInteger(): number {
//   return Math.floor(Math.random() * 4) + 1;
// }

function randomCategories():string[]{
  const categories:string[]=[]
  for(let i=0;i<7;i++){
    categories.push(faker.word.sample({
      length:{
        min:5,
        max:10
      }
    }))
  }
  return categories;
}
const Blog = () => {
  const [blog, setBlog] = useState<Post[]>();
  const [filteredblogs, setFilteredBlogs] = useState<Post[]>();
  const [category, setCategory] = useState<string>("");
  const [categories,setCategories]=useState<string[]>([])

  const fetch=async()=>{
    try{ 
       const resp=await getAllPosts();
       console.log(resp)
       setBlog(resp)
       setFilteredBlogs(resp)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    fetch();
    setCategories(()=>{
      return randomCategories();
    })
  }, []);

  useEffect(() => {
    setFilteredBlogs(blog);
  }, [blog]);

  const filter = (category: string) => {
    if (category.trim() !== "") {
      const filteredBlogs = blog?.filter((post) =>{
        console.log(post.postDetails.postTitle,category,post.postDetails.postTitle.startsWith(category))
        return post.postDetails.postTitle.toLowerCase().startsWith(category.toLowerCase())
      }
      );
      setFilteredBlogs(filteredBlogs);
    } else {
      setFilteredBlogs(blog);
    }
  };

  const handleChange = (value: string) => {
    setCategory(value);
  };

  useEffect(() => {
    filter(category);
  }, [category]);

  return (
    <>
      <MainNav className="bg-white" />
      <div className="w-screen h-screen flex flex-col box-border">
        <div className="flex flex-col-reverse md:grid md:grid-cols-4 w-max-full">
          <div className="w-full flex flex-col-reverse md:justify-start   md:col-span-3">
            <div className="w-full h-full grid md:grid-cols-3 gap-3 p-4 ">
              {filteredblogs &&
                filteredblogs.map((post, index) => {
                  return (
                    <Card
                      key={index.toString()}
                      className="overflow-hidden cursor-pointer shadow-lg  col-span-1 rounded-md"
                    >
                      <img
                        className="brightness-100 hover:brightness-50 h-[200px]  w-full object-cover"
                        src={
                          post.postImage
                        }
                      ></img>

                      <div className="p-3">
                        
                        <div className="flex flex-nowrap pt-2">
                          <Avatar className="h-6 w-6 mr-3">
                          {/* <AvatarImage src={post.user_info.profilePic || faker.image.avatar()} /> */}
                          <AvatarImage src={faker.image.avatar()} />
                          </Avatar>
                          <p className="flex items-center gap-2 w-full justify-between">
                            <p className="flex gap-2 flex-nowrap justify-between">
                              <p className="text-sm text-blue-700 font-light">
                                {post.user_info.username}
                              </p>
                            </p>

                            <p className="flex gap-2">
                              <p className="text-xs text-gray-700">
                                {post.postDate.substring(0,10)}
                              </p>
                              <p className="text-xs text-gray-700">
                                {post.postTime}
                              </p>
                            </p>
                          </p>
                        </div>
                        <p className="font-bold text-lg capitalize py-2">
                          {post.postDetails.postTitle}
                        </p>
                        <div className="flex flex-col justify-between h-full">
                          <p className="h-[6rem] text-sm overflow-hidden font-sans text-muted-foreground">
                            {post.postDetails.postDescription}
                          </p>
                          <p className="space-x-2">
                          {post.postDetails.categories.map((category, index) => {
                            return (
                              <Badge
                                key={index.toString()}
                                variant="outline"
                                className="rounded-full font-chivo my-3 text-black capitalize bg-gray-200 shadow-inner font-light"
                              >
                                {category}
                              </Badge>
                            );
                          })}
                        </p>
                          <animated.div className="flex gap-2 items-center">
                            <Link to={`/blog/${post.post_id}`}>
                              <ArrowTopRightIcon className="text-3xl font-semibold w-6 h-6 cursor-pointer hover:bg-gray-100 m-2 rounded-md" />
                            </Link>
                            <p className="text-muted-foreground text-sm text-black ">
                              Read more ...
                            </p>
                          </animated.div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
            </div>
          </div>
          <div className="h-full col-span-1 p-4 py-6  border-gray-300 border-l-[1px] flex flex-col">
          <Input
            className="w-[90%] mx-auto shadow-none rounded-full bg-gray-100 border-none "
            placeholder="Search by category ...."
            onChange={(event) => {
              handleChange(event.target.value);
            }}
            value={category}
          />
          <Separator className="my-6"/>
          <h3 className="text-gray-800 font-semibold font-sans">Recommended Topics</h3>
          <div className="justify-start">
            {
              categories && categories.map((category,index)=>{
                return  <Badge
                key={index.toString()}
                variant="outline"
                className="rounded-full font-poppins my-1 text-black capitalize bg-gray-100  border-none font-light py-3 px-6 mx-2"
              >
                {category}
              </Badge>
              })
            }
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
