import styles from "./pill.module.css";

const Pill = ({ text }: { text: string }) => (
  <div className={styles.pill}>{text}</div>
);

export default Pill;
