import ReactPaginate from "react-paginate";
import styles from "./pagination.module.css";

export default function Pagination({ currentPage, onChangePage }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={3}
      forcePage={currentPage - 1}
      containerClassName={styles.pagination}
      pageClassName={styles.page}
      activeClassName={styles.active}
      previousClassName={styles.page}
      nextClassName={styles.page}
      disabledClassName={styles.disabled}
    />
  );
}
