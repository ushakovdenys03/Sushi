import React from "react";
import styles from "./sushi.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

export default function Sushi({ id, imageUrl, title, price, quantitySush }) {
  const dispatch = useDispatch();

  const [countSushi, setCountSushi] = React.useState(0);

  const onClickAdd = () => {
    setCountSushi(countSushi + 1);
    const item = {
      id,
      title,
      price,
      imageUrl,
      quantitySush,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.info}>{quantitySush} pcs</p>

      <div className={styles.bottom}>
        <span className={styles.price}>{price} €</span>
        <button onClick={onClickAdd} className={styles.button}>
          Add {countSushi}
        </button>
      </div>
    </div>
  );
}
