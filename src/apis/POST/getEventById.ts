import { Event } from "@/lib/types";
import axios from "axios";


const getEventById = async (event_id :string): Promise<Event> => {

  try {
    const response = await axios.get<Event>(`https://vcw4zbgl-2000.inc1.devtunnels.ms/api/client/event/${event_id}`);

    if (response.status !== 200) {
      throw new Error(`Response status is not OK`);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getEventById;
