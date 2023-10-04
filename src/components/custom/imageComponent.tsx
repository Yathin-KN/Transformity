import { BlogItem as BlogItemProps } from "@/lib/types";
import { useState } from "react";
import BlogItem from "./blogItem";
import useBlogStore from "@/store/blog";
import axios from "axios";
import { Button } from "../ui/button";
import { ToastContainer, toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const ImageComponent = ({ index }: { index: number }) => {
  const [imageJson, setImageJson] = useState<BlogItemProps>({
    type: "Image",
    content: {
      imageUrl: "",
      imageCaption: "",
    },
  });
  const [fileData, setFile] = useState<File | null>();
  const { updateBlogItem } = useBlogStore();
  const [isLoading,setIsLoading]=useState<boolean>(false)

  const handleCaptionChange = (caption: string) => {
    setImageJson((prev: any) => {
      updateBlogItem(index, {
        type: "Image",
        content: { ...prev.content, imageCaption: caption },
      });

      return {
        type: "Image",
        content: { ...prev.content, imageCaption: caption },
      };
    });
  };

  const handleButtonClick = async () => {
    const formData = new FormData();
    if (fileData) {
      formData.append("media", fileData);
      try {
        setIsLoading(true)
        const response = await axios.post(
          "http://localhost:2000/api/admin/createUrl",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Image uploaded successfully!", response.data);
        toast.success("Image uploaded successfully!")
        handleImageUrlChange(response.data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }finally{
        setIsLoading(false)
      }
    }
  };
  const handleImageUrlChange = (imageUrl: string) => {
    console.log("ima", imageUrl);
    setImageJson((prev: any) => {
      updateBlogItem(index, {
        type: "Image",
        content: { ...prev.content, imageUrl: imageUrl },
      });
      return {
        type: "Image",
        content: { ...prev.content, imageUrl: imageUrl },
      };
    });
  };

  const onFileUpload = async (e: any) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  return (
    <div className="w-full relative">
      <span className="absolute top-4 right-4">{index}</span>

      <ToastContainer />
      <Button className="absolute top-10 right-4" variant='outline' onClick={()=>handleButtonClick()} disabled={isLoading}>
         {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null} save
         </Button>
      <BlogItem
        item={imageJson}
        handlers={{
          onChangeHandler: handleCaptionChange,
          onChangeImageUrl: handleImageUrlChange,
          onFileUpload: onFileUpload,
        }}
      />
    </div>
  );
};

export default ImageComponent;
