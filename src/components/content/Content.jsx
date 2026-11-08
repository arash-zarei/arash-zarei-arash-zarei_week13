import styles from "./Content.module.css";

const Content = ({ title, description }) => {
  return (
    <div className={styles["content"]}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Content;
