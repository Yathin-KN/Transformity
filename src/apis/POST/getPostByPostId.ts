// import axios from "axios";
import axiosClient from "../axios";

const getPostById = async (post_id:string): Promise<any> => {
  try {
    const response = await axiosClient.get<any>(`/client/post/${post_id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching posts`);
  }
};

export default getPostById;
