import { useQuery } from "@tanstack/react-query";
import { PostItem } from "./post-item";
import styles from "./posts-list.module.css";
import { fetchPosts } from "../../../api/helpers";

export function PostsList() {
  const { data: posts, isError, isLoading } = useQuery(["posts"], fetchPosts);

  return (
    <div className={styles.list}>
      <h2 className={styles.header}>People Ideas</h2>
      <div className={styles.posts}>
        {isError && <span className={styles.error}>Wystąpił błąd!</span>}
        {isLoading ? (
          <span className={styles.info}>Loading...</span>
        ) : (
          posts &&
          posts.map((post) => (
            <PostItem title={post.title} content={post.content} key={post.id} />
          ))
        )}
      </div>
    </div>
  );
}
