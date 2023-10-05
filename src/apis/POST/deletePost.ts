import { deletePostProps } from "@/lib/types";
import axios from "axios"
const PTDeletePost=async(data:deletePostProps)=>{
    try{
       const response=await axios.post(`https://vcw4zbgl-2000.inc1.devtunnels.ms/api/admin/deletePost`,data)
       return response.data;
    }catch(error){
       throw new Error(`Error deleting the post`)
    }
}

export default PTDeletePost;