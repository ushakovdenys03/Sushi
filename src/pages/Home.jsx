import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCategoryID } from "../redux/slices/filterSlice";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import styles from "./home.module.css";
import Sort from "../components/Sort/Sort";
import Pagination from "../components/Pagination";

export default function Home({ searchValue }) {
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.filterSlice.categoryID);
  const sortType = useSelector((state) => state.filterSlice.sort.sortProperty);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [page, setPage] = React.useState(1);

  const onClickCategorie = (id) => {
    dispatch(setCategoryID(id));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryID > 0 ? `category=${categoryID}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://69cc09f70b417a19e07bbb23.mockapi.io/items?page=${page}&limit=5&${category}&sortBy=${sortType}&order=asc&${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        console.log(arr);
        setItems(Array.isArray(arr) ? arr : []);
        setIsLoading(false);
      });
  }, [categoryID, sortType, searchValue, page]);

  return (
    <>
      <Categories
        value={categoryID}
        onClickCategorie={(id) => onClickCategorie(id)}
      />

      <div className={styles.sort}>
        <Sort />
      </div>

      <div className={styles.products}>
        <Products
          searchValue={searchValue}
          items={items}
          isLoading={isLoading}
        />
      </div>

      <Pagination onChangePage={setPage} />
    </>
  );
}
