import styles from "./post-item.module.css";
import avatar from "../../../assets/avatar.png";

type Props = {
  title: string;
  content: string;
};

export function PostItem({ title, content }: Props) {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={avatar} alt="Avatar" />
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
      </div>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </div>
  );
}
