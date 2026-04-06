import React from "react";
import styles from "./sort.module.css";

export default function Sort({ value, onChangeSort }) {
  const [open, setOpen] = React.useState(false);
  const list = [
    { name: "popularité", sortProperty: "rating" },
    { name: "prix", sortProperty: "price" },
    { name: "alphabétique", sortProperty: "title" },
  ];

  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div>
      <div className={styles.sort}>
        <span className={styles.label}>Trier par :</span>
        <b className={styles.span} onClick={() => setOpen(!open)}>
          {value.name}
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
                    value.sortProperty === obj.sortProperty ? styles.active : ""
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
