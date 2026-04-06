import styles from "./categories.module.css";

export default function Categories({ value, onClickCategorie }) {
  const categories = ["All", "Classic", "Hot", "Baked", "Nigiri"];

  return (
    <>
      <div className={styles.list}>
        {categories.map((categorieName, index) => (
          <li
            className={`${styles.listElement} ${
              value === index ? styles.active : ""
            }`}
            key={index}
            onClick={() => onClickCategorie(index)}
          >
            {categorieName}
          </li>
        ))}
      </div>
    </>
  );
}
