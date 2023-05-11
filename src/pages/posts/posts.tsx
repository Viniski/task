import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostsForm } from "./components/posts-form";
import { PostsList } from "./components/posts-list";
import { sendPost } from "../../api/helpers";
import styles from "./posts.module.css";
import type { Post } from "../../types/types";

function PostsComponent() {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: sendPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleAddPost = (post: Post) => {
    mutate(post);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Post Your Idea</h1>
      <PostsForm submit={handleAddPost} />
      {isError && <span className={styles.error}>Wystąpił błąd!</span>}
      {isLoading ? (
        <span className={styles.info}>Loading...</span>
      ) : (
        <PostsList />
      )}
    </div>
  );
}

export default PostsComponent;
