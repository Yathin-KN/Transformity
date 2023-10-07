import { EventData } from "@/lib/types";
// import axios from "axios";
import axiosClient from "../axios";


const getAllEvents = async (): Promise<EventData[]> => {

  try {
    const response = await axiosClient.get<EventData[]>(`/client/getAllEvents`);

    if (response.status !== 200) {
      throw new Error(`Response status is not OK`);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getAllEvents;
