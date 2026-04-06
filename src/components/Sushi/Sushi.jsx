import React from "react";
import styles from "./sushi.module.css";

export default function Sushi({ imageUrl, title, price, quantitySush }) {
  const [countSushi, setCountSushi] = React.useState(0);

  const onClickAdd = () => {
    setCountSushi(countSushi + 1);
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
