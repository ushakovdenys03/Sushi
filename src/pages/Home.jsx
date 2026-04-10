import React, { useRef } from "react";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  setCategoryID,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import styles from "./home.module.css";
import Sort, { sortList } from "../components/Sort/Sort";
import Pagination from "../components/Pagination";

export default function Home({ searchValue }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

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

  const fetchSushi = () => {
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
  };

  // Если был первый рендер, проверяем ебанные параметры и сохраняем в редуксе
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort =
        sortList.find((obj) => obj.sortProperty === params.sortProperty) ||
        sortList[0];

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );

      isSearch.current = true;
    } else {
      dispatch(
        setFilters({
          categoryID: 0,
          currentPage: 1,
          sort: sortList[0],
        }),
      );
    }
  }, [dispatch]);

  // Если был первый рендер, то запрашиваем суши
  React.useEffect(() => {
    if (isSearch.current) {
      isSearch.current = false;
      return;
    }

    fetchSushi();
  }, [categoryID, sortType, searchValue, currentPage]);

  // Если изменили параметры если был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType,
        categoryID,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryID, sortType, currentPage, navigate]);

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
