import Search from "../Search";
import styles from "./header.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

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
        <span>{totalPrice} €</span>

        <span className={styles.divider}>|</span>

        <div className={styles.cartRight}>
          <img src="/images/cart.png" alt="cart" className={styles.cartIcon} />
          <span>{totalCount}</span>
        </div>
      </Link>
    </header>
  );
}
