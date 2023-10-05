import axios from "axios";

const getPostById = async (post_id:string): Promise<any> => {
  try {
    const response = await axios.get<any>(`https://vcw4zbgl-2000.inc1.devtunnels.ms/api/client/post/${post_id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching posts`);
  }
};

export default getPostById;
