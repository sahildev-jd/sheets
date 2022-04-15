import { types } from "./tableActions";

const initialState = {
  tableData: [],
  noOfRows: 0,
  noOfColumns: 0,
  columnHeaders: [],
  rowHeaders: [],
};

export function tableReducer(state = initialState, action) {
  switch (action.type) {
    case types?.SET_TABLE_DATA: {
      const payload = action.payload;
      return { ...state, tableData: payload };
    }
    case types?.SET_NO_OF_ROWS: {
      const payload = action.payload;
      return { ...state, noOfRows: payload };
    }
    case types?.SET_NO_OF_COLUMNS: {
      const payload = action.payload;
      return { ...state, noOfColumns: payload };
    }
    case types?.SET_COLUMN_HEADERS: {
      const payload = action.payload;
      return { ...state, columnHeaders: payload };
    }
    case types?.SET_ROW_HEADERS: {
      const payload = action.payload;
      return { ...state, rowHeaders: payload };
    }
    default:
      return state;
  }
}
