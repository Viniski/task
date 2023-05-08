import { useState } from "react";
import avatar from "./../../../assets/avatar.png";
import styles from "./posts-form.module.css";

type Props = {
  submit: (post: { title: string; content: string }) => void;
};

function PostsForm({ submit }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.length > 2 && content.length > 2) {
      submit({ title, content });
      setContent("");
      setTitle("");
      setError("");
    } else {
      setError("Post title and content must be more than 2 characters long.");
    }
  };

  const handleTitle = (e: React.FormEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setTitle(String(target.value));
  };

  const handleContent = (e: React.FormEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setContent(String(target.value));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <img src={avatar} alt="Avatar" />
      </div>
      <div className={styles.container}>
        <div className={styles.headers}>
          <h2 className={styles.header}>Hello!</h2>
          <h3 className={styles.info}>Post your message here:</h3>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={handleTitle}
            type="text"
            name="title"
            className={styles.input}
            placeholder="Add a title"
            aria-label="Add a title"
          />
          <textarea
            value={content}
            onChange={handleContent}
            name="content"
            className={styles.textarea}
            placeholder="Add your post"
            aria-label="Add your post"
          />
          <button type="submit" className={styles.button} aria-label="Sumbit">
            Add post
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default PostsForm;
