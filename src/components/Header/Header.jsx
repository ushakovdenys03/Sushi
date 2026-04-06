import Search from "../Search";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* LEFT */}
      <div className={styles.left}>
        <Link to="/">
          <img
            src="/images/sushi.png"
            alt="Sushi Samurai"
            className={styles.logo}
          />
        </Link>
        <div>
          <h2 className={styles.title}>Sushi Samurai</h2>
          <p className={styles.subtitle}>Best sushi in town</p>
        </div>
      </div>

      <Search />

      {/* RIGHT */}
      <Link to="/cart" className={styles.cart}>
        <span>22 €</span>
        <span className={styles.divider}>|</span>
        <span>3 items</span>
      </Link>
    </header>
  );
}
