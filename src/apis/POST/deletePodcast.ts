import axiosClient from "../axios";

const PTDeletePodcast = async (podcastId: string) => {
    console.log("-------",podcastId)
  try {
    const response = await axiosClient.delete(`/admin/deletePodcast/${podcastId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error deleting the podcast`);
  }
};

export default PTDeletePodcast;
