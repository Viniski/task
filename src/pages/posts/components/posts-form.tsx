import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Post } from "../../../types/types";
import avatar from "./../../../assets/avatar.png";
import styles from "./posts-form.module.css";

type Props = {
  submit: (post: { title: string; content: string }) => void;
};

export function PostsForm({ submit }: Props) {
  const schema: ZodType<Post> = z.object({
    title: z
      .string()
      .min(2, { message: "Post title must be at least 2 characters" })
      .max(30, { message: "Post title  must be at most 30 characters" }),
    content: z
      .string()
      .min(2, { message: "Post content must be at least 2 characters" }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Post>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Post) => {
    submit(data);
    reset();
  };

  errors.content && console.log(errors.content.message);

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
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("title")}
            type="text"
            name="title"
            className={styles.input}
            placeholder="Add a title"
            aria-label="Add a title"
            aria-invalid={errors.title ? "true" : "false"}
          />
          {errors.title && (
            <span className={styles.error} role="alert">
              {errors.title.message}
            </span>
          )}

          <textarea
            {...register("content")}
            name="content"
            className={styles.textarea}
            placeholder="Add your post"
            aria-label="Add your post"
            aria-invalid={errors.title ? "true" : "false"}
          />
          {errors.content && (
            <span className={styles.error} role="alert">
              {errors.content.message}
            </span>
          )}

          <button type="submit" className={styles.button} aria-label="Sumbit">
            Add post
          </button>
        </form>
      </div>
    </div>
  );
}
