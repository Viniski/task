import { axiosInstance } from "../axios";
import type { Post } from "../types/types";
import type { Posts } from "../types/types";

export const sendPost = async (post: Post) => {
  try {
    const { data } = await axiosInstance.post("/posts", post, {
      headers: { "Content-Type": "application/json" },
    });
    return data;
  } catch (err) {
    console.error(err);
    throw new Error();
  }
};

export const fetchPosts = async () => {
  try {
    const { data } = await axiosInstance.get<Posts | []>("/posts");
    return data;
  } catch (err) {
    console.error(err);
  }
};
