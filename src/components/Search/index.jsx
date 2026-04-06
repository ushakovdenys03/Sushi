import React from "react";
import styles from "./search.module.css";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

export default function Search() {
  const [value, setValue] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
  );

  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="search sushi ..."
      />

      {value && (
        <span className={styles.clear} onClick={onClickClear}>
          ×
        </span>
      )}
    </div>
  );
}
