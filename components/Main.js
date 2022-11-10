import styles from "../styles/Main.module.css";

export const Main = () => {
  return (
    <div className={styles.component}>
      <h1 className={styles.title}>
        Hi! I&apos;m <span className={styles.name}>Marc Rodríguez</span>
      </h1>
      <h3 className={styles.subtitle}>
        Backend Developer Trainee at{" "}
        <span className={styles.job}>Genially</span>
      </h3>
    </div>
  );
};
