// import axios from "axios";
import useUserStore from './../../store/authStore'; 
import axiosClient from "../axios";
const getAccessToken = () => {
  const access_token = useUserStore.getState().getAccessToken();
  return access_token;
};

const authorize = async (): Promise<any[]> => {
  try {
    const response = await axiosClient.get<any>(`/client/show`,{
      headers:{
        Authorization:getAccessToken()
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching posts`);
  }
};

export default authorize;
