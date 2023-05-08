import { axiosInstance } from "../axios";
import type { Post } from "../types/types";

export const sendData = async (post: Post) => {
  try {
    const { data } = await axiosInstance.post("/posts", post, {
      headers: { "Content-Type": "application/json" },
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
