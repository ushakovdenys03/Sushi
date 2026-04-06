import { Link } from "react-router-dom";
import styles from "./notfound.module.css";

export default function NotFound() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>404 😕</h1>
        <p className={styles.text}>Oh Shit...</p>

        <Link to="/" className={styles.button}>
          Back to Homepage
        </Link>
      </div>
    </>
  );
}
