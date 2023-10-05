import axios from "axios";

const deleteEventById = async (event_id:string,user_id:string): Promise<any[]> => {
  try {
    const response = await axios.delete<any[]>(`https://vcw4zbgl-2000.inc1.devtunnels.ms/api/admin/deleteEvent/${event_id}/${user_id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error deleteing post`);
  }
};

export default deleteEventById;
