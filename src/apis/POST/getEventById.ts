import { Event } from "@/lib/types";
// import axios from "axios";
import axiosClient from "../axios";


const getEventById = async (event_id :string): Promise<Event> => {

  try {
    const response = await axiosClient.get<Event>(`/client/event/${event_id}`);

    if (response.status !== 200) {
      throw new Error(`Response status is not OK`);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getEventById;
