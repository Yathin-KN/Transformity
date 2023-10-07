// import axios from "axios";
import axiosClient from "../axios";

const deleteEventById = async (event_id:string,user_id:string): Promise<any[]> => {
  try {
    const response = await axiosClient.delete<any[]>(`/admin/deleteEvent/${event_id}/${user_id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error deleteing post`);
  }
};

export default deleteEventById;
