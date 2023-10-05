import axios from "axios";

const getAllPosts = async (): Promise<any[]> => {
  try {
    const response = await axios.get<any[]>(`https://vcw4zbgl-2000.inc1.devtunnels.ms/api/client/getAllPosts`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching posts`);
  }
};

export default getAllPosts;
