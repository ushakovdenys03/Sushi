import React from "react";
import styles from "./sort.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

const list = [
  { name: "popularité", sortProperty: "rating" },
  { name: "prix", sortProperty: "price" },
  { name: "alphabétique", sortProperty: "title" },
];

export default function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filterSlice.sort);

  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div>
      <div className={styles.sort}>
        <span className={styles.label}>Trier par :</span>
        <b className={styles.span} onClick={() => setOpen(!open)}>
          {sort.name}
        </b>
      </div>
      <div>
        {open && (
          <div className={styles.sort_poput}>
            <ul>
              {list.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickListItem(obj)}
                  className={
                    sort.sortProperty === obj.sortProperty ? styles.active : ""
                  }
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
