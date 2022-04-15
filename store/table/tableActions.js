export const types = {
  SET_TABLE_DATA: "SET_TABLE_DATA",
  SET_NO_OF_ROWS: "SET_NO_OF_ROWS",
  SET_NO_OF_COLUMNS: "SET_NO_OF_COLUMNS",
  SET_COLUMN_HEADERS: "SET_COLUMN_HEADERS",
  SET_ROW_HEADERS: "SET_ROW_HEADERS",
};

export const tableActions = {
  setTableData: (payload) => ({ type: types.SET_TABLE_DATA, payload }),
  setNoOfRows: (payload) => ({ type: types.SET_NO_OF_ROWS, payload }),
  setNoOfColumns: (payload) => ({ type: types.SET_NO_OF_COLUMNS, payload }),
  setColumnHeaders: (payload) => ({ type: types.SET_COLUMN_HEADERS, payload }),
  setRowHeaders: (payload) => ({ type: types.SET_ROW_HEADERS, payload }),
};
