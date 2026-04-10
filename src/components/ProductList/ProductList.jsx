import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";
import styles from "./productList.module.css";

export default function ProductList({
  id,
  imageUrl,
  title,
  quantitySush,
  price,
  count,
}) {
  const dispatch = useDispatch();

  const onClickRemoveItem = () => {
    if (window.confirm("Are you sure you want to remove")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={styles.item}>
      {/* LEFT */}
      <div className={styles.left}>
        <img src={imageUrl} alt={title} className={styles.image} />

        <div className={styles.info}>
          <h4>{title}</h4>
          <p>{quantitySush} pcs</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <div className={styles.counter}>
          <button onClick={() => dispatch(minusItem(id))}>−</button>
          <span>{count}</span>
          <button onClick={() => dispatch(addItem({ id }))}>+</button>
        </div>

        <div className={styles.price}>{price * count} €</div>

        <button onClick={onClickRemoveItem} className={styles.remove}>
          ✕
        </button>
      </div>
    </div>
  );
}
