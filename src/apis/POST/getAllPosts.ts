// import axios from "axios";
import axiosClient from "../axios";

const getAllPosts = async (): Promise<any[]> => {
  try {
    const response = await axiosClient.get<any[]>(`/client/getAllPosts`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching posts`);
  }
};

export default getAllPosts;
