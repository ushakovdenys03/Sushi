import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setCategoryID, setCurrentPage } from "../redux/slices/filterSlice";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import styles from "./home.module.css";
import Sort from "../components/Sort/Sort";
import Pagination from "../components/Pagination";

export default function Home({ searchValue }) {
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.filterSlice.categoryID);
  const sortType = useSelector((state) => state.filterSlice.sort.sortProperty);
  const currentPage = useSelector((state) => state.filterSlice.currentPage);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onClickCategorie = (id) => {
    dispatch(setCategoryID(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryID > 0 ? `category=${categoryID}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://69cc09f70b417a19e07bbb23.mockapi.io/items?page=${currentPage}&limit=5&${category}&sortBy=${sortType}&order=asc&${search}`,
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      });
  }, [categoryID, sortType, searchValue, currentPage]);

  return (
    <>
      <Categories value={categoryID} onClickCategorie={onClickCategorie} />

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

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
}
