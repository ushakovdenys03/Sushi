import React from "react";
import styles from "./sort.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

export const sortList = [
  { name: "popularité", sortProperty: "rating" },
  { name: "prix", sortProperty: "price" },
  { name: "alphabétique", sortProperty: "title" },
];

export default function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filterSlice.sort);
  const sortRef = React.useRef();

  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div ref={sortRef} className={styles.sort}>
        <span className={styles.label}>Trier par :</span>
        <b className={styles.span} onClick={() => setOpen(!open)}>
          {sort.name}
        </b>
      </div>
      <div>
        {open && (
          <div className={styles.sort_poput}>
            <ul>
              {sortList.map((obj, i) => (
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
