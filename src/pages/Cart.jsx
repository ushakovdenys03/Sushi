import ProductList from "../components/ProductList/ProductList";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";

export default function Cart({ counts, price }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <img src="/images/cart.png" alt="cart" />
          <h1 className={styles.title}>Cart</h1>

          <button className={styles.clearBtn}>Delete all elements</button>
        </div>

        <ProductList />

        <div className={styles.summary}>
          <div className={styles.summaryBlock}>
            <p>All Products:</p>
            <p>{counts}</p>
          </div>

          <div className={styles.summaryBlock}>
            <p>Summary:</p>
            <p>{price} €</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <Link to="/" className={styles.back}>
            ← Back to Homepage
          </Link>

          <button className={styles.payBtn}>Pay</button>
        </div>
      </div>
    </>
  );
}
