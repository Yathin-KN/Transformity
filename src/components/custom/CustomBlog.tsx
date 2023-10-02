import { useParams } from "react-router-dom"
import { MainNav } from "./main_nav";
import { useEffect, useState } from "react";
import { generateBlogArray } from "@/lib/blogData";
import BlogItemDisplay from "./blogItemDisplay";
// import BlogItem from "./blogItem";
const BlogCustom = () => {
  const {blogId}=useParams();
  const [blog,setBlog]=useState<any[]>([])
  useEffect(()=>{
    const content=generateBlogArray();
    setBlog(content)
    console.log(content)
  },[])
  return (
    <>
     <MainNav/>
     {console.log(blogId)}
      <div className="w-full lg:w-[80%]  mx-auto">
        {
          blog && blog.map((blogItem,index)=>{
            return <BlogItemDisplay item={blogItem} key={index.toString()}/>
          })
        }
      </div>
      
    </>
  )
}

export default BlogCustom