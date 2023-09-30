import { MainNav } from "@/components/custom/main_nav";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { generateDummyPosts } from "@/lib/data";
import { Post } from "@/lib/types";
import { useEffect, useState } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
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
  useEffect(() => {
    const blogs: Post[] = generateDummyPosts(10);
    setBlog(blogs);
    setCategories(()=>{
      return randomCategories();
    })
  }, []);

  useEffect(() => {
    setFilteredBlogs(blog);
  }, [blog]);

  const filter = (category: string) => {
    if (category.trim() !== "") {
      // Filter blogs by category
      const filteredBlogs = blog?.filter((post) =>
        post.title.startsWith(category.toLocaleLowerCase())
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
        <div className="w-full justify-between flex max-h-11">
          <h1 className="w-full text-5xl font-extrabold">Blogs</h1>
        </div>
        <div className="grid grid-cols-4 w-max-full">
          <div className="w-full justify-start col-span-3">
            <div className="w-full h-full grid grid-cols-3 gap-3 p-4">
              {filteredblogs &&
                filteredblogs.map((post, index) => {
                  return (
                    <Card
                      key={index.toString()}
                      className="overflow-hidden cursor-pointer shadow-lg  col-span-1 rounded-md"
                    >
                      <img
                        className="brightness-100 hover:brightness-50"
                        src={
                          post.photo ||
                          "https://2.bp.blogspot.com/-Nc9YO_-F8yI/TcSIAB-nR-I/AAAAAAAAAGI/hPkuxqkqVcU/s1600/music-clipartMUSIC1.jpg"
                        }
                      ></img>

                      <div className="p-3">
                        
                        <div className="flex flex-nowrap pt-2">
                          <Avatar className="h-6 w-6 mr-3">
                            <AvatarImage src={post.avatar} />
                          </Avatar>
                          <p className="flex items-center gap-2 w-full justify-between">
                            <p className="flex gap-2 flex-nowrap justify-between">
                              <p className="text-sm text-blue-700 font-light">
                                {post.username}
                              </p>
                            </p>

                            <p className="flex gap-2">
                              <p className="text-xs text-gray-700">
                                {post.date}
                              </p>
                            </p>
                          </p>
                        </div>
                        <p className="font-bold text-lg capitalize py-2">
                          {post.title}
                        </p>
                        <div className="flex flex-col justify-between h-full">
                          <p className="h-[6rem] text-sm overflow-hidden font-sans text-muted-foreground">
                            {post.desc}
                          </p>
                          <p className="space-x-2">
                          {post.categories.map((category, index) => {
                            return (
                              <Badge
                                key={index.toString()}
                                variant="outline"
                                className="rounded-full font-chivo my-3 text-black capitalize bg-gray-200 shadow-inner font-light"
                                // style={{
                                //   backgroundColor:
                                //     colour[randomInteger().toString()],
                                // }}
                              >
                                {category}
                              </Badge>
                            );
                          })}
                        </p>
                          <animated.div className="flex gap-2 items-center">
                            <Link to={`/blog/${index}`}>
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
          <div className="h-full col-span-1 p-4  border-gray-300 border-l-[1px] flex flex-col">
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
