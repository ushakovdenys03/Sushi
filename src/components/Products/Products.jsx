import Sushi from "../Sushi/Sushi";
import Skeleton from "../SushiBlock/Skeleton.jsx";
import styles from "./products.module.css";

export default function Products({ items, isLoading }) {
  return (
    <div className={styles.list}>
      {isLoading
        ? [...new Array(5)].map((_, index) => <Skeleton key={index} />)
        : items.map((obj) => <Sushi key={obj.id} {...obj} />)}
    </div>
  );
}
