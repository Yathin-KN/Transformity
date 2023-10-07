import { deletePostProps } from "@/lib/types";
// import axios from "axios"
import axiosClient from "../axios";
const PTDeletePost=async(data:deletePostProps)=>{
    try{
       const response=await axiosClient.post(`/admin/deletePost`,data)
       return response.data;
    }catch(error){
       throw new Error(`Error deleting the post`)
    }
}

export default PTDeletePost;