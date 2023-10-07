import { EventData } from "@/lib/types";
import axios from "axios";


const getAllEvents = async (): Promise<EventData[]> => {

  try {
    const response = await axios.get<EventData[]>(`https://vcw4zbgl-2000.inc1.devtunnels.ms/api/client/getAllEvents`);

    if (response.status !== 200) {
      throw new Error(`Response status is not OK`);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getAllEvents;
