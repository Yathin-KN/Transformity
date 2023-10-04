import { deletePostProps } from "@/lib/types";
import axios from "axios"
const PTDeletePost=async(data:deletePostProps)=>{
    try{
       const response=await axios.post(`http://localhost:2000/api/admin/deletePost`,data)
       return response.data;
    }catch(error){
       throw new Error(`Error deleting the post`)
    }
}

export default PTDeletePost;