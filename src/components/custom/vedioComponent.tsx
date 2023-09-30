import { BlogItem as BlogItemProps } from "@/lib/types";
import { useState } from "react";
import BlogItem from "./blogItem";
import useBlogStore from "@/store/blog";

const VideoComponent = ({index}:{index:number}) => {
    const [videoJson, setVideoJson] = useState<BlogItemProps>({
        type: 'Video',
        content: {
           videoUrl: "",
           videoCaption: "",
        },
      });
    
    const { updateBlogItem } = useBlogStore();
    const handleCaptionChange=(caption: string)=>{
        
        setVideoJson((prev:any)=>{
          updateBlogItem(index,{
            type: 'Video',
            content: {...prev,videoCaption:caption}
          })

            return{
                type: 'Video',
                content: {...prev,videoCaption:caption}
              }
        })   
    }

    const handleVideoUrlChange=(videoUrl:string)=>{
        setVideoJson((prev:any)=>{
          updateBlogItem(index,{
            type: 'Video',
            content: {...prev.content,videoUrl:videoUrl}
          })
            return{
                type: 'Video',
                content: {...prev.content,videoUrl:videoUrl}
              }
        }) 
    }

  return (
    <div className='w-full relative'>
         <span className='absolute top-4 right-4'>
            {index}
         </span>
         <BlogItem item={videoJson} handlers={{
        onChangeHandler: handleCaptionChange,
        onChangeVideoUrl:handleVideoUrlChange
    }} />
    </div>
  )
}

export default VideoComponent


