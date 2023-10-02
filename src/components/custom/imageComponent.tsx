import { BlogItem as BlogItemProps } from "@/lib/types";
import { useState } from "react";
import BlogItem from "./blogItem";
import useBlogStore from "@/store/blog";

const ImageComponent = ({index}:{index:number}) => {
    const [imageJson, setImageJson] = useState<BlogItemProps>({
        type: 'Image',
        content: {
          imageUrl: "",
          imageCaption: "",
        },
      });
    
    const { updateBlogItem } = useBlogStore();
    const handleCaptionChange=(caption: string)=>{
        
        setImageJson((prev:any)=>{
          updateBlogItem(index,{
            type: 'Image',
            content: {...prev.content,imageCaption:caption}
          })

            return{
                type: 'Image',
                content: {...prev.content,imageCaption:caption}
              }
        })   
    }

    const handleImageUrlChange=(imageUrl:string)=>{
        setImageJson((prev:any)=>{
          updateBlogItem(index,{
            type: 'Image',
            content: {...prev.content,imageUrl:imageUrl}
          })
            return{
                type: 'Image',
                content: {...prev.content,imageUrl:imageUrl}
              }
        }) 
    }

  return (
    <div className='w-full relative'>
         <span className='absolute top-4 right-4'>
            {index}
         </span>
         <BlogItem item={imageJson} handlers={{
        onChangeHandler: handleCaptionChange,
        onChangeImageUrl:handleImageUrlChange
    }} />
    </div>
  )
}

export default ImageComponent


