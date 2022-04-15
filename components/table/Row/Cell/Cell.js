import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../../../store/table/tableActions";
import { computeFormulaValue } from "../../../../utils/Utils";
import styles from "./Cell.module.scss";
import DOMPurify from 'isomorphic-dompurify';

const Cell = (props) => {
  const { content, rowId, columnKey } = props;

  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tableReducer.tableData);

  const updateTableEntry = (e) => {
    let content = DOMPurify.sanitize(e.target.innerHTML);

    if (content.startsWith("=")) {
      content = computeFormulaValue(content);
    }

    const newTableData = [...tableData];
    const currentRowIndex = newTableData.findIndex(
      (row) => row.rowId === rowId
    );
    newTableData[currentRowIndex][columnKey] = content;

    dispatch(tableActions.setTableData(newTableData));
  };

  const createMarkup = () => ({ __html: DOMPurify.sanitize(content) });

  return (
    <div
      className={styles.container}
      contentEditable
      suppressContentEditableWarning={true}
      onBlur={updateTableEntry}
      dangerouslySetInnerHTML={createMarkup()}
    />
  );
};

export default Cell;
