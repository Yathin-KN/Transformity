import axios from "axios";

const getPostById = async (post_id:string): Promise<any> => {
  try {
    const response = await axios.get<any>(`http://localhost:2000/api/client/post/${post_id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching posts`);
  }
};

export default getPostById;
