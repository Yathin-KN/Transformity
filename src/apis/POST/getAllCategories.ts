import axios from "axios";

const getAllCategories = async (): Promise<any[]> => {
  try {
    const response = await axios.get<any[]>(`https://vcw4zbgl-2000.inc1.devtunnels.ms/api/client/getAllCategories`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching categories`);
  }
};

export default getAllCategories;
