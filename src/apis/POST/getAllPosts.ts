import axios from "axios";

const getAllPosts = async (): Promise<any[]> => {
  try {
    const response = await axios.get<any[]>(`http://localhost:2000/api/client/getAllPosts`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching posts`);
  }
};

export default getAllPosts;
