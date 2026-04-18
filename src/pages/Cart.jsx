import ProductList from "../components/ProductList/ProductList";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "../redux/slices/cartSlice";
import CartEmpty from "../components/CartEmpty/CarEmpty";
import ConfirmModal from "../components/ConfirmModal";
import React from "react";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const [showModal, setShowModal] = React.useState(false);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );

  const onClickBuy = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    dispatch(clearItems());
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const onClickClear = () => {
    dispatch(clearItems());
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <>
      {showModal && (
        <ConfirmModal
          text="Are you sure?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}

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
          {items.map((item) => (
            <ProductList key={item.id} {...item} />
          ))}
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

          <button onClick={onClickBuy} className={styles.payBtn}>
            Pay now
          </button>
        </div>
      </div>
    </>
  );
}
