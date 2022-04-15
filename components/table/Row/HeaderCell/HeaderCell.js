import React from "react";
import styles from "./HeaderCell.module.scss";
import cellStyles from "../Cell/Cell.module.scss";
import {
  COLUMN,
  MINUS_ONE,
  PLUS_ONE,
  ROW,
} from "../../../../constants/constants";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import {
  getHeaderContextMenuItems,
  updateContent,
} from "../../../../utils/Utils";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../../../store/table/tableActions";

const HeaderCell = (props) => {
  const { content, cellType, keyId } = props;
  const dispatch = useDispatch();

  const tableData = useSelector((state) => state.tableReducer.tableData);
  const rowHeaders = useSelector((state) => state.tableReducer.rowHeaders);
  const columnHeaders = useSelector(
    (state) => state.tableReducer.columnHeaders
  );

  const handleItemClick = (e, data) => {
    const { cellType } = data;

    if (cellType === ROW) {
      let newRowHeaders = [...rowHeaders];
      const newTableData = [...tableData];
      const rowClickedIndex = newRowHeaders.findIndex(
        (col) => col.key === data.keyId
      );
      
      if (data.item.itemData.addFlag === PLUS_ONE) {
        newRowHeaders.splice(rowClickedIndex + 1, 0, {
          key: 1000 * Math.random(),
          content: rowClickedIndex + 2,
        });
        newRowHeaders = updateContent({
          startIndex: rowClickedIndex + 1,
          arr: newRowHeaders,
        });
        newTableData.splice(rowClickedIndex + 1, 0, {
          rowId: newRowHeaders[rowClickedIndex + 1].key
        });
      } else if (data.item.itemData.addFlag === MINUS_ONE) {
        newRowHeaders.splice(rowClickedIndex, 0, {
          key: 1000 * Math.random(),
          content: rowClickedIndex + 1,
        });
        newRowHeaders = updateContent({
          startIndex: rowClickedIndex,
          arr: newRowHeaders,
        });
        newTableData.splice(rowClickedIndex, 0, {
          rowId: newRowHeaders[rowClickedIndex].key
        });
      }
      dispatch(tableActions.setRowHeaders(newRowHeaders));
      dispatch(tableActions.setTableData(newTableData));
      
    } else if ((cellType = COLUMN)) {
      let newColumnHeaders = [...columnHeaders];
      const columnClickedIndex = columnHeaders.findIndex(
        (col) => col.key === data.keyId
      );
      if (data.item.itemData.addFlag === PLUS_ONE) {
        newColumnHeaders.splice(columnClickedIndex + 1, 0, {
          key: 100 * Math.random(),
          content: columnClickedIndex + 2,
        });
        newColumnHeaders = updateContent({
          startIndex: columnClickedIndex + 1,
          arr: newColumnHeaders,
        });
      } else if (data.item.itemData.addFlag === MINUS_ONE) {
        newColumnHeaders.splice(columnClickedIndex, 0, {
          key: 100 * Math.random(),
          content: columnClickedIndex + 1,
        });
        newColumnHeaders = updateContent({
          startIndex: columnClickedIndex,
          arr: newColumnHeaders,
        });
      }

      dispatch(tableActions.setColumnHeaders(newColumnHeaders));
    }
  };

  return (
    <>
      <ContextMenuTrigger id={`header-cell-${keyId}`}>
        <div className={[cellStyles.container, styles.container].join(" ")}>
          {content}
        </div>
      </ContextMenuTrigger>

      <ContextMenu id={`header-cell-${keyId}`}>
        {getHeaderContextMenuItems(cellType).map((item, i) => (
          <div key={item.id}>
            <MenuItem
              onClick={handleItemClick}
              data={{ item, keyId, cellType }}
              attributes={{ className: styles.menuItem }}
            >
              {item.itemName}
            </MenuItem>
          </div>
        ))}
      </ContextMenu>
    </>
  );
};

export default HeaderCell;
