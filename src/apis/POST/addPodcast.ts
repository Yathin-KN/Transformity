import { PodcastData } from "@/lib/types"; 
import axiosClient from "../axios"; 

const createPodcast = async (newPodcastData: PodcastData): Promise<void> => {
  try {
    const response = await axiosClient.post(`/admin/createPodcast`, newPodcastData);

    if (response.status !== 201) {
      throw new Error(`Response status is not Created`);
    }
  } catch (error) {
    throw error;
  }
};

export default createPodcast;
