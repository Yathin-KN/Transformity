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
import PTSetPost from "../apis/POST/addPost";
import {
  AlignJustify,
  HeadingIcon,
  ImageIcon,
  Loader2,
  PlaySquare,
  Save,
  Type,
  XSquare,
} from "lucide-react";
import useUserStore from "@/store/authStore";
import { ToastContainer, toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import getAllCategories from "@/apis/POST/getAllCategories";
import { Category } from "@/lib/types";



const Write = () => {
  const [compoenent, setComponenet] = useState<any[]>([]);
  const [length, setLength] = useState<number>(0);
  const { blogItems, removeLastBlogItem } = useBlogStore();
  const getUserInfo = useUserStore((state) => state.getUserInfo);
  const { user_id } = getUserInfo();
  const [newCategory,setNewCategory]=useState<string>("");
  const [categories, setCategories] = useState<Category[]>([
  ]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [isLoading,setIsLoading]=useState<boolean>(false)

  // const [categoryArray,setCategoryArray]=useState<String[]>([]);

  const fetchCategories=async()=>{
    try{
      const resp=await getAllCategories();
      setCategories(()=>{
        return [...resp]
      })
      console.log(resp)
    }catch(error){

    }
  }
  useEffect(()=>{
    fetchCategories();
  }, []);

  


  const [post, setPost] = useState({
    postTitle: "",
    postDescription: "",
    categories:[],
  });

 
  const handleNewCategoryChange=(e:any)=>{
     setNewCategory(e.target.value)
  }
  const handelCategoryChange = () => {
    setPost((prev:any) => {
      return { ...prev, categories: selectedCategories};
    });
  };


  useEffect(()=>{
    handelCategoryChange();
  },[selectedCategories])

  const handlePostChange = (key: string, value: string) => {
    setPost((prev: any) => {
      return { ...prev, [key]: value };
    });
  };
  
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
      setIsLoading(true)
      const response = await PTSetPost({
        postDetails: post,
        user_id: user_id,
        content: blogItems,
      });
      toast.success("Successfully posted !!!");
      console.log(response);
    } catch (error) {
      console.log("error : ", error);
      toast.error("Error posting !!!");
    }finally{
      setIsLoading(false)
    }
  };
  useEffect(() => {
    setLength(() => {
      let len = compoenent.length;
      return len;
    });
  }, [compoenent]);

  function handleAddCategory(): void {
    setCategories((prev:any)=>{
        return [...prev,{
          categoryId:categories.length,
          categoryName:newCategory
        }]
    })
    setNewCategory("")
  }

  const handelCategoryClick = (category: Category) => {
    setSelectedCategories(prev => {
      const isCategorySelected = prev.some(cat => cat.categoryId === category.categoryId);
  
      if (isCategorySelected) {
        return prev.filter(cat => cat.categoryId !== category.categoryId);
      } else {
        return [...prev, category];
      }
    });
  };
  return (
    <>
      <MainNav />
      <ToastContainer />
      <div className="w-full h-auto bg-slate-200  flex justify-center">
        <div className="md:w-[80%] w-[95%] h-auto min-h-[100vh] bg-white md:px-10 py-10 mt-[50px] mb-[100px] flex flex-col relative rounded-md px-2">
          <AlertDialog>
            <AlertDialogTrigger>
              <Badge
                className="absolute text-xs top-4 right-4 md:text-sm"
                variant="publish"
              >
                Publish
              </Badge>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <div className="flex justify-end">
                <AlertDialogCancel>X</AlertDialogCancel>
              </div>
              <PublishDialog handler={handlePostChange} details={post} />
              <AlertDialogFooter>
                <div className="flex flex-col gap-4 w-full">
                <Button onClick={handleSubmit} type="submit" variant="outline_custom" disabled={isLoading}>
                {isLoading? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null} Publish 
                </Button>
                <div className="flex flex-col">
                  {selectedCategories && <p className="text-md">Selected Categories :</p>}
                 <div className="flex gap-2">
                 {selectedCategories&& selectedCategories.map((category)=>{
                    return <Badge className="text-sm">{category.categoryName}</Badge>
                  })}
                 </div>
                </div>
                <div className="w-full">
                {
                  categories && categories.map((category)=>{
                    return <Badge className="text-xs font-light mx-1 my-1 cursor-pointer" variant="outline" onClick={()=>handelCategoryClick(category)}>{category.categoryName} <span className="ml-1 p-2 max-h-4 max-w-4 text-center flex items-center rounded-full bg-gray-400 text-white text-xs"><>{category.postCount}</></span></Badge>
                  })
                }
                
                </div>
                <div className="flex justify-center">
                  <Input value={newCategory} onChange={(e)=>handleNewCategoryChange(e)} />
                  <Button onClick={()=>handleAddCategory()} value='outline' className="text-xs ml-4">Add Category</Button>
                </div>
                
                </div>
               
               
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <div className="py-4">
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
              <Type size={28} strokeWidth={1} />
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
