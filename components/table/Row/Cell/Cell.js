import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../../../store/table/tableActions";
import styles from "./Cell.module.scss";

const Cell = (props) => {
  const { content, rowId, columnKey } = props;

  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tableReducer.tableData);

  const updateTableEntry = (e) => {
    const newTableData = [...tableData];
    const currentRowIndex = newTableData.findIndex(
      (row) => row.rowId === rowId
    );
    newTableData[currentRowIndex][columnKey] = e.target.innerHTML;
    dispatch(tableActions.setTableData(newTableData));
  };

  return (
    <div
      className={styles.container}
      contentEditable
      suppressContentEditableWarning={true}
      onBlur={updateTableEntry}
    >
      {content}
    </div>
  );
};

export default Cell;
