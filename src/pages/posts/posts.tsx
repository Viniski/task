import { useEffect, useState } from "react";
import PostsForm from "./components/posts-form";
import PostsList from "./components/posts-list";
import { sendData } from "../../api/helpers";
import { axiosInstance } from "../../axios";
import styles from "./posts.module.css";
import type { Posts, Post } from "../../types/types";

function PostsComponent() {
  const [posts, setPosts] = useState<Posts | []>([]);

  const submit = async (post: Post) => {
    try {
      const res = await sendData(post);
      setPosts((prevState) => [...prevState, res]);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchData = async () => {
    try {
      const { data } = await axiosInstance.get("/posts");
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Post Your Idea</h1>
      <PostsForm submit={submit} />
      <PostsList posts={posts} />
    </div>
  );
}

export default PostsComponent;
