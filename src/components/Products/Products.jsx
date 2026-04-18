import Sushi from "../Sushi/Sushi";
import Skeleton from "../SushiBlock/Skeleton.jsx";
import ErrorBlock from "../ErrorBlock";
import styles from "./products.module.css";

export default function Products({ items, status }) {
  if (status === "error") {
    return <ErrorBlock />;
  }

  return (
    <div className={styles.list}>
      {status === "loading"
        ? [...new Array(5)].map((_, index) => <Skeleton key={index} />)
        : items.map((obj) => <Sushi key={obj.id} {...obj} />)}
    </div>
  );
}
