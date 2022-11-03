import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export const NavBar = () => {
  return (
    <header className={styles.main}>
      <nav>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/blog" className={styles.link}>
          Blog
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
};
