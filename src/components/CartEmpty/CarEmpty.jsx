import { Link } from "react-router-dom";
import styles from "./cartEmpty.module.css";

export default function CartEmpty() {
  return (
    <div className={styles.wrapper}>
      <img
        src="/images/empty-cart.jpg"
        alt="Empty cart"
        className={styles.image}
      />

      <h2 className={styles.title}>Your cart is empty</h2>

      <p className={styles.text}>
        Looks like you haven’t added anything yet 🍣
      </p>

      <Link to="/" className={styles.button}>
        Go shopping
      </Link>
    </div>
  );
}
