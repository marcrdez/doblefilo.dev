import Link from "next/link";
import styles from "../styles/Main.module.css";

export const Main = () => {
  return (
    <div>
      <div className={styles.component}>
        <h1 className={styles.title}>
          Hi! I&apos;m <span className={styles.name}>Marc Rodríguez</span>
        </h1>
        <h3 className={styles.subtitle}>
          Software Engineer at{" "}
          <Link
            className={styles.job}
            href="https://genially.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Genially
          </Link>
        </h3>
      </div>
    </div>
  );
};
