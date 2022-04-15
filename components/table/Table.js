import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table/tableActions";
import { getColumnHeaders, getRowHeaders, getRows } from "../../utils/Utils";
import Row from "./Row/Row";
import styles from "./Table.module.scss";

const Table = (props) => {
  const { initialNoOfRows = 20, initialNoOfColumns = 20 } = props;

  const dispatch = useDispatch();

  const tableData = useSelector((state) => state.tableReducer.tableData);
  const noOfRows = useSelector((state) => state.tableReducer.noOfRows);
  const noOfColumns = useSelector((state) => state.tableReducer.noOfColumns);
  const rowHeaders = useSelector((state) => state.tableReducer.rowHeaders);

  useEffect(() => {
    dispatch(tableActions.setNoOfRows(initialNoOfRows));
  }, [dispatch, initialNoOfRows]);

  useEffect(() => {
    dispatch(tableActions.setNoOfColumns(initialNoOfColumns));
  }, [dispatch, initialNoOfColumns]);

  useEffect(() => {
    dispatch(tableActions.setColumnHeaders(getColumnHeaders(noOfColumns)));
  }, [dispatch, noOfColumns]);
  
  useEffect(() => {
    dispatch(tableActions.setRowHeaders(getRowHeaders(noOfRows)));
  }, [dispatch, noOfRows]);

  return (
    <div className={styles.container}>
      <Row isHeader={true} />
      {tableData.map((row, i) => (
        <Row
          key={row.rowId}
          isHeader={false}
          row={row}
          rowHeader={rowHeaders[i]}
        />
      ))}
    </div>
  );
};

export default Table;
