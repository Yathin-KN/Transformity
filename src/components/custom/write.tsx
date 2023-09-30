import { useEffect, useState } from 'react'
import { MainNav } from './main_nav'
import { Button } from '../ui/button'
import {Inp} from './inp'
import Paragraph from './Paragraph'
import Heading from './heading'
import useBlogStore from '@/store/blog'
import ImageComponent from './imageComponent'
import VideoComponent from './vedioComponent'
// const buttonNames:string[] = ['title', 'paragraph', 'subtitle', 'image', 'video', 'ttle'];


const Write = () => {
 const [compoenent,setComponenet]=useState<any[]>([])
 const [length,setLength]=useState<number>(0);
 const { blogItems , removeLastBlogItem } = useBlogStore();

 useEffect(()=>{
   console.log(blogItems)
 },[blogItems])
   const handleClick=(btn:any)=>{
      if(btn.target.name==="title"){
         setComponenet((prev: any)=>{
            return [...prev,<Inp index={length}/>]
         })
      }else if(btn.target.name==="paragraph"){
         setComponenet((prev: any)=>{
            return [...prev,<Paragraph index={length}/>]
         })
      }else if(btn.target.name==="subtitle"){
         setComponenet((prev: any)=>{
            return [...prev,<Heading index={length}/>]
         })
      }else if(btn.target.name==="image"){
         setComponenet((prev:any)=>{
            return [...prev,<ImageComponent index={length}/>]
         })
      }else if(btn.target.name==="video"){
         setComponenet((prev:any)=>{
            return [...prev,<VideoComponent index={length}/>]
         })
      }else if(btn.target.name==="save"){
         console.log(blogItems)
      }else{
         setComponenet((prev:any) => prev.slice(0, -1));
         removeLastBlogItem();  
      }
     
   }
   useEffect(()=>{
     setLength(()=>{
      let len=compoenent.length;
      return len
     })
   },[compoenent])
  return (
    <>
     <MainNav/>
     <div className='w-full h-screen bg-slate-200 flex justify-center'>
        <div className='w-[80%] h-full bg-white px-10 py-4 flex flex-col'>
            {
                compoenent && compoenent.map((comp: any)=>{
                   return comp
                })
            }
         <div className='flex gap-4'>
         <Button onClick={handleClick} className='bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500' name='title'>+</Button>           
         <Button onClick={handleClick} className='bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500' name='paragraph'>+</Button>
         <Button onClick={handleClick} className='bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500' name='subtitle'>+</Button>
         <Button onClick={handleClick} className='bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500' name='image'>i</Button>
         <Button onClick={handleClick} className='bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500' name='video'>v</Button>
         <Button onClick={handleClick} className='bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500' name='save'>s</Button>
         <Button onClick={handleClick} className='bg-white rounded-full shadow-none text-gray-500 border h-10 w-10 my-2 text-2xl font-thin border-gray-500' name='ttle'>-</Button>
         </div>
         
        </div>
        </div>
    </>
  )
}

export default Write