import React from "react";
import HeaderCell from "./HeaderCell/HeaderCell";
import Cell from "./Cell/Cell";
import styles from "./Row.module.scss";
import { COLUMN, ROW } from "../../../constants/constants";
import { useSelector } from "react-redux";

const Row = (props) => {
  const { isHeader = false, row, rowHeader } = props;

  const columnHeaders = useSelector(
    (state) => state.tableReducer.columnHeaders
  );

  return (
    <div className={styles.container}>
      {isHeader ? (
        <>
          <HeaderCell />
          {columnHeaders.map((columnHeader) => (
            <HeaderCell
              cellType={COLUMN}
              key={columnHeader.key}
              keyId={columnHeader.key}
              content={columnHeader.content}
            />
          ))}
        </>
      ) : (
        <>
          <HeaderCell
            cellType={ROW}
            key={rowHeader.key}
            content={rowHeader.content}
            keyId={row.rowId}
          />
          {columnHeaders.map((columnHeader) => (
            <Cell
              key={`${row.rowId}-${columnHeader.key}`}
              rowId={row.rowId}
              columnKey={columnHeader.key}
              content={row[columnHeader.key]}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Row;
