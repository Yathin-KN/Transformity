// import axios from "axios";
import axiosClient from "../axios";

const getAllCategories = async (): Promise<any[]> => {
  try {
    const response = await axiosClient.get<any[]>(`/client/getAllCategories`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching categories`);
  }
};

export default getAllCategories;
