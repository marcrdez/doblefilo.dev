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
          Backend Engineer at{" "}
          <Link
            className={styles.job}
            href="https://embat.io"
            rel="noopener noreferrer"
            target="_blank"
          >
           Embat 
          </Link>
        </h3>
        <p className={styles.previousJob}>
          formerly at{" "}
          <Link
            href="https://genial.ly"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.previousJobLink}
          >
            Genially
          </Link>
        </p>
      </div>
    </div>
  );
};
