import PostItem from "./post-item";
import styles from "./posts-list.module.css";
import type { Posts } from "../../../types/types";

type Props = {
  posts: Posts;
};

function PostsList({ posts }: Props) {
  return (
    <div className={styles.list}>
      <h2 className={styles.header}>People Ideas</h2>
      <div className={styles.posts}>
        {posts.map((post) => (
          <PostItem title={post.title} content={post.content} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default PostsList;
