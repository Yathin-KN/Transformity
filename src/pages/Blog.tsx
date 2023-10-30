import { MainNav } from "@/components/custom/main_nav";
import { Post } from "@/lib/types";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import getAllPosts from "@/apis/POST/getAllPosts";
import 'react-toastify/dist/ReactToastify.css';
import { Loader2} from "lucide-react";
import useUserStore from "@/store/authStore";
import PTDeletePost from "@/apis/POST/deletePost";
import { ToastContainer, toast } from "react-toastify";
import BlogCard from "@/components/custom/BlogCard";
import Footer from "@/components/custom/footer";
import { motion } from "framer-motion";
import clsx from "clsx";
import useModeStore from "@/store/mode";


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
  const [category] = useState<string>("");
  const [,setCategories]=useState<string[]>([])
  const user_info = useUserStore(state=>state.getUserInfo)
  const {user_id} = user_info();

  const [isDeleteLoading,setIsDeleteLoading]=useState(false);


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


  const handleRemovePost=async(post_id:string)=>{
     console.log({
      user_id,
      post_id
     })
     try{
      setIsDeleteLoading(true)
       const resp=await PTDeletePost({
        user_id,
        post_id
       })
       console.log(resp)
       toast.success(resp.message,{
        delay:1500
       })
       fetch()
     }catch(error){
        toast.error("post wasn't deleted",{
          delay:1500
        })
     }finally{
      setIsDeleteLoading(false)
     }
  }
  useEffect(() => {
    filter(category);
  }, [category]);

  const {mode}=useModeStore();
  return (
    <div className={clsx({
      "bg-white":(mode=="light"),
      "bg-black":(mode=="dark"),
    })}>
      <div className={clsx("w-full h-auto ",{
      "bg-white":(mode=="light"),
      "bg-black":(mode=="dark"),
    })}>
      <MainNav />
      </div>
      <ToastContainer toastClassName={() => 
        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-white text-gray-800 text-sm p-4 m-4"
      }/>
      <div className={clsx("w-full flex justify-center py-10   md:py-10 overflow-hidden  ",{
         "text-black":(mode=="light"),
         "text-white":(mode=="dark"),
      })}>
          <motion.p
            className="text-xl md:text-[9rem] flex justify-center relative items-center w-full h-auto md:py-10 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="opacity-20 md:opacity-10 tracking-tighter md:tracking-[1.3rem] text-center py-3 mx-4 font-island normal-case text-[8rem] md:text-[17rem]">
              Transformity
            </p>
            <motion.p
              className="text-3xl md:text-7xl absolute uppercase tracking-[0.5rem]  md:tracking-[1.5rem] font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, spacing: 2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
             
              BLOGS
            </motion.p>
          </motion.p>
        </div>

      <div className={clsx("w-full h-fit flex flex-col min-h-screen box-border p-4",{
      "bg-white":(mode=="light"),
      "bg-black":(mode=="dark"),
    })}>
        <div className="flex flex-col-reverse md:grid md:grid-cols-4 w-max-full">
          <div className="w-full flex flex-col-reverse md:justify-start md:col-span-4 ">
            <div className="w-full h-full flex flex-wrap justify-around items-center gap-4">
              {filteredblogs &&
                filteredblogs.map((post, index) => {
                  return (
                 <div className="text-white relative w-full md:w-fit">
                  
                      <BlogCard title={post.postDetails.postTitle} description={post.postDetails.postDescription} image={post.postImage?post.postImage:""} author={post.user_info.username} date={post.postDate.substring(0,10)} categories={post.postDetails.categories} id={post.post_id} key={index.toString()}/>
                      {(user_id === post.user_id)?<div className="absolute top-4 right-4 font-saira py-1 px-3"><button className="bg-red-500 py-1 px-2 " style={{
                    cursor:'pointer'
                   }} onClick={() => handleRemovePost(post.post_id)}>Delete</button><div className="flex gap-3 bg-black font-saira text-center px-3" style={{
                    visibility:!isDeleteLoading ? "hidden" : "visible",
                    display:!isDeleteLoading?"none":""
                   }}>
                        <Loader2 strokeWidth={1} className="mr-2 h-4 w-4  animate-spin text-white font-saira" />
                        Deleting ..
                      </div></div>:null}
                 </div>
                    //   <motion.div
                     
                    //   whileHover={{width:"60%"}}
                      
                    //   key={index.toString()}
                    //   className="overflow-hidden  hover:flex  cursor-pointer shadow-lg border-none h-[50vh]  rounded-lg w-[30%]"
                      
                    // >
                    //   <div>
                    //   <img
                    //     className="brightness-100 h-fit w-full hover:w-[60%]  object-cover hover:h-full"
                    //     src={
                    //       post.postImage
                    //     }
                    //   ></img>
                    //   </div>

                    //   <div className="p-3  bg-[#da0037]  h-full">
                        
                    //     <div className="flex flex-nowrap pt-2 ">
                    //       <Avatar className="h-6 w-6 mr-3">
                    //       <AvatarImage src={post.user_info.profilePic || DummyPic} />
                    //       </Avatar>
                    //       <p className="flex items-center gap-2 w-full justify-between">
                    //         <p className="flex gap-2 flex-nowrap justify-between">
                    //           <p className="text-sm text-white font-light">
                    //             {post.user_info.username}
                    //           </p>
                    //         </p>

                    //         <p className="flex gap-2">
                    //           <p className="text-xs text-white">
                    //             {post.postDate.substring(0,10)}
                    //           </p>
                    //           <p className="text-xs text-white">
                    //             {post.postTime}
                    //           </p>
                    //         </p>
                    //       </p>
                    //     </div>
                    //     <p className="font-bold text-lg capitalize py-2 text-white">
                    //       {post.postDetails.postTitle}
                    //     </p>
                    //     <div className="flex flex-col  justify-end h-full">
                    //       <p className="h-[6rem] text-sm  font-sans text-white">
                    //         {post.postDetails.postDescription}
                    //       </p>
                    //       <p className=" py-3">
                    //       {post.postDetails.categories.map((category, index) => {
                    //         return (
                    //           <Badge
                    //             key={index.toString()}
                    //             variant="outline"
                    //             className="rounded-full font-chivo my-1 mx-1 text-black capitalize bg-gray-200 shadow-inner font-light"
                    //           >
                    //             {category}
                    //           </Badge>
                    //         );
                    //       })}
                    //      </p>
                    //       <animated.div className="flex gap-2 items-center">
                    //         <Link to={`/blog/${post.post_id}`}>
                    //           <ArrowTopRightIcon className="text-3xl font-semibold w-6 h-6 cursor-pointer hover:bg-gray-100 m-2 rounded-md" />
                    //         </Link>
                    //         <div className="flex justify-between w-full">
                    //         <p className="text-muted-foreground text-sm text-black ">
                    //           Read more ...
                    //         </p>
                    //         {(user_id === post.user_id)?<Trash2 strokeWidth={1} onClick={()=>handleRemovePost(post.post_id)} />:<Loader2 visibility={!isDeleteLoading?"hidden":"visible"} strokeWidth={1} className="mr-2 h-4 w-4 animate-spin text-red-500"/>}
                    //         </div>
                    //       </animated.div>
                          
                    //     </div>
                    //   </div>
                    //   </motion.div>
                  );
                })}
            </div>
          </div>
          {/* <div className="h-full col-span-1 p-4 py-6  border-gray-300 border-l-[1px] flex flex-col bg-purple-500">
          <Input
            className="w-full px-4 mx-auto  text-md py-4 shadow-none rounded-sm bg-gray-100 border-none "
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
                className="rounded-full text-sm font-poppins my-1  text-black capitalize bg-gray-100  border-none font-light py-1 px-2 mx-1"
              >
                {category}
              </Badge>
              })
            }
          </div>
          </div> */}
        </div>
      <Footer/>

      </div>
    </div>
  );
};

export default Blog;
