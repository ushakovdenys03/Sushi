import ProductList from "../components/ProductList/ProductList";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "../redux/slices/cartSlice";
import CartEmpty from "../components/CartEmpty/CarEmpty";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );

  const onClickClear = () => {
    if (window.confirm("Clear the cart?")) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <div className={styles.top}>
        <div className={styles.titleBlock}>
          <img src="/images/cart.png" alt="cart" />
          <h1>Cart</h1>
        </div>

        <button onClick={onClickClear} className={styles.clearBtn}>
          Clear cart
          <img src="/images/bin.png" alt="bin" className={styles.binIcon} />
        </button>
      </div>

      {/* ITEMS */}
      <div className={styles.list}>
        {items.length === 0 ? (
          <p className={styles.empty}>Cart is empty</p>
        ) : (
          items.map((item) => <ProductList key={item.id} {...item} />)
        )}
      </div>

      {/* SUMMARY */}
      <div className={styles.summary}>
        <div>
          <span>Total items:</span>
          <b>{totalCount}</b>
        </div>

        <div>
          <span>Total price:</span>
          <b>{totalPrice} €</b>
        </div>
      </div>

      {/* FOOTER */}
      <div className={styles.bottom}>
        <Link to="/" className={styles.back}>
          ← Back
        </Link>

        <button className={styles.payBtn}>Pay now</button>
      </div>
    </div>
  );
}
