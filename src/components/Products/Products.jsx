import Sushi from "../Sushi/Sushi";
import Skeleton from "../SushiBlock/Skeleton.jsx";
import styles from "./products.module.css";

export default function Products({ items, isLoading, searchValue }) {
  return (
    <div className={styles.list}>
      {isLoading
        ? [...new Array(15)].map((_, index) => <Skeleton key={index} />)
        : items.map((obj) => (
            <Sushi
              key={obj.id}
              imageUrl={obj.imageUrl}
              title={obj.title}
              price={obj.price}
              quantitySush={obj.quantitySush}
            />
          ))}
    </div>
  );
}
