import React from "react";
import styles from "./search.module.css";
import { SearchContext } from "../../App";

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className={styles.wrapper}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        placeholder="search sushi ..."
      />

      {searchValue && (
        <span className={styles.clear} onClick={() => setSearchValue("")}>
          ×
        </span>
      )}
    </div>
  );
}
