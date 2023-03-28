import React from "react";
import TableHeader from "./THead/TableHeader";
import TableBody from "./TBody/TableBody";
import styles from "./TBody/style.module.scss";

const Table = () => {
  return (
    <div className={styles.wrapperTable}>
      <TableHeader />
      <TableBody />
    </div>
  );
};

export default Table;
