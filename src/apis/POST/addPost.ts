import axios from "axios"
// const BASE_URL=process.env.URL
const PTSetPost=async(data:any)=>{
    try{
       const response=await axios.post(`https://vcw4zbgl-2000.inc1.devtunnels.ms/api/client/addPost`,data)
       return response.data;
    }catch(error){
       throw new Error(`Error creating a post`)
    }
}

export default PTSetPost;