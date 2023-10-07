import axios from "axios";
import useUserStore from './../../store/authStore'; 

const getAccessToken = () => {
  const access_token = useUserStore.getState().getAccessToken();
  return access_token;
};

const authorize = async (): Promise<any[]> => {
  try {
    const response = await axios.get<any>(`https://vcw4zbgl-2000.inc1.devtunnels.ms/api/client/show`,{
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
