import styles from "./errorblock.module.css";

export default function ErrorBlock() {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>😕 You have no cards</h2>
      <p className={styles.text}>Cry little baby</p>
    </div>
  );
}
