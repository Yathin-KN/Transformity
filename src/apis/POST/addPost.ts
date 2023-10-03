import axios from "axios"
// const BASE_URL=process.env.URL
const PTSetPost=async(data:any)=>{
    try{
       const response=await axios.post(`http://localhost:2000/api/client/addPost`,data)
       return response.data;
    }catch(error){
       throw new Error(`Error creating a post`)
    }
}

export default PTSetPost;