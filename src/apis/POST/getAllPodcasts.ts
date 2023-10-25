

import { PodcastData } from "@/lib/types"; // Assuming you have a type called PodcastData
import axiosClient from "../axios"; // Assuming axiosClient is properly configured

const getAllPodcasts = async (): Promise<PodcastData[]> => {
  try {
    const response = await axiosClient.get<PodcastData[]>(`/client/getAllPodcasts`); // Adjust the path

    if (response.status !== 200) {
      throw new Error(`Response status is not OK`);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getAllPodcasts;
